import Typography from "@/ui/typography/Typography";
import PrivacyPagesLayout from "@/components/layouts/PrivacyPagesLayout";
import ListBlock from "@/ui/listblock/listBlock";

export default function TermsAndConditions() {
  return (
    <PrivacyPagesLayout
      title="Terms and Conditions"
      lastUpdated="Last updated on xx June,2024"
      iconsContainer={(
        <>
          <img src="/privacyIcons/group.svg" alt="group" className="floating delay-1"/>
          <img src="/privacyIcons/bigDollar1.svg" alt="dollar" className="ml-40 floating delay-2"/>
          <img src="/privacyIcons/houseRed.svg" alt="house" className="-mt-72 -ml-20 floating delay-3"/>
          <img src="/privacyIcons/timeSmall.svg" alt="time" className="-mt-72 -ml-10 floating delay-4"/>
          <img src="/privacyIcons/carGreen.svg" alt="car" className="-mt-[250px] floating delay-5"/>
          <img src="/privacyIcons/greenButton.svg" alt="button" className="-mt-44 ml-40 floating delay-6"/>
          <img src="/privacyIcons/smallDollar1.svg" alt="dollar" className="-mt-20 ml-40 floating delay-7"/>
          <img src="/privacyIcons/bigTime.svg" alt="time" className="ml-72 floating delay-8"/>
          <img src="/privacyIcons/smallDollar3.svg" alt="dollar" className="-mt-20 floating delay-1"/>
          <img src="/privacyIcons/smallDollar2.svg" alt="dollar" className="-mt-52 ml-[450px] floating delay-2"/>
          <img src="/privacyIcons/bigDollar2.svg" alt="dollar" className="-mt-10 ml-10 floating delay-3"/>
          <img src="/privacyIcons/flover.svg" alt="flower" className="-mt-[350px] floating delay-4"/>
          <img src="/privacyIcons/houseGreen.svg" alt="house" className="ml-72 mt-10 floating delay-5"/>
        </>
      )}
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
