import type { NextPage } from "next";
import get from "lodash/get";
import { useRecoilValue } from "recoil";
import craftAPI from "@libs/api";
import { propsFind } from "@utils/propsFind";
import {
  allamAdvQuery,
  easyBuyPurchaseQuery,
  layoutQuery,
} from "@libs/queries";
import { AllamAdvPageProps, OfferModel } from "@models";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/AllamAdvantage/Hero/Hero";
import Advantages from "@sections/AllamAdvantage/Advantages/Advantages";
import EasyBuy from "@sections/AllamAdvantage/EasyBuy/EasyBuy";
import { videoModalState } from "@states/atoms/videoModal";
import VideoModal from "@components/VideoModal/VideoModal";
import { gql } from "@apollo/client";

import PromotionSection from "@sections/AllamAdvantage/PromotionSection/PromotionSection";

const AllamAdvantages: NextPage<AllamAdvPageProps> = ({
  pageData,
  easyBuy,
  allamAdvantages,
  layoutData,
}) => {
  const { isOpen } = useRecoilValue(videoModalState);
  const offer: OfferModel = get(pageData, "entry.linkedPromotion[0]", null);

  return (
    <Layout layoutData={layoutData}>
      <Hero
        heading={get(
          allamAdvantages,
          "globalSet.allamAdvantage[0].heading",
          ""
        )}
        introBlurb={get(
          allamAdvantages,
          "globalSet.allamAdvantage[0].description",
          ""
        )}
      />
      <Advantages
        subheading={get(
          allamAdvantages,
          "globalSet.allamAdvantage[0].subHeading",
          ""
        )}
        advantageList={get(
          allamAdvantages,
          "globalSet.allamAdvantage[0].advantages",
          []
        )}
        videoData={get(easyBuy, "globalSet.storyVideo[0]")}
      />
      <EasyBuy
        heading={get(easyBuy, "globalSet.easybuyPurchase[0].heading", "")}
        introBlurb={get(
          easyBuy,
          "globalSet.easybuyPurchase[0].description",
          ""
        )}
        steps={get(easyBuy, "globalSet.easybuySteps", [])}
      />
      {offer ? <PromotionSection offer={offer} /> : null}

      <VideoModal isModalOpen={isOpen} />
    </Layout>
  );
};

const pageQuery = gql`
  query allamAdvantagesPage {
    entry(section: "allamAdvantagesPage") {
      ... on allamAdvantagesPage_allamAdvantagesPage_Entry {
        linkedPromotion {
          ... on promotions_default_Entry {
            slug
            title
            textColor
            shortDescription
            introBlurb
            description
            homePageBanner {
              title
              url
            }
            titleImage {
              title
              url
            }
          }
        }
      }
    }
  }
`;

export const getStaticProps = async function () {
  const allamAdvantages = await craftAPI(allamAdvQuery);
  const easyBuy = await craftAPI(easyBuyPurchaseQuery);
  const layoutData = await craftAPI(layoutQuery);
  const pageData = await craftAPI(pageQuery);

  return {
    props: {
      pageData,
      allamAdvantages,
      easyBuy,
      layoutData,
    },
    revalidate: 60,
  };
};

export default AllamAdvantages;
