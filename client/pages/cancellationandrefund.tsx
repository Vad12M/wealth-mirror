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
            text: "Initial Purchase: Refunds are available for initial subscription purchases within the first 14 days of services, provided that no substantial use of the services has occurred.",
          },
          {
            subTitle: "Renewals:",
            text: "Renewals: Refunds for subscription renewals are available within 7 days of the renewal date, given that the services has not been used during this period."
          },
          {
            subTitle: "Special Circumstances:",
            text: "Special Circumstances: Refund requests outside of the standard policy may be considered on a case-by-case basis for special circumstances."
          },
        ]}
      />

      <ListBlock
        title={"Refund Process"}
        list={[
          {
            subTitle: "Requesting a Refund:",
            text: "Requesting a Refund: To request a refund, please contact our customer support team at support@financeease.com with your account details and the reason for the refund request.",
          },
          {
            subTitle: "Processing Time:",
            text: "Processing Time: Refunds will be processed within 7-10 business days of receiving the request. The refund will be credited back to the original payment method used during the purchase.",
          }
        ]}
      />

      <ListBlock
        title={"Non-Refundable Items"}
        list={[
          {
            subTitle: "One-Time Services:",
            text: "One-Time Services: Payments for one-time services or consultations are non-refundable once the services has been delivered.",
          },
          {
            subTitle: "Promotional Offers:",
            text: "Promotional Offers: Services purchased under promotional offers are non-refundable unless otherwise stated in the terms of the promotion.",
          }
        ]}
      />

      <Typography text={'Cancellation Policy'} type="heading3" className='mb-10'/>
      <Typography
        boldElements={['Subscription Cancellation:']}
        text="Subscription Cancellation: You may cancel your subscription at any time through your account settings or by contacting customer support at support@financeease.com."
        type="body2"
        className={'mb-[57px]'}
      />

      <Typography text={'Changes to the Policy'} type="heading3" className='mb-10'/>
      <Typography
        text="We may update our Refund and Cancellation Policy from time to time. We will notify you of any changes by posting the new policy on this page. We encourage you to review this policy periodically for any updates."
        type="body2"
        className='mb-[57px]'
      />

      <Typography text={'Contact us'} type="heading3" className='mb-[38px]'/>
      <Typography
        text={'If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:'}
        type="body2" className='mb-2'/>
      <Typography text={'1. Email: '} type="body2" className='mb-2'/>
      <Typography text={'support@financeease.com'} type="body2" className='mb-2 ml-6'/>
      <Typography text={'2. Phone:'} type="body2" className='mb-2'/>
      <Typography text={'+1-800-123-4567'} type="body2" className='mb-2 ml-6'/>
      <Typography text={'3. Address:'} type="body2" className='mb-2'/>
      <Typography text={'FinanceEase, 1234 Financial Ave, Suite 100, New York, NY 10001'} type="body2"
                  className='mb-2 ml-6'/>
    </PrivacyPagesLayout>
  );
}
