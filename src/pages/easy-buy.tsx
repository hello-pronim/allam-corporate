import type { NextPage } from "next";
import get from "lodash/get";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { allamAdvQuery, easyBuyQuery } from "@libs/queries";
import { propsFind } from "@utils/propsFind";
import { PageProps } from "@models";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/Home/Hero/Hero";

const EasyBuyPage: NextPage<PageProps> = ({
  pageData,
  advantages,
  easyBuy,
}) => {
  const heroSlider = get(pageData, "entry.heroSlider", []);
  const homeLayouts = get(pageData, "entry.homepageLayout", []);
  const globalPromos = get(pageData, "entry.globalPromos", []);

  return (
    <Layout>
      {/* <Hero data={heroSlider} />
      <TrustMakers
        features={trustFeatures}
        data={propsFind(globalPromos, "globalPromos_trustMakers_BlockType")}
      />
      <PerfectEstate
        data={propsFind(homeLayouts, "homepageLayout_perfectEstate_BlockType")}
      />
      <Monterey
        data={propsFind(homeLayouts, "homepageLayout_monterey_BlockType")}
      />
      <Promotion
        data={propsFind(homeLayouts, "homepageLayout_promotion_BlockType")}
      />
      <FindHomes
        data={propsFind(homeLayouts, "homepageLayout_findHomes_BlockType")}
      />
      <AllBenefits
        data={propsFind(globalPromos, "globalPromos_easybuy_BlockType")}
      /> */}
    </Layout>
  );
};

const pageQuery = gql`
  query easyBuyPage {
    entry(section: "easybuyPage") {
      ... on easybuyPage_easybuyPage_Entry {
        heading
        description
        globalPromos {
          ... on globalPromos_estateRegister_BlockType {
            headingRedactor
            description
          }
        }
      }
    }
  }
`;

export const getStaticProps = async function () {
  const pageData = await craftAPI(pageQuery);
  const advantages = await craftAPI(allamAdvQuery);
  const easyBuy = await craftAPI(easyBuyQuery);

  return {
    props: {
      pageData,
      advantages,
      easyBuy,
    },
    revalidate: 500,
  };
};

export default EasyBuyPage;
