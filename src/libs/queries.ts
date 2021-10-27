import { gql } from "@apollo/client";

export const trustQuery = gql`
  query trustMakers {
    globalSet(handle: "trustMakers") {
      ... on trustMakers_GlobalSet {
        trustFeature {
          ... on trustFeature_feature_BlockType {
            heading
            subHeading
            icon {
              url
              width
              height
            }
          }
        }
      }
    }
  }
`;
