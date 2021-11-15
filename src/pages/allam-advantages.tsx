import type { NextPage } from "next";
import get from "lodash/get";
import { useRecoilValue } from "recoil";
import craftAPI from "@libs/api";
import { allamAdvQuery, easyBuyPurchaseQuery } from "@libs/queries";
import { AllamAdvPageProps } from "@models";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/AllamAdvantage/Hero/Hero";
import StoryVideo from "@components/StoryVideo/StoryVideo";
import Advantages from "@sections/AllamAdvantage/Advantages/Advantages";
import EasyBuy from "@sections/AllamAdvantage/EasyBuy/EasyBuy";
import { videoModalState } from "@states/atoms/videoModal";
import VideoModal from "@components/VideoModal/VideoModal";

const AllamAdvantages: NextPage<AllamAdvPageProps> = ({
  easyBuy,
  allamAdvantages,
}) => {
  const { isOpen } = useRecoilValue(videoModalState);
  console.log("allamAdvantages", allamAdvantages);
  console.log("easyBuy", easyBuy);

  return (
    <Layout>
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
      <StoryVideo data={get(easyBuy, "globalSet.storyVideo[0]")} />
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
      <VideoModal isModalOpen={isOpen} />
    </Layout>
  );
};

export const getStaticProps = async function () {
  const allamAdvantages = await craftAPI(allamAdvQuery);
  const easyBuy = await craftAPI(easyBuyPurchaseQuery);

  return {
    props: {
      allamAdvantages,
      easyBuy,
    },
    revalidate: 500,
  };
};

export default AllamAdvantages;
