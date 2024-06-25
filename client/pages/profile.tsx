import useAuthHandler from "@/service/useAuthHandler";
import { useGetMeQuery } from "@/store/api/apiSlice";
import Typography from "@/ui/typography/Typography";
import { useState } from "react";

export default function ProfilePage() {
  const authHandler = useAuthHandler();
  const isLoggedIn = authHandler.hasAuthToken();
  const { data: user } = useGetMeQuery({}, { skip: !isLoggedIn });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <section className="py-[140px] flex flex-col items-center">
      <Typography text={'Profile'} className="mb-2"/>
      <div className='bg-darkGray1 h-[600px] m-container rounded-[40px] p-12'>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start">
            <Typography text={`Name`} type='healine4'/>
            <Typography text={`${user?.firstName || ''} ${user?.lastName || ''}`} className="mb-2" type='bodyB1'/>
          </div>
          <div className="flex flex-col items-start">
            <Typography text={`Email`} type='healine4'/>
            <Typography text={user?.email || ''} className="mb-2" type='bodyB1'/>
          </div>
          <div className="flex flex-col items-start">
            <Typography text={`Phone`} type='healine4'/>
            <Typography text={user?.phone || ''} className="mb-2" type='bodyB1'/>
          </div>
          <div className="flex flex-col items-start">
            <Typography text={`Address`} type='healine4'/>
            <Typography text={`${user?.address}`} className="mb-2" type='bodyB1'/>
          </div>
        </div>
      </div>
    </section>
  )
}
