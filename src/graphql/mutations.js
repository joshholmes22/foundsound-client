import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation Mutation($signupInput: SignupInput!) {
    signup(signupInput: $signupInput) {
      success
    }
  }
`;

export const LOGIN = gql`
  mutation Mutation($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      success
      token
      user {
        id
        firstName
        lastName
        email
        socialMedia
        imageUrl
        userType
      }
    }
  }
`;
