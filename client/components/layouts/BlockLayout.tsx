import Typography from "@/ui/typography/Typography";

export default function BlockLayout({
  children,
  title,
  primaryElements,
  description,
}: {
  children: React.ReactNode,
  title: string,
  primaryElements?: string[],
  description?: string,
}) {
  return (
    <section className="py-[100px] flex flex-col justify-center items-center">
      <Typography
        text={title}
        type={'h1'}
        className={description ? 'mb-2' : 'mb-12'}
        primaryElements={primaryElements}
      />
      {description && <Typography
        text={description}
        type={'body'}
        className={'w-[476px] text-center mb-12'}
        color={'text-grayLight'}
      />}
      <div>
        {children}
      </div>
    </section>
  )
}
