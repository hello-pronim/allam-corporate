import type { NextPage } from "next";
import Layout from "@components/Layout/Layout";
import StaticHero from "@components/StaticHero/StaticHero";
import FullWidthImage from "@components/FullWidthImage/FullWidthImage";
import TextBlock from "@components/TextBlock/TextBlock";
import {TextContent, TimelineCards, HeroContent} from "@sections/AboutUs/constants";
import InlineImage from "@components/InlineImage/InlineImage";
import Timeline from '@components/Timeline/Timeline';

const RetirementLiving: NextPage = () => {
  return (
    <Layout>
      <StaticHero content={HeroContent}/>
      <TextBlock title={TextContent[0].Title} paragraph={TextContent[0].Paragraph} background="angled-right"/>
      <Timeline cards={TimelineCards}/>
      <TextBlock title={TextContent[1].Title} paragraph={TextContent[1].Paragraph} />
      <InlineImage src="/assets/images/temp/graph.svg" width={1308} height={556}/>
      <TextBlock title={TextContent[2].Title} />
      <FullWidthImage image="/assets/images/temp/rugby.png" alignment={['center', 'top']}/>
      <TextBlock title={TextContent[3].Title} paragraph={TextContent[3].Paragraph} background="angled-left"/>
    </Layout>
  );
};

export default RetirementLiving;
