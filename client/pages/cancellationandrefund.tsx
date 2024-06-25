import Typography from "@/ui/typography/Typography";
import PrivacyPagesLayout from "@/components/layouts/PrivacyPagesLayout";
import ListBlock from "@/ui/listblock/listBlock";

export default function CancellationAndRefund() {
  return (
    <PrivacyPagesLayout
      title="Cancellation and Refund"
      lastUpdated="Last updated on xx June,2024"
    >
      <Typography
        text="At Wealth Mirror, we strive to ensure our users are satisfied with our services. This Refund and Cancellation Policy outlines the conditions under which you may request a refund or cancel your subscription."
        type="body2"
        className='mb-[57px]'
      />

      <ListBlock
        title={"Eligibility for Refunds"}
        list={[
          { text: "Registration: To access certain features of Wealth Mirror, you must create an account. You agree to provide accurate and complete information during the registration process.", },
          { text: "Account Security: You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.", },
        ]}
      />

      <ListBlock
        title={"Use of Services"}
        list={[
          {
            subTitle: "Initial Purchase:",
            text: "Refunds are available for initial subscription purchases within the first 14 days of service, provided that no substantial use of the service has occurred.",
          },
          {
            subTitle: "Renewals:",
            text: "Refunds for subscription renewals are available within 7 days of the renewal date, given that the service has not been used during this period."
          },
          {
            subTitle: "Special Circumstances:",
            text: "Refund requests outside of the standard policy may be considered on a case-by-case basis for special circumstances."
          },
        ]}
      />

      <ListBlock
        title={"Refund Process"}
        list={[
          {
            subTitle: "Requesting a Refund:",
            text: "To request a refund, please contact our customer support team at support@financeease.com with your account details and the reason for the refund request.",
          },
          {
            subTitle: "Processing Time:",
            text: "Refunds will be processed within 7-10 business days of receiving the request. The refund will be credited back to the original payment method used during the purchase.",
          }
        ]}
      />

      <ListBlock
        title={"Non-Refundable Items"}
        list={[
          {
            subTitle: "One-Time Services:",
            text: "Payments for one-time services or consultations are non-refundable once the service has been delivered.",
          },
          {
            subTitle: "Promotional Offers:",
            text: "Services purchased under promotional offers are non-refundable unless otherwise stated in the terms of the promotion.",
          }
        ]}
      />

      <Typography text={'Cancellation Policy'} type="heading3" className='mb-10'/>
      <div className='mb-[57px] flex items-center space-x-1'>
        <Typography text="Subscription Cancellation:" type="body2B"/>
        <Typography
          text="You may cancel your subscription at any time through your account settings or by contacting customer support at support@financeease.com."
          type="body2"
        />
      </div>

      <Typography text={' Changes to the Policy'} type="heading3" className='mb-10'/>
      <Typography
        text="We may update our Refund and Cancellation Policy from time to time. We will notify you of any changes by posting the new policy on this page. We encourage you to review this policy periodically for any updates."
        type="body2"
        className='mb-[57px]'
      />


      <Typography text={'Contact us'} type="heading3" className='mb-10'/>
    </PrivacyPagesLayout>
  );
}
