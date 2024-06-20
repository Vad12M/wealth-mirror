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
      description: 'Bring in all different aspects of your wealth in a single place.',
      icon: <VisualizeIcon/>
    },
    {
      title: 'CENTRALIZE',
      description: 'See your Wealth growing in a way like Never Before.',
      icon: <CentralizeIcon/>
    },
    {
      title: 'ANALYZE',
      description: ' Get daily/monthly/yearly/lifetime analysis of your portfolio.',
      icon: <AnalyzeIcon/>
    },
    {
      title: 'Take Actions',
      description: 'AI Engine that will give valuable recommendations on your wealth',
      icon: <AnalyzeIcon/>
    },
  ]

  return (
    <BlockLayout
      title={'How It Works'}
      primaryElements={['Works']}
      description={'Change below text to “Wealth Mirror is a one stop solution to see how your wealth is growing and what actions you can do to grow it better 🙂'}
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
              <Typography text={service.title} type={'sub1'} className="pt-32"/>
              <Typography text={service.description} type={'body'} color={'text-grayLight'}/>
            </div>
          </div>
        ))}
      </div>
    </BlockLayout>
  )
}
