import { useGetMeQuery } from "@/store/api/apiSlice";
import JoinWaitlistBlock from "@/components/home/JoinWaitlistBlock";
import JoinWaitlistGraphicsBlock from "@/components/home/JoinWaitlistGraphicsBlock";
import OurServicesBlock from "@/components/home/OurServicesBlock";
import FAQBlock from "@/components/mainHome/blocks/FAQBlock";


export default function Home() {
  return (
    <main className="w-full">
      <JoinWaitlistBlock/>
      <div className="w-full flex justify-center -mt-[300px]">
        <JoinWaitlistGraphicsBlock/>
      </div>
      <OurServicesBlock/>
      <FAQBlock/>
    </main>
  );
}
