import Paginator from "@/components/Paginator";
import { useState } from "react";
import { IUser } from "@/interfaces/IUser";

export default function UsersTable({
  users
}: {
  users?: IUser[]
}) {
  const [activePage, setActivePage] = useState(1);
  return (
    <>
      <table className="m-container border min-w-[1000px]">
        <thead className="">
        <tr>
          <th className="py-2 px-4 border">ID</th>
          <th className="py-2 px-4 border">Name</th>
          <th className="py-2 px-4 border">Email</th>
          <th className="py-2 px-4 border">Phone</th>
          <th className="py-2 px-4 border">Address</th>
          <th className="py-2 px-4 border">Role</th>
          <th className="py-2 px-4 border">Expired Payment Date</th>
        </tr>
        </thead>
        <tbody>
        {users
          ?.slice((activePage - 1) * 10, activePage * 10)
          ?.map((waitUser, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border text-center">{users.indexOf(waitUser) + 1}</td>
              <td className="py-2 px-4 border text-center">{waitUser.firstName + ' ' + waitUser.lastName}</td>
              <td className="py-2 px-4 border text-center">{waitUser.email}</td>
              <td className="py-2 px-4 border text-center">{waitUser.phone || '-'}</td>
              <td className="py-2 px-4 border text-center">{waitUser.address || '-'}</td>
              <td className="py-2 px-4 border text-center">{waitUser.role}</td>
              <td className="py-2 px-4 border text-center">{waitUser.expiredPaymentDate || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginator
        total={users?.length || 0}
        activePage={activePage}
        setActivePage={(page) => setActivePage(page)}
      />
    </>
  );
}
