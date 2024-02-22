import { gql } from "@apollo/client";

export const GET_COUNTRY = gql`
query Country($code: ID!) {
  country(code: $code) {
    name
    emoji
    currency
    capital
    continent {
      name
    }
    languages {
      name
    }
    states {
      name
    }
  }
}
`;