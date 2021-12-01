import type { NextPage } from "next";
import { GetStaticProps, GetStaticPaths } from "next";
import { get } from "lodash";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { layoutQuery } from "@libs/queries";
import Layout from "@components/Layout/Layout";
import Hero from "@sections/LandDetail/Hero/Hero";
import BannerImage from "@sections/LandDetail/BannerImage/BannerImage";

const LandDetail: NextPage<any> = ({ land, layoutData }) => {
  console.log("land", land);
  const title = get(land, "entry.title", "");
  const suburb = get(land, "entry.suburb", "");
  const estateState = get(land, "entry.estate[0].title", "");
  const sellingLabel = get(land, "entry.sellingLabel");
  const landSize = get(land, "entry.landSize", 0);
  const bannerImage = get(land, "entry.images[0]", "");

  return (
    <Layout layoutData={layoutData}>
      <Hero title={title} landSize={landSize} sellingLabel={sellingLabel} />
      <BannerImage image={bannerImage} />
      {/* 
      <LeadingInfo introText={get(estate, "entry.introText", "")} />
      <HomeList />
      <MasterPlan />
      <Deposit />
      <News />
      <SimilarEstates />
      <SignUpEstate /> */}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async function ({ params }) {
  const slug = get(params, "slug");
  const layoutData = await craftAPI(layoutQuery);

  const landQuery = gql`
    query landQuery($slug: [String] = "${slug}") {
      entry(section: "homesAndLand", slug: $slug) {
        ... on homesAndLand_default_Entry {
          title
          suburb
          lotNumber
          address
          estate {
            title
          }
          images {
            title
            url
            width
            height
          }
          sellingLabel
          landSize
          introBlurb
          latitude
          longitude
          downloadableBrochure {
            url
          }
        }
      }
    }
  `;

  const land = await craftAPI(landQuery);

  return {
    props: {
      land,
      layoutData,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default LandDetail;
