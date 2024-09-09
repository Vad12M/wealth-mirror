import { IContactForm } from "@/interfaces/IContactForm";

export default function ContactsTable({
  contacts
}: {
  contacts?: IContactForm[]
}) {
  return (
    <table className="m-container border">
      <thead className="">
      <tr>
        <th className="py-2 px-4 border">ID</th>
        <th className="py-2 px-4 border">Name</th>
        <th className="py-2 px-4 border">Email</th>
        <th className="py-2 px-4 border">Company</th>
        <th className="py-2 px-4 border">Subject</th>
        <th className="py-2 px-4 border">Message</th>
      </tr>
      </thead>
      <tbody>
      {contacts?.map((contact, index) => (
        <tr key={index} className="hover:bg-gray-50">
          <td className="py-2 px-4 border text-center">{index + 1}</td>
          <td className="py-2 px-4 border text-center">{contact.fullName}</td>
          <td className="py-2 px-4 border text-center">{contact.email}</td>
          <td className="py-2 px-4 border text-center">{contact.company}</td>
          <td className="py-2 px-4 border text-center">{contact.subject}</td>
          <td className="py-2 px-4 border text-center">{contact.message}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}
