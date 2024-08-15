import { useGetContactsQuery, useGetMeQuery, useGetWaitUsersQuery } from "@/store/api/apiSlice";
import Typography from "@/ui/typography/Typography";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useAuthHandler from "@/service/useAuthHandler";
import WaitlistTable from "@/components/tables/WaitlistTable";

export default function AdminPage() {
  const router = useRouter();
  const authHandler = useAuthHandler();
  const isLoggedIn = authHandler.hasAuthToken();
  const { data: contacts } = useGetContactsQuery();
  const { data: waitUsers } = useGetWaitUsersQuery();
  const { data: user, isSuccess } = useGetMeQuery({}, { skip: !isLoggedIn });
  const isAdmin = user?.role === 'admin';

  const [selectedTab, setSelectedTab] = useState<'contacts' | 'waitUsers'>('waitUsers');

  useEffect(() => {
    if (isSuccess && !isAdmin) {
      router.push('/');
    }
  }, [isAdmin]);

  return (
    <section className="py-[180px] flex flex-col items-center">
      <Typography text={'Admin'} className="mb-2"/>
      <div className="flex justify-center space-x-4  border rounded-full mb-10">
        <button
          onClick={() => setSelectedTab('waitUsers')}
          className={`py-2 px-4 rounded-full ${selectedTab === 'waitUsers' ? 'bg-primary' : ''}`}
        >
          {'Wait Users'}
        </button>
        <button
          onClick={() => setSelectedTab('contacts')}
          className={`py-2 px-4 rounded-full ${selectedTab === 'contacts' ? 'bg-primary' : ''}`}
        >
          {'Contacts'}
        </button>
      </div>

      {selectedTab === 'waitUsers' && <WaitlistTable waitUsers={waitUsers}/>}

      {selectedTab === 'contacts' && (
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
      )}
    </section>
  )
}
