import type { NextPage } from "next";
import get from "lodash/get";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { useRecoilValue } from "recoil";
import { PageProps } from "@models";
import Layout from "@components/Layout/Layout";
import VideoHero from "@sections/AboutUs/VideoHero/VideoHero";
import FullWidthImage from "@components/FullWidthImage/FullWidthImage";
import TextBlock from "@components/TextBlock/TextBlock";
import LeadingTimeline from "@sections/AboutUs/LeadingTimeline/LeadingTimeline";
import TimelineGraph from "@sections/AboutUs/TimelineGraph/TimelineGraph";
import { videoModalState } from "@states/atoms/videoModal";
import VideoModal from "@components/VideoModal/VideoModal";

const RetirementLiving: NextPage<PageProps> = ({ pageData }) => {
  const pageLayout = get(pageData, "entry.aboutLayout", []);
  console.log(pageLayout);
  const { isOpen } = useRecoilValue(videoModalState);

  return (
    <Layout>
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

  return {
    props: {
      pageData,
    },
    revalidate: 500,
  };
};

export default RetirementLiving;
