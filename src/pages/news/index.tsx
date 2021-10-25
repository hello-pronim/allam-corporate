import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import FeaturedPost from "@sections/News/FeaturedPost/FeaturedPost";
import Divider from "@components/Common/Divider/Divider";
import PostCard from "@sections/News/PostCard/PostCard";
import CardGrid from "@components/CardGrid/CardGrid";
import { featuredContent } from "@sections/News/FeaturedPost/constant";
import { PostContent } from "@sections/News/PostCard/constant";
import BackgroundWrapper from "@sections/News/BackgroundWrapper/BackgroundWrapper";
import PostSlider from "@sections/News/PostSlider/PostSlider";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";

const News: NextPage = () => {
  console.log(PostContent);
  return (
    <Layout>
      <BackgroundWrapper>
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
      </BackgroundWrapper>
    </Layout>
  );
};

export default News;
