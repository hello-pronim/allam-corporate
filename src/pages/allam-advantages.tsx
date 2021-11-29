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
import { AllamAdvPageProps } from "@models";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/AllamAdvantage/Hero/Hero";
import Advantages from "@sections/AllamAdvantage/Advantages/Advantages";
import EasyBuy from "@sections/AllamAdvantage/EasyBuy/EasyBuy";
import RegisterPanel from "@components/RegisterPanel/RegisterPanel";
import { videoModalState } from "@states/atoms/videoModal";
import VideoModal from "@components/VideoModal/VideoModal";

const AllamAdvantages: NextPage<AllamAdvPageProps> = ({
  easyBuy,
  allamAdvantages,
  layoutData,
}) => {
  const { isOpen } = useRecoilValue(videoModalState);
  const globalPromos = get(
    allamAdvantages,
    "globalSet.allamAdvantage[0].globalPromos",
    ""
  );

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
      <RegisterPanel
        data={propsFind(globalPromos, "globalPromos_estateRegister_BlockType")}
      />
      <VideoModal isModalOpen={isOpen} />
    </Layout>
  );
};

export const getStaticProps = async function () {
  const allamAdvantages = await craftAPI(allamAdvQuery);
  const easyBuy = await craftAPI(easyBuyPurchaseQuery);
  const layoutData = await craftAPI(layoutQuery);

  return {
    props: {
      allamAdvantages,
      easyBuy,
      layoutData,
    },
    revalidate: 60,
  };
};

export default AllamAdvantages;
