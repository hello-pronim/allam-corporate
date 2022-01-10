import { useEffect, useState } from "react";
import type { NextPage } from "next";
import { gql } from "@apollo/client";
import { get } from "lodash";
import craftAPI from "@libs/api";
import { useRecoilValue } from "recoil";
import { layoutQuery } from "@libs/queries";
import { videoModalState } from "@states/atoms/videoModal";
import { OverViewPageProps, VideoModel } from "@models";
import Layout from "@components/Layout/Layout";
import Divider from "@components/Common/Divider/Divider";
import VideoModal from "@components/VideoModal/VideoModal";
import AllBenefits from "@sections/Home/AllBenefits/AllBenefits";
import FeaturedVideo from "@sections/OurVideos/FeaturedVideo/FeaturedVideo";
import LatestVideos from "@sections/OurVideos/LatestVideos/LatestVideos";
import OldVideos from "@sections/OurVideos/OldVideos/OldVideos";
import BackgroundWrapper from "@sections/News/BackgroundWrapper/BackgroundWrapper";

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
  const easyBuy = get(pageData, "entry.globalPromos[0]");

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

  return (
    <Layout layoutData={layoutData}>
      <BackgroundWrapper>
        <FeaturedVideo video={featuredVideo} />
        <LatestVideos videos={latestVideos} />
        <div style={{ backgroundColor: "#eef2f5" }}>
          <Divider />
        </div>
        <OldVideos videos={oldVideos} />
        <AllBenefits data={easyBuy} />
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
        globalPromos {
          ... on globalPromos_easybuy_BlockType {
            headingRedactor
            introBlurb
            buttons {
              ... on buttons_BlockType {
                buttonLabel
                buttonLink
                buttonType
              }
            }
          }
        }
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
