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

export const navigationQuery = gql`
  query navigation {
    globalSet(handle: "mainNavigation") {
      ... on mainNavigation_GlobalSet {
        menuItems {
          ... on menuItems_BlockType {
            linkName
            hyperlink
          }
        }
      }
    }
  }
`;

export const footerQuery = gql`
  query footer {
    globalSet(handle: "footer") {
      ... on footer_GlobalSet {
        heading
        buttons {
          ... on buttons_BlockType {
            buttonLabel
            buttonLink
            buttonType
          }
        }
        footerBottom {
          ... on footerBottom_footerBottom_BlockType {
            copyrightText
            bottomLinks {
              ... on bottomLinks_BlockType {
                ctaLabel
                ctaLink
              }
            }
            socialLinks {
              ... on socialLinks_BlockType {
                socialName
                socialLink
              }
            }
          }
        }
      }
    }
  }
`;
