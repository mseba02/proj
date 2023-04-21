import { gql } from '@apollo/client'

const CREATE_USER = gql`
  mutation createUser(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
  ) {
    createUser(
      password: $password
      email: $email
      firstName: $firstName
      lastName: $lastName
    ) {
      status
    }
  }
`
export default CREATE_USER
