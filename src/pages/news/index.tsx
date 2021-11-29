import type { NextPage } from "next";
import craftAPI from "@libs/api";
import { layoutQuery } from "@libs/queries";
import { PageProps } from "@models";
import Layout from "@components/Layout/Layout";
import CardGrid from "@components/CardGrid/CardGrid";
import Divider from "@components/Common/Divider/Divider";
import PostCard from "@sections/News/PostCard/PostCard";
import PostSlider from "@sections/News/PostSlider/PostSlider";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";
import { featuredContent } from "@sections/News/FeaturedPost/constant";
import { PostContent } from "@sections/News/PostCard/constant";
import FeaturedPost from "@sections/News/FeaturedPost/FeaturedPost";
import BackgroundWrapper from "@sections/News/BackgroundWrapper/BackgroundWrapper";

const News: NextPage<PageProps> = ({ layoutData }) => {
  return (
    <Layout layoutData={layoutData}>
      {/* <BackgroundWrapper>
        <FeaturedPost content={featuredContent} />
        <PostSlider>
          {PostContent.map((post, index) => {
            return <PostCard key={index} content={post} />;
          })}
        </PostSlider>
        <Divider />
        <CardGrid
          title="Older posts"
          col={[2, 3]}
          colGap={40}
          rowGap={60}
          padding={[51, 80]}
          maxItems={9}
          smallTitle={true}
        >
          {PostContent.map((post, index) => {
            return <PostCard key={index} content={post} />;
          })}
        </CardGrid>
        <AllBenefits />
      </BackgroundWrapper> */}
    </Layout>
  );
};

export const getStaticProps = async function () {
  const layoutData = await craftAPI(layoutQuery);

  return {
    props: {
      layoutData,
    },
    revalidate: 60,
  };
};

export default News;
