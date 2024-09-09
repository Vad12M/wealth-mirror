import { useGetContactsQuery, useGetMeQuery, useGetUsersQuery, useGetWaitUsersQuery } from "@/store/api/apiSlice";
import Typography from "@/ui/typography/Typography";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import useAuthHandler from "@/service/useAuthHandler";
import WaitlistTable from "@/components/tables/WaitlistTable";
import ContactsTable from "@/components/tables/ContactsTable";
import UsersTable from "@/components/tables/UsersTable";

export default function AdminPage() {
  const router = useRouter();
  const authHandler = useAuthHandler();
  const isLoggedIn = authHandler.hasAuthToken();
  const { data: contacts } = useGetContactsQuery();
  const { data: waitUsers } = useGetWaitUsersQuery();
  const { data: users } = useGetUsersQuery();
  const { data: user, isSuccess } = useGetMeQuery({}, { skip: !isLoggedIn });
  const isAdmin = user?.role === 'admin';

  const [selectedTab, setSelectedTab] = useState<'contacts' | 'waitUsers' | 'users'>('waitUsers');

  useEffect(() => {
    if (isSuccess && !isAdmin) {
      router.push('/');
    }
  }, [isAdmin]);

  const pages: {
    name: string;
    key: 'waitUsers' | 'contacts' | 'users';
  }[] = [
    { name: 'Wait Users', key: 'waitUsers' },
    { name: 'Contacts', key: 'contacts' },
    { name: 'Users', key: 'users' },
  ];

  return (
    <section className="py-[180px] flex flex-col items-center">
      <Typography text={'Admin'} className="mb-2"/>
      <div className="flex justify-center space-x-4  border rounded-full mb-10">
        {pages.map((page) => (
          <button
            key={page.key}
            onClick={() => setSelectedTab(page.key)}
            className={`py-2 px-4 rounded-full ${selectedTab === page.key ? 'bg-primary' : ''}`}
          >
            {page.name}
          </button>
        ))}
      </div>

      {selectedTab === 'waitUsers' && <WaitlistTable waitUsers={waitUsers}/>}
      {selectedTab === 'contacts' && <ContactsTable contacts={contacts}/>}
      {selectedTab === 'users' && <UsersTable users={users}/>}
    </section>
  )
}
