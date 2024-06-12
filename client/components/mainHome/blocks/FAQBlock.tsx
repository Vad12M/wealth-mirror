import BlockLayout from "@/components/layouts/BlockLayout";
import AnimateHeight from "react-animate-height";
import BaseCollapse from "@/components/mainHome/BaseCollapse";

export default function FAQBlock() {
  const faqs = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur. Eleifend nec ?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur. Eleifend nec ?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur. Eleifend nec ?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur. Eleifend nec ?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur. Eleifend nec ?',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
  ]

  return (
    <BlockLayout title={'FAQ’s'} primaryElements={['FAQ’s']}>
      <div className="flex flex-col items-center space-y-6 m-container pt-12">
        {faqs.map((faq, index) => (
          <BaseCollapse key={index} title={faq.title} text={faq.description}/>
        ))}

      </div>
    </BlockLayout>
  )
}
