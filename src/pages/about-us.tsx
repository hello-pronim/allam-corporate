import type { NextPage } from "next";
import get from "lodash/get";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { useRecoilValue } from "recoil";
import { PageProps } from "@models";
import { layoutQuery } from "@libs/queries";
import { videoModalState } from "@states/atoms/videoModal";
import Layout from "@components/Layout/Layout";
import TextBlock from "@components/TextBlock/TextBlock";
import VideoModal from "@components/VideoModal/VideoModal";
import FullWidthImage from "@components/FullWidthImage/FullWidthImage";
import VideoHero from "@sections/AboutUs/VideoHero/VideoHero";
import LeadingTimeline from "@sections/AboutUs/LeadingTimeline/LeadingTimeline";
import TimelineGraph from "@sections/AboutUs/TimelineGraph/TimelineGraph";

const RetirementLiving: NextPage<PageProps> = ({ pageData, layoutData }) => {
  const pageLayout = get(pageData, "entry.aboutLayout", []);
  const { isOpen } = useRecoilValue(videoModalState);

  return (
    <Layout layoutData={layoutData}>
      {pageLayout?.map((block: any, id: number) => (
        <div key={id}>
          {block.__typename === "aboutLayout_videoHero_BlockType" && (
            <VideoHero data={block} />
          )}
          {block.__typename === "aboutLayout_leadingContent_BlockType" && (
            <LeadingTimeline textContent={block} />
          )}
          {block.__typename === "aboutLayout_textBlock_BlockType" && (
            <div style={{ background: "#eef2f5" }}>
              <TextBlock data={block} />
            </div>
          )}
          {block.__typename === "aboutLayout_timelineGraph_BlockType" && (
            <TimelineGraph data={block} />
          )}
          {block.__typename === "aboutLayout_fullWidthImage_BlockType" && (
            <FullWidthImage image={block?.titleImage?.[0]?.url} />
          )}
        </div>
      ))}
      <VideoModal isModalOpen={isOpen} />
    </Layout>
  );
};

const pageQuery = gql`
  query aboutUsPage {
    entry(section: "aboutUs") {
      ... on aboutUs_aboutUs_Entry {
        aboutLayout {
          ... on aboutLayout_videoHero_BlockType {
            heading
            subHeading
            videoLink
            titleImage {
              url
            }
          }
          ... on aboutLayout_leadingContent_BlockType {
            heading
            description
          }
          ... on aboutLayout_timelineGraph_BlockType {
            heading
            titleImage {
              url
              title
              width
              height
            }
          }
          ... on aboutLayout_fullWidthImage_BlockType {
            titleImage {
              url
            }
          }
          ... on aboutLayout_textBlock_BlockType {
            heading
            description
          }
        }
      }
    }
  }
`;

export const getStaticProps = async function () {
  const pageData = await craftAPI(pageQuery);
  const layoutData = await craftAPI(layoutQuery);

  return {
    props: {
      pageData,
      layoutData,
    },
    revalidate: 60,
  };
};

export default RetirementLiving;
