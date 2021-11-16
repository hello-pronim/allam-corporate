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

export const allamAdvQuery = gql`
  query allamAdvantages {
    globalSet(handle: "allamAdvantages") {
      ... on allamAdvantages_GlobalSet {
        allamAdvantage {
          ... on allamAdvantage_allamAdvantage_BlockType {
            heading
            description
            subHeading
            advantages {
              ... on advantages_advantage_BlockType {
                label
                description
                icon {
                  url
                  title
                  width
                  height
                }
              }
            }
            globalPromos {
              ... on globalPromos_estateRegister_BlockType {
                headingRedactor
                description
              }
            }
          }
        }
      }
    }
  }
`;

export const easyBuyPurchaseQuery = gql`
  query easybuyPurchase {
    globalSet(handle: "easybuyPurchase") {
      ... on easybuyPurchase_GlobalSet {
        storyVideo {
          ... on storyVideo_easybuyStory_BlockType {
            titleImage {
              url
              title
              width
              height
            }
            videoLink
          }
        }
        easybuyPurchase {
          ... on easybuyPurchase_easybuyPurchase_BlockType {
            heading
            description
          }
        }
        easybuySteps {
          ... on easybuySteps_easybuyStep_BlockType {
            heading
            description
          }
        }
      }
    }
  }
`;
