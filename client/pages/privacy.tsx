import Typography from "@/ui/typography/Typography";
import PrivacyPagesLayout from "@/components/layouts/PrivacyPagesLayout";
import ListBlock from "@/ui/listblock/listBlock";

export default function Privacy() {
  return (
    <PrivacyPagesLayout
      title="Privacy Policy"
      lastUpdated="Last updated on xx June,2024"
      iconsContainer={(
        <div className="mt-20">
          <img src="/privacyIcons/carGreen2.svg" alt="car" className="-mt-[250px] floating delay-1"/>
          <img src="/privacyIcons/smallDollar4.svg" alt="dollar" className="-mt-32 floating delay-2"/>
          <img src="/privacyIcons/bigDollar1.svg" alt="dollar" className="-mt-40 floating delay-3"/>
          <img src="/privacyIcons/smallDollar1.svg" alt="dollar" className="-mt-[310px] ml-[400px] floating delay-4"/>
          <img src="/privacyIcons/bigTime2.svg" alt="time" className="ml-[380px] mt-10 floating delay-5"/>
          <img src="/privacyIcons/houseRed.svg" alt="house" className="-mt-[150px] -ml-10 floating delay-6"/>
          <img src="/privacyIcons/greenButton.svg" alt="button" className="-mt-[380px] ml-40 floating delay-7"/>
          <img src="/privacyIcons/carGreen.svg" alt="car" className="-mt-[270px] -ml-[50px] floating delay-8"/>
          <img src="/privacyIcons/smallDollar2.svg" alt="dollar" className="-mt-32 ml-[450px] floating delay-1"/>
          <img src="/privacyIcons/tree.svg" alt="dollar" className="-mt-[30px] ml-[520px] floating delay-2"/>
          <img src="/privacyIcons/bigTime.svg" alt="dollar" className="-mt-[100px] ml-[250px] floating delay-3"/>
          <img src="/privacyIcons/smallDollar3.svg" alt="dollar" className="-mt-[270px] ml-[50px] floating delay-4"/>
          <img src="/privacyIcons/flover.svg" alt="flower" className="ml-10  floating delay-5"/>
          <img src="/privacyIcons/bigDollar2.svg" alt="dollar" className="-mt-40 ml-20 floating delay-6"/>
        </div>
      )}
    >
      <Typography
        text="Welcome to Wealth Mirror! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our finance management website."
        type="body2"
        className='mb-[57px]'
      />

      <ListBlock
        title={"Information We Collect"}
        list={[
          { text: "Personal Information: When you register on Wealth Mirror, we collect personal information such as your name, email address, phone number, and financial details.", },
          { text: "Usage Data: We collect information on how you use our website, including your interactions, preferences, and time spent on different sections.", },
          { text: "Cookies: We use cookies to enhance your experience on our website. Cookies are small data files stored on your device. You can manage your cookie preferences through your browser settings.", },
        ]}
      />

      <ListBlock
        title={"How We Use Your Information"}
        list={[
          { text: "To Provide Services: We use your information to offer, manage, and improve our finance management services.", },
          { text: "To communicate: We may use your email address to send you important updates, newsletters, and promotional materials. You can opt out of these communications at any time.", },
          { text: "To personalize experience:  Your data helps us tailor the website experience to your needs and preferences.", },
          { text: "To improve our website: We analyze usage data to enhance our website’s functionality and performance.", },
        ]}
      />

      <ListBlock
        title={"Information Sharing and Disclosure"}
        list={[
          { text: "Third-Party Service Providers: We may share your information with trusted third-party services providers who assist us in operating our website, conducting business, or servicing you. These parties are obligated to keep your information confidential and use it only for the purposes specified.", },
          { text: "Legal Requirements: We may disclose your information if required by law or in response to valid requests by public authorities.", },
          { text: "Business Transfers: In the event of a merger, acquisition, or asset sale, your personal information may be transferred. We will notify you before your personal information is transferred and becomes subject to a different Privacy Policy.", },
        ]}
      />
      <Typography text={'Contact us'} type="heading3" className='mb-[38px]'/>
      <Typography text={'If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:'} type="body2" className='mb-2'/>
      <Typography text={'1. Email: '} type="body2" className='mb-2'/>
      <Typography text={'support@financeease.com'} type="body2" className='mb-2 ml-6'/>
      <Typography text={'2. Phone:'} type="body2" className='mb-2'/>
      <Typography text={'+1-800-123-4567'} type="body2" className='mb-2 ml-6'/>
      <Typography text={'3. Address:'} type="body2" className='mb-2'/>
      <Typography text={'FinanceEase, 1234 Financial Ave, Suite 100, New York, NY 10001'} type="body2" className='mb-2 ml-6'/>

    </PrivacyPagesLayout>
  );
}
