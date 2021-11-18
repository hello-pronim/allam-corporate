import type { NextPage } from "next";
import get from "lodash/get";
import { useRecoilValue } from "recoil";
import craftAPI from "@libs/api";
import { propsFind } from "@utils/propsFind";
import { allamAdvQuery, easyBuyPurchaseQuery } from "@libs/queries";
import { AllamAdvPageProps } from "@models";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/AllamAdvantage/Hero/Hero";
import Advantages from "@sections/EasyBuy/Advantages/Advantages";
import EasySteps from "@sections/EasyBuy/EasySteps/EasySteps";
import RegisterPanel from "@components/RegisterPanel/RegisterPanel";
import { videoModalState } from "@states/atoms/videoModal";
import VideoModal from "@components/VideoModal/VideoModal";

const AllamAdvantages: NextPage<AllamAdvPageProps> = ({
  easyBuy,
  allamAdvantages,
}) => {
  const { isOpen } = useRecoilValue(videoModalState);
  const globalPromos = get(
    allamAdvantages,
    "globalSet.allamAdvantage[0].globalPromos",
    ""
  );

  return (
    <Layout>
      <Hero
        heading={get(easyBuy, "globalSet.easybuyPurchase[0].heading", "")}
        introBlurb={get(
          easyBuy,
          "globalSet.easybuyPurchase[0].description",
          ""
        )}
      />
      <EasySteps
        steps={get(easyBuy, "globalSet.easybuySteps", [])}
        videoData={get(easyBuy, "globalSet.storyVideo[0]")}
      />
      <Advantages
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

  return {
    props: {
      allamAdvantages,
      easyBuy,
    },
    revalidate: 500,
  };
};

export default AllamAdvantages;
