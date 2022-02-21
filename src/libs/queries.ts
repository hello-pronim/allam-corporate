import { gql } from "@apollo/client";

export const simpleEstatesQuery = gql`
  query estatesQuery {
    entries(section: "estates") {
      ... on estates_default_Entry {
        slug
        title
        logo {
          title
          url
          width
          height
        }
        suburb
        latitude
        longitude
      }
    }
  }
`;

export const fullEstatesQuery = gql`
  query estatesQuery {
    entries(section: "estates") {
      ... on estates_default_Entry {
        slug
        title
        introText
        streetAddress
        estateState(label: true)
        estateStatus
        retirementLiving
        logo {
          title
          url
          width
          height
        }
        postcode
        suburb
        latitude
        longitude
        geojson
        downloadableBrochure {
          url
        }
        masterPlanImage {
          url
        }
        galleryImages {
          title
          url
          width
          height
        }
        neighborhood {
          ... on neighborhoods_default_Entry {
            title
            amenities {
              ... on amenities_BlockType {
                amenityCategory {
                  ... on amenityCategories_Category {
                    title
                  }
                }
                amenityName
                address
                suburb
                latitude
                longitude
                externalUrl
              }
            }
          }
        }
        offersLink {
          ... on offersLink_BlockType {
            internalOffer {
              ... on promotions_default_Entry {
                title
                shortDescription
                introBlurb
                description
              }
            }
          }
        }
      }
    }
  }
`;

export const simpleHomeListQuery = gql`
  query homesQuery {
    entries(section: "homesAndLand") {
      ... on homesAndLand_default_Entry {
        slug
        title
        landOnly
        estate {
          ... on estates_default_Entry {
            title
          }
        }
      }
    }
  }
`;

export const fullHomeListQuery = gql`
  query homesQuery {
    entries(section: "homesAndLand") {
      ... on homesAndLand_default_Entry {
        slug
        title
        landOnly
        lotNumber
        address
        suburb
        estate {
          ... on estates_default_Entry {
            title
          }
        }
        homeDesign {
          title
        }
        sellingLabel
        openForInspection
        buildingSize
        landSize
        percentageComplete
        completionDate
        bedrooms
        bathrooms
        car
        images {
          url
          title
          width
          height
        }
        latitude
        longitude
      }
    }
  }
`;

export const simpleNewsQuery = gql`
  query newsQuery {
    entries(section: "newsAndEvents") {
      ... on newsAndEvents_default_Entry {
        slug
        title
        titleImage {
          title
          url
        }
        linkedEstates {
          ... on estates_default_Entry {
            title
          }
        }
      }
    }
  }
`;

export const fullNewsQuery = gql`
  query newsQuery {
    entries(section: "newsAndEvents") {
      ... on newsAndEvents_default_Entry {
        slug
        title
        category
        publishDate
        shortDescription
        description
        titleImage {
          title
          url
        }
        filesDownloads {
          url
        }
        linkedEstates {
          ... on estates_default_Entry {
            title
          }
        }
      }
    }
  }
`;

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

export const easyBuyFeatureQuery = gql`
  query easyBuyFeature {
    globalSet(handle: "easyBuyFeature") {
      ... on easyBuyFeature_GlobalSet {
        easyBuyFeature {
          ... on easyBuyFeature_easyBuyFeature_BlockType {
            heading
            description
            cta {
              label
              hyperlink {
                slug
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

export const layoutQuery = gql`
  query layout {
    navigation: globalSet(handle: "mainNavigation") {
      ... on mainNavigation_GlobalSet {
        menuItems {
          ... on menuItems_BlockType {
            linkName
            hyperlink {
              slug
            }
          }
        }
      }
    }
    footer: globalSet(handle: "footer") {
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
                linkLabel
                hyperlink {
                  slug
                }
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

export const amenityCategoryQuery = gql`
  query {
    categories {
      ... on amenityCategories_Category {
        title
      }
    }
  }
`;
