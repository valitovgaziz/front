import { gql } from 'graphql-tag'

export const SIGNUP_USER = gql`
  mutation signupUser($input: SignupUserInput!) {
    signupUser(input: $input) {
      status
    }
  }
`