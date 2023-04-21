const bcrypt = require('bcryptjs')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

module.exports = {
  createUser: async function (
    { email, password, firstName, lastName },
    req,
    res,
  ) {
    const errors = []
    if (!validator.isEmail(email)) {
      errors.push({ message: 'E-Mail is invalid.' })
    }
    if (
      validator.isEmpty(password) ||
      !validator.isLength(password, { min: 5 })
    ) {
      const error = new Error('Password too short!')
      error.data = errors
      error.code = 422
      error.i18nKey = 'passshort'

      throw error
    }
    const existingUser = await User.findOne({ email: email })
    if (existingUser) {
      const error = new Error('User exists already!')
      error.i18nKey = 'userexists'

      throw error
    }
    const hashedPw = await bcrypt.hash(password, 12)
    const user = new User({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: hashedPw,
    })
    const createdUser = await user.save()
    return { ...createdUser._doc, _id: createdUser._id.toString() }
  },

  login: async function ({ email, password }) {
    const user = await User.findOne({ email: email })
    if (!user) {
      const error = new Error('User not found.')
      error.code = 401
      error.i18nKey = 'usernotfound'
      throw error
    }
    const isEqual = await bcrypt.compare(password, user.password)
    if (!isEqual) {
      const error = new Error('Password is incorrect.')
      error.code = 401
      error.i18nKey = 'password'
      throw error
    }
    const token = jwt.sign(
      {
        userId: user._id.toString(),
        email: user.email,
      },
      'somesupersecretsecret',
      { expiresIn: '24h' },
    )
    return { token: token, userId: user._id.toString() }
  },

  getUsers: async function (args, req) {
    if (!req.isAuth) {
      const error = new Error('Not authenticated!')
      error.code = 401
      throw error
    }
    const users = await User.find()
    return {
      users: users.map(user => {
        return {
          email: user.email.toString(),
          _id: user._id.toString(),
          firstName: user.firstName.toString(),
        }
      }),
    }
  },
}
