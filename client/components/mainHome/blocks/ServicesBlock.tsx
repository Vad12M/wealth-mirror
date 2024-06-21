import BlockLayout from "@/components/layouts/BlockLayout";
import Typography from "@/ui/typography/Typography";
import VisualizeIcon from "@/ui/icons/servicesBlock/VisualizeIcon";
import styles from './servicesBlock.module.scss'

export default function ServicesBlock() {
  const services = [
    {
      title: 'VISUALIZE',
      description: 'Bring in all different aspects of your wealth in a single place.',
      icon: '/hero/centralize.png'
    },
    {
      title: 'CENTRALIZE',
      description: 'See your Wealth growing in a way like Never Before.',
      icon: '/hero/vizualize.png'
    },
    {
      title: 'ANALYZE',
      description: ' Get daily/monthly/yearly/lifetime analysis of your portfolio.',
      icon: '/hero/analyze.png'
    },
    {
      title: 'Take Actions',
      description: 'AI Engine that will give valuable recommendations on your wealth',
      icon: '/hero/actions.png'
    },
  ]

  return (
    <BlockLayout
      title={'How It Works'}
      primaryElements={['Works']}
      description={'Wealth Mirror is a one stop solution to see how your wealth is growing and what actions you can do to grow it better 🙂'}
    >
      <div className="flex items-center space-x-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center space-y-4 py-10 px-8 w-[280px] h-[360px] rounded-[30px] ${styles.serviceCard}`}
          >
            <div className="absolute top-8 bg-white p-6 rounded-full">
              <img className="w-[100px] h-[100px]" alt={'icon'} src={service.icon}/>
            </div>
            <div className="text-center">
              <Typography text={service.title} type={'sub1'} className="pt-36"/>
              <Typography text={service.description} type={'body'} color={'text-grayLight'}/>
            </div>
          </div>
        ))}
      </div>
    </BlockLayout>
  )
}
