import VideoBlock from "@/components/mainHome/blocks/VideoBlock";
import ServicesBlock from "@/components/mainHome/blocks/ServicesBlock";
import PriceBlock from "@/components/mainHome/blocks/PriceBlock";
import HeroBlock from "@/components/mainHome/blocks/HeroBlock";
import FAQBlock from "@/components/mainHome/blocks/FAQBlock";
import PlatformToAnalyzeBlock from "@/components/mainHome/blocks/PlatformToAnalyzeBlock";
import { useGetMeQuery } from "@/store/api/apiSlice";


export default function Home() {
  const { data } = useGetMeQuery();
  return (
    <main>
      <HeroBlock/>
      <VideoBlock/>
      <PlatformToAnalyzeBlock/>
      <ServicesBlock/>
      <PriceBlock/>
      <FAQBlock/>
    </main>
  );
}
