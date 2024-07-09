import useAuthHandler from "@/service/useAuthHandler";
import { useChangePasswordMutation, useGetMeQuery, useUpdateMeMutation } from "@/store/api/apiSlice";
import Typography from "@/ui/typography/Typography";
import { useEffect, useState } from "react";
import { Button } from "@/ui/button/Button";
import { IUser } from "@/interfaces/IUser";
import ProfileInfo from "@/components/profile/ProfileInfo";
import ProfileChangePassword, { IPasswordForm } from "@/components/profile/ProfileChangePassword";

export default function ProfilePage() {
  const [updateMe] = useUpdateMeMutation();
  const [updatePassword] = useChangePasswordMutation();
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

  const [passwordForm, setPasswordForm] = useState<IPasswordForm>({
    oldPassword: '',
    newPassword: '',
  });

  useEffect(() => {
    if (user) setForm(user);
  }, [user]);

  const handleSave = async () => {
    await updateMe({ ...user });
    await updatePassword({ ...passwordForm });
    setIsEditing(false);
  }

  if (!user) {
    return null;
  }

  return (
    <section className="py-[140px] flex flex-col items-center">
      <Typography text={'Profile'} className="mb-2"/>
      <div className='bg-darkGray1 h-[600px] fixed-container rounded-[40px] py-24 px-20 relative'>
        <div className="absolute top-5 right-5">
          <button onClick={() => setIsEditing(!isEditing)} className="bg-primary py-2 px-4 rounded-[20px] text-white">
            {'Edit'}
          </button>
        </div>
        <div className="flex w-full items-center flex-col h-full justify-between">
          <ProfileInfo user={form} setUser={setForm} isEditing={isEditing}/>
          {isEditing && <ProfileChangePassword passwordForm={passwordForm} setPasswordForm={setPasswordForm}/>}
          {isEditing &&
            <Button onClick={handleSave}>
              Save
            </Button>}
        </div>
      </div>
    </section>
  )
}
