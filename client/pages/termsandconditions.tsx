import Typography from "@/ui/typography/Typography";
import PrivacyPagesLayout from "@/components/layouts/PrivacyPagesLayout";
import ListBlock from "@/ui/listblock/listBlock";

export default function TermsAndConditions() {
  return (
    <PrivacyPagesLayout
      title="Terms and Conditions"
      lastUpdated="Last updated on xx June,2024"
    >
      <Typography
        text="Welcome to Wealth Mirror! These Terms and Conditions  govern your use of our finance management website. By accessing or using Wealth Mirror, you agree to comply with and be bound by these Terms."
        type="body2"
        className='mb-[57px]'
      />

      <Typography text={'Acceptance of Terms'} type="heading3" className='mb-10'/>
      <Typography
        text="By using Wealth Mirror, you agree to these Terms and our Privacy Policy. If you do not agree, please do not use our website."
        type="body2"
        className='mb-[57px]'
      />

      <ListBlock
        title={"User Accounts"}
        list={[
          { text: "Registration: To access certain features of Wealth Mirror, you must create an account. You agree to provide accurate and complete information during the registration process.", },
          { text: "Account Security: You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.", },
        ]}
      />

      <ListBlock
        title={"Use of Services"}
        list={[
          { text: "Permitted Use: You may use Wealth Mirror only for lawful purposes and in accordance with these Terms.", },
          {
            text: "Restrictions: You agree not to:",
            subList: [
              "Use the website in any way that violates applicable laws or regulations.",
              "Use the website for fraudulent or harmful purposes.",
              "Interfere with the security features of the website.",
            ]
          },
        ]}
      />

      <ListBlock
        title={"Prohibited Activities"}
        list={[
          {
            text: "You agree not to engage in any of the following prohibited activities:",
            subList: [
              "Attempting to gain unauthorized access to our systems or accounts.",
              "Distributing malware or other harmful code.",
              "Engaging in any activity that disrupts or interferes with the website's functionality.",
            ]
          }
        ]}
      />

      <Typography text={'Contact us'} type="heading3" className='mb-10'/>
    </PrivacyPagesLayout>
  );
}
