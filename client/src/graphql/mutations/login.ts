import { gql } from '@apollo/client'

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      token
    }
  }
`

export default LOGIN
