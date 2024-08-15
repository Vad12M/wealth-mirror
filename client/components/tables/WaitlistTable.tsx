import { IWaitUser } from "@/interfaces/IWaitUser";
import Paginator from "@/components/Paginator";
import { useState } from "react";

export default function WaitlistTable({
  waitUsers
}: {
  waitUsers?: IWaitUser[]
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
        </tr>
        </thead>
        <tbody>
        {waitUsers
          ?.slice((activePage - 1) * 10, activePage * 10)
          ?.map((waitUser, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border text-center">{waitUsers.indexOf(waitUser) + 1}</td>
              <td className="py-2 px-4 border text-center">{waitUser.name}</td>
              <td className="py-2 px-4 border text-center">{waitUser.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Paginator
        total={waitUsers?.length || 0}
        activePage={activePage}
        setActivePage={(page) => setActivePage(page)}
      />
    </>
  );
}
