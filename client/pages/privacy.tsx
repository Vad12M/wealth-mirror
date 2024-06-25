import Typography from "@/ui/typography/Typography";
import PrivacyPagesLayout from "@/components/layouts/PrivacyPagesLayout";
import ListBlock from "@/ui/listblock/listBlock";

export default function Privacy() {
  return (
    <PrivacyPagesLayout
      title="Privacy Policy"
      lastUpdated="Last updated on xx June,2024"
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
          { text: "Third-Party Service Providers: We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you. These parties are obligated to keep your information confidential and use it only for the purposes specified.", },
          { text: "Legal Requirements: We may disclose your information if required by law or in response to valid requests by public authorities.", },
          { text: "Business Transfers: In the event of a merger, acquisition, or asset sale, your personal information may be transferred. We will notify you before your personal information is transferred and becomes subject to a different Privacy Policy.", },
        ]}
      />
      <Typography text={'Contact us'} type="heading3" className='mb-10'/>
    </PrivacyPagesLayout>
  );
}
