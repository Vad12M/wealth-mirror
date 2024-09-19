import Typography from "@/ui/typography/Typography";
import { useGetIsMobile } from "@/hooks/useGetIsMobile";

export default function BlockLayout({
  children,
  title,
  primaryElements,
  description,
  styleDescription = 'md:w-[476px] w-[352px]',
}: {
  children: React.ReactNode,
  title: string,
  primaryElements?: string[],
  description?: string,
  styleDescription?: string,
}) {
  const isMobile = useGetIsMobile();

  return (
    <section className="py-10 md:py-[100px] flex flex-col justify-center items-center">
      <Typography
        text={title}
        type={isMobile ? 'heading3' : 'txt1'}
        className={description ? 'mb-2' : 'mb-12'}
        primaryElements={primaryElements}
      />
      {description && <Typography
        text={description}
        type={'heading6'}
        className={`${styleDescription} md:px-20 px-0 text-center mb-12`}
        color={'text-grayLight'}
      />}
      <div>
        {children}
      </div>
    </section>
  )
}
