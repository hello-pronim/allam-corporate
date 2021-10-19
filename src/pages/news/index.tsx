import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import FeaturedPost from "@sections/News/FeaturedPost/FeaturedPost";
import PostCard from "@sections/News/PostCard/PostCard";
import CardGrid from "@components/CardGrid/CardGrid";
import { featuredContent } from "@sections/News/FeaturedPost/constant";
import { PostContent } from "@sections/News/PostCard/constant";
import CtaPanel from "@components/CtaPanel/CtaPanel";
import BackgroundWrapper from '@sections/News/BackgroundWrapper/BackgroundWrapper';
import PostSlider from '@sections/News/PostSlider/PostSlider';

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
      <CardGrid
        title="Older posts"
        col={[2, 3]}
        colGap={40}
        rowGap={60}
        padding={[51, 102]}
        maxItems={9}
        smallTitle={true}
      >
        {PostContent.map((post, index) => {
          return <PostCard key={index} content={post} />;
        })}
      </CardGrid>
      <CtaPanel/>
      </BackgroundWrapper>
    </Layout>
  );
};

export default News;
