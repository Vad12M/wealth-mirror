import React, { useState } from 'react';
import BlockLayout from "@/components/layouts/BlockLayout";
import BaseCollapse from "@/components/home/BaseCollapse";
import { useGetIsMobile } from "@/hooks/useGetIsMobile";

export default function FAQBlock({
  primaryElements = ['FAQ’s']
}: {
  primaryElements?: string[];
}) {
  const isMobile = useGetIsMobile();
  const faqs = [
    {
      title: 'How fast can I setup and start using Wealth Mirror?',
      description: 'Getting started with Wealth Mirror is simple. We are a SaaS product and hosted in cloud to get you started in no time :)'
    },
    {
      title: 'I\'m ready to take the next step. How can I schedule demo?',
      description: 'You can try Wealth Mirror for free. For a personalized demo please reach out to wealthmirrorofficial@gmail.com'
    },
    {
      title: 'What is Wealth Mirror’s pricing model?',
      description: 'Wealth Mirror has a standard Pricing Model of ₹999/year for Indian Users and $99/year for International Users. The pricing is designed to make a lifetime relationship with its users.'
    },
    {
      title: 'Will Wealth Mirror impact my application(s) performance?',
      description: 'Wealth Mirror has no noticeable impact on your application performance. Wealth Mirror follows a secure software development lifecycle that includes performance testing of Wealth Mirror against several known applications. Software releases are gated with performance test results ensuring stable performance Wealth Mirror scripts.'
    },
    {
      title: ' How Secure is Wealth Mirror?',
      description: 'At Wealth Mirror, the security of our products is a top priority. Our customer-first approach ensures that we remain committed to safeguarding all customer data and information. Wealth Mirror uses best-in-class technology and processes to ensure the highest degree of data security, and to maintain and support enterprise customer in various industries that have regulatory compliance requirements including (but not limited to) data privacy.'
    },
  ]

  return (
    <BlockLayout title={'FAQ’s'} primaryElements={primaryElements}>
      <div
        style={{
          boxShadow: isMobile ? '0px 0px 74.6px 4px rgba(0, 208, 148, 0.30)' : undefined,
        }}
        className="flex flex-col items-center md:space-y-6 space-y-2 m-container relative bg-naturalBlack"
      >
        {faqs.map((faq, index) => (
          <BaseCollapse key={index} title={faq.title} text={faq.description}/>
        ))}
      </div>
    </BlockLayout>
  )
}
