import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { useRecoilValue } from "recoil";
import { layoutQuery } from "@libs/queries";
import { videoModalState } from "@states/atoms/videoModal";
import { OverViewPageProps, VideoModel } from "@models";
import Layout from "@components/Layout/Layout";
import CardGrid from "@components/CardGrid/CardGrid";
import Divider from "@components/Common/Divider/Divider";
import VideoCard from "@components/VideoCard/VideoCard";
import VideoModal from "@components/VideoModal/VideoModal";
import LatestSlider from "@components/LatestSlider/LatestSlider";
import FeaturedVideo from "@sections/OurVideos/FeaturedVideo/FeaturedVideo";
import BackgroundWrapper from "@sections/News/BackgroundWrapper/BackgroundWrapper";
import { get } from "lodash";

const OurVideos: NextPage<OverViewPageProps> = ({
  pageData,
  layoutData,
  listingData,
}) => {
  const { isOpen } = useRecoilValue(videoModalState);
  const [videos, setVideos] = useState<VideoModel[]>([]);
  const [latestVideos, setLatestVideos] = useState<VideoModel[]>([]);
  const [oldVideos, setOldVideos] = useState<VideoModel[]>([]);

  const featuredVideo = get(pageData, "entry.featuredVideo[0]", []);
  const LATEST_VIDEO_COUNT = get(pageData, "entry.latestVideoCount", 4);
  console.log(featuredVideo);

  useEffect(() => {
    setVideos(
      listingData.entries.sort((a: VideoModel, b: VideoModel) =>
        a.dateCreated > b.dateCreated ? -1 : 1
      )
    );
  }, [listingData]);

  useEffect(() => {
    setLatestVideos(videos.slice(0, LATEST_VIDEO_COUNT));
    setOldVideos(videos.slice(LATEST_VIDEO_COUNT, videos.length));
  }, [videos, LATEST_VIDEO_COUNT]);

  console.log(featuredVideo);

  return (
    <Layout layoutData={layoutData}>
      <BackgroundWrapper>
        <FeaturedVideo video={featuredVideo} />
        <LatestSlider>
          {latestVideos.map((video, index) => (
            <VideoCard key={index} video={video} variant="latest" />
          ))}
        </LatestSlider>
        <Divider />
        {/* <CardGrid
          title="Older posts"
          col={[2, 3]}
          colGap={40}
          rowGap={60}
          padding={[51, 80]}
          maxItems={9}
          smallTitle={true}
        >
          {PostContent.map((post, index) => {
            return <VideoCard key={index} content={post} />;
          })}
        </CardGrid> */}
      </BackgroundWrapper>
      <VideoModal isModalOpen={isOpen} />
    </Layout>
  );
};

const pageQuery = gql`
  query videosPage {
    entry(section: "ourVideosPage") {
      ... on ourVideosPage_ourVideosPage_Entry {
        featuredVideo {
          ... on ourVideos_default_Entry {
            title
            description
            videoLink
            titleImage {
              url
              title
              width
              height
            }
          }
        }
        latestVideoCount
      }
    }
  }
`;

const videosQuery = gql`
  query videosQuery {
    entries(section: "ourVideos") {
      ... on ourVideos_default_Entry {
        title
        description
        videoLink
        titleImage {
          url
          title
          width
          height
        }
        dateCreated
      }
    }
  }
`;

export const getStaticProps = async function () {
  const pageData = await craftAPI(pageQuery);
  const layoutData = await craftAPI(layoutQuery);
  const listingData = await craftAPI(videosQuery);

  return {
    props: {
      pageData,
      layoutData,
      listingData,
    },
    revalidate: 60,
  };
};

export default OurVideos;
