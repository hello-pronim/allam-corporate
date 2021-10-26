import { gql } from "@apollo/client";

export const trustQuery = gql`
  query trustMaker {
    globalSet(handle: "trustMakers") {
      ... on trustMakers_GlobalSet {
        trustFeature {
          ... on trustFeature_feature_BlockType {
            heading
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
