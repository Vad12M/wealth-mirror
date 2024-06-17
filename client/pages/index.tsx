import VideoBlock from "@/components/mainHome/blocks/VideoBlock";
import ServicesBlock from "@/components/mainHome/blocks/ServicesBlock";
import PriceBlock from "@/components/mainHome/blocks/PriceBlock";
import HeroBlock from "@/components/mainHome/blocks/HeroBlock";
import FAQBlock from "@/components/mainHome/blocks/FAQBlock";
import PlatformToAnalyzeBlock from "@/components/mainHome/blocks/PlatformToAnalyzeBlock";
import { useGetMeQuery } from "@/store/api/apiSlice";
import SpotlightBlock from "@/components/SpotlightBlock";


export default function Home() {
  const { data } = useGetMeQuery();
  return (
    <main className="w-full">
      <HeroBlock/>
      <VideoBlock/>
      <PlatformToAnalyzeBlock/>
      <ServicesBlock/>
      <PriceBlock/>
      <FAQBlock/>
      <SpotlightBlock/>
    </main>
  );
}
