import { gql } from "@apollo/client";

export const ADDRESS_LOOKUP = gql`
  query Query($postcode: String!) {
    addressLookup(postcode: $postcode) {
      postcode
      latitude
      longitude
      addresses {
        formatted_address
        thoroughfare
        building_name
        sub_building_name
        sub_building_number
        building_number
        line_1
        line_2
        line_3
        line_4
        locality
        town_or_city
        county
        district
        country
        _id
        fullAddress
      }
    }
  }
`;
