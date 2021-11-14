import type { NextPage } from "next";
import get from "lodash/get";
import { useRecoilValue } from "recoil";
import craftAPI from "@libs/api";
import {
  allamAdvPageQuery,
  easyBuyPageQuery,
  allamAdvQuery,
  easyBuyPurchaseQuery,
} from "@libs/queries";
import { propsFind } from "@utils/propsFind";
import { AllamAdvPageProps } from "@models";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/AllamAdvantage/Hero/Hero";
import StoryVideo from "@components/StoryVideo/StoryVideo";
import { videoModalState } from "@states/atoms/videoModal";
import VideoModal from "@components/VideoModal/VideoModal";

const AllamAdvantages: NextPage<AllamAdvPageProps> = ({
  advPageData,
  easyBuyPageData,
  advantages,
  easyBuy,
}) => {
  const { isOpen } = useRecoilValue(videoModalState);
  console.log(easyBuy);

  return (
    <Layout>
      <Hero
        heading={get(advPageData, "entry.heading", "")}
        introBlurb={get(advPageData, "entry.description", "")}
      />
      <StoryVideo data={get(easyBuy, "globalSet.storyVideo[0]")} />
      <VideoModal isModalOpen={isOpen} />
    </Layout>
  );
};

export const getStaticProps = async function () {
  const advPageData = await craftAPI(allamAdvPageQuery);
  const easyBuyPageData = await craftAPI(easyBuyPageQuery);
  const advantages = await craftAPI(allamAdvQuery);
  const easyBuy = await craftAPI(easyBuyPurchaseQuery);

  return {
    props: {
      advPageData,
      easyBuyPageData,
      advantages,
      easyBuy,
    },
    revalidate: 500,
  };
};

export default AllamAdvantages;
