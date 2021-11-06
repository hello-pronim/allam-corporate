import type { NextPage } from "next";
import get from "lodash/get";
import { gql } from "@apollo/client";
import craftAPI from "@libs/api";
import { propsFind } from "@utils/propsFind";
import { PageProps } from "@models";
import Layout from "@components/Layout/Layout";
import VideoHero from "@sections/AboutUs/VideoHero/VideoHero";
import FullWidthImage from "@components/FullWidthImage/FullWidthImage";
import TextBlock from "@components/TextBlock/TextBlock";
import LeadingTimeline from "@sections/AboutUs/LeadingTimeline/LeadingTimeline";
import InlineImage from "@components/InlineImage/InlineImage";

const RetirementLiving: NextPage<PageProps> = ({ pageData }) => {
  const pageLayout = get(pageData, "entry.aboutLayout", []);
  console.log(pageLayout);

  return (
    <Layout>
      <VideoHero
        data={propsFind(pageLayout, "aboutLayout_videoHero_BlockType")}
      />
      <LeadingTimeline
        textContent={propsFind(
          pageLayout,
          "aboutLayout_leadingContent_BlockType"
        )}
      />

      {/* <TextBlock
        title={TextContent[1].Title}
        paragraph={TextContent[1].Paragraph}
      /> */}
      <InlineImage
        src="/assets/images/temp/graph.svg"
        width={1308}
        height={556}
      />
      {/* <TextBlock title={TextContent[2].Title} /> */}
      <FullWidthImage
        image="/assets/images/temp/rugby.png"
        alignment={["center", "top"]}
      />
      {/* <TextBlock
        title={TextContent[3].Title}
        paragraph={TextContent[3].Paragraph}
        background="angled-left"
      /> */}
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
