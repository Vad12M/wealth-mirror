import BlockLayout from "@/components/layouts/BlockLayout";
import Typography from "@/ui/typography/Typography";
import VisualizeIcon from "@/ui/icons/servicesBlock/VisualizeIcon";
import CentralizeIcon from "@/ui/icons/servicesBlock/CentralizeIcon";
import AnalyzeIcon from "@/ui/icons/servicesBlock/AnalyzeIcon";
import styles from './servicesBlock.module.scss'

export default function ServicesBlock() {
  const services = [
    {
      title: 'VISUALIZE',
      description: 'Lorem ipsum dolor sit amet consectetur. Ante ornare sed iaculis turpis aenean',
      icon: <VisualizeIcon/>
    },
    {
      title: 'CENTRALIZE',
      description: 'Lorem ipsum dolor sit amet consectetur. Ante ornare sed iaculis turpis aenean',
      icon: <CentralizeIcon/>
    },
    {
      title: 'ANALYZE',
      description: 'Lorem ipsum dolor sit amet consectetur. Ante ornare sed iaculis turpis aenean',
      icon: <AnalyzeIcon/>
    },
    {
      title: 'Take Actions',
      description: 'Lorem ipsum dolor sit amet consectetur. Ante ornare sed iaculis turpis aenean',
      icon: <AnalyzeIcon/>
    },
  ]

  return (
    <BlockLayout
      title={'Services We offer'}
      primaryElements={['Services']}
      description={'Lorem ipsum dolor sit amet consectetur. Ante ornare sed iaculis turpis aenean. Neque viverra adipiscing'}
    >
      <div className="flex items-center space-x-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center space-y-4 py-10 px-8 w-[280px] h-[360px] rounded-[30px] ${styles.serviceCard}`}
          >
            <div className="absolute top-8">
              {service.icon}
            </div>
            <div className="text-center">
              <Typography
                text={service.title}
                type={'sub1'}
                className="pt-32"
              />
              <Typography
                text={service.description}
                type={'body'}
                color={'text-grayLight'}
              />
            </div>
          </div>
        ))}
      </div>
    </BlockLayout>
  )
}
