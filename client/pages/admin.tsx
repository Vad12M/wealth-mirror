import { useGetContactsQuery } from "@/store/api/apiSlice";
import Typography from "@/ui/typography/Typography";

export default function AdminPage() {
  const { data: contacts } = useGetContactsQuery();
  return (
    <section className="py-[180px] h-screen">
      {contacts?.map((contact) => (
        <div className="flex justify-between items-center">
          <Typography text={contact.email} type={'body'}/>
          <Typography text={contact.email} type={'body'} />
        </div>
      ))}
    </section>
  )
}
