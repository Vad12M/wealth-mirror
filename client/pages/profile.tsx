import useAuthHandler from "@/service/useAuthHandler";
import { useGetMeQuery, useUpdateMeMutation } from "@/store/api/apiSlice";
import Typography from "@/ui/typography/Typography";
import { useEffect, useState } from "react";
import { Button } from "@/ui/button/Button";
import { IUser } from "@/interfaces/IUser";
import Input from "@/ui/input/input";

export default function ProfilePage() {
  const [updateMe] = useUpdateMeMutation();
  const authHandler = useAuthHandler();
  const isLoggedIn = authHandler.hasAuthToken();
  const { data: user } = useGetMeQuery({}, { skip: !isLoggedIn });
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState<IUser>({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    if (user) setForm(user);
  }, [user]);

  const handleSave = async () => {
    await updateMe({ ...user });
    setIsEditing(false);
  }

  if (!user) {
    return null;
  }

  return (
    <section className="py-[140px] flex flex-col items-center">
      <Typography text={'Profile'} className="mb-2"/>
      <div className='bg-darkGray1 h-[600px] m-container rounded-[40px] py-24 px-20 relative'>
        <div className="absolute top-5 right-5">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="bg-primary py-2 px-4 rounded-[20px] text-white"
          >
            Edit
          </button>
        </div>
        <div className="flex w-full items-center flex-col h-full justify-between">
          <div className="flex flex-col w-full items-center space-y-10">
            <div className="flex items-center w-full">
              <div className="flex flex-col items-start w-1/3">
                <Typography text={`First Name`} type='healine4'/>
                {isEditing ?
                  <Input
                    value={form?.firstName}
                    onUpdate={(e) => setForm((prevState) => ({ ...prevState, firstName: e.target.value }))}
                    placeholder="First Name"
                  /> :
                  <Typography text={form?.firstName || ''} type='bodyB1'/>}
              </div>
              <div className="flex flex-col items-start w-1/3">
                <Typography text={`Last Name`} type='healine4'/>
                {isEditing ?
                  <Input
                    value={form?.lastName}
                    onUpdate={(e) => setForm((prevState) => ({ ...prevState, lastName: e.target.value }))}
                    placeholder="First Name"
                  /> :
                  <Typography text={form?.lastName || ''} type='bodyB1'/>}
              </div>
              <div className="flex flex-col items-start w-1/3">
                <Typography text={`Email`} type='healine4'/>
                {isEditing ?
                  <Input
                    value={form?.email}
                    onUpdate={(e) => setForm((prevState) => ({ ...prevState, email: e.target.value }))}
                    placeholder="Email"
                  /> :
                  <Typography text={form?.email || ''}  type='bodyB1'/>}
              </div>
            </div>
            <div className="flex items-center w-full">
              <div className="flex flex-col items-start w-1/3">
                <Typography text={`Phone`} type='healine4'/>
                {isEditing ?
                  <Input
                    value={form?.phone}
                    onUpdate={(e) => setForm((prevState) => ({ ...prevState, phone: e.target.value }))}
                    placeholder="Phone"
                  /> :
                  <Typography text={form?.phone || ''}  type='bodyB1'/>}
              </div>
              <div className="flex flex-col items-start">
                <Typography text={`Address`} type='healine4'/>
                {isEditing ?
                  <Input
                    value={form?.address}
                    onUpdate={(e) => setForm((prevState) => ({ ...prevState, address: e.target.value }))}
                    placeholder="Address"
                  /> :
                  <Typography text={form?.address || ''} type='bodyB1'/>}
              </div>
            </div>
          </div>

          {isEditing &&
            <Button onClick={handleSave}>
              Save
            </Button>}
        </div>
      </div>
    </section>
  )
}
