import Typography from "@/ui/typography/Typography";

export default function ListBlock({
  title,
  list
}: {
  title: string,
  list: {
    subTitle?: string,
    text: string;
    subList?: string[];

  }[]
}) {

  return (
    <div className="flex flex-col mb-[60px]">
      <Typography text={title} type="heading3" className='mb-10'/>
      {list.map((item, index) => (
        <div key={index} className="flex items-start space-x-2 mb-8">
          {list.length > 1 &&
            <Typography text={`${index + 1}.`} type="body2"/>}
          <div className="flex flex-col">
            <div className="flex items-center space-x-1">
              <Typography
                text={item.text}
                boldElements={item.subTitle ? [item.subTitle] : []}
                type="body2"
              />
            </div>
            {item.subList && (
              <ul className="ml-8">
                {item.subList.map((subItem, subIndex) => (
                  <li key={subIndex}
                      className={`flex items-start space-x-2 mb-2 ${list.length < 2 && 'ml-6'}`}
                  >
                    <Typography text={'•'} type="body2"/>
                    <Typography text={subItem} type="body2"/>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
