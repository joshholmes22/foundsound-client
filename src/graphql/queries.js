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

export const GET_ALL_EVENTS = gql`
  query Query {
    getAllEvents {
      id
      name
      description
      address {
        _id
        fullAddress
      }
      postcode
      startDate
      endDate
      startTime
      endTime
      imageUrl
      tags {
        name
      }
      adverts {
        event
        isPaid
        expires
      }
      eventOwner {
        id
        firstName
        lastName
        email
        imageUrl
        imageFileName
        socialMedia
        userType
      }
    }
  }
`;

export const GET_ALL_EVENTS_FOR_OWNER = gql`
  query Query($eventOwner: ID!) {
    getAllEventsForOwner(eventOwner: $eventOwner) {
      name
      description
      address {
        _id
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
        fullAddress
      }
      postcode
      startDate
      endDate
      startTime
      endTime
      imageUrl
      tags {
        name
      }
      eventOwner {
        id
        firstName
        lastName
        email
        imageUrl
        imageFileName
        socialMedia
        userType
      }
      id
    }
  }
`;
