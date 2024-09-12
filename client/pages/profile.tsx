import useAuthHandler from "@/service/useAuthHandler";
import { useChangePasswordMutation, useGetMeQuery, useUpdateMeMutation } from "@/store/api/apiSlice";
import Typography from "@/ui/typography/Typography";
import { useEffect, useState } from "react";
import { Button } from "@/ui/button/Button";
import { IUser } from "@/interfaces/IUser";
import ProfileInfo from "@/components/profile/ProfileInfo";
import ProfileChangePassword, { IPasswordForm } from "@/components/profile/ProfileChangePassword";
import styles from "@/components/join-waitlist-block.module.scss";
import { Firefly } from "@/components/Firefly";

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
    <section className="pt-[240px] pb-[100px] flex flex-col">
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex items-center justify-between mb-28 pr-[30%]">
            <div>
              <Typography type={'heading2'} text={'Your Profile'}/>
              <Typography type={'body2'} text={'Lorem ipsum dolor sit amet consectetur.'}/>
            </div>
            <Button
              typeButton={'outline'}
              onClick={() => setIsEditing(!isEditing)}
              className="bg-primary py-2 px-4 rounded-[20px] text-white z-10"
            >
              {isEditing ? 'Cancel' : 'Edit'}
            </Button>
          </div>
          <div
            className='fixed-container rounded-[25px] px-10 py-7 relative max-w-[60%] w-[60%]'
            style={{
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.11) 14.26%, rgba(153, 153, 153, 0.00) 137.6%)'
            }}
          >
            <div className="flex w-full items-center flex-col h-full justify-between">
              <ProfileInfo user={form} setUser={setForm} isEditing={isEditing}/>
              {isEditing && <ProfileChangePassword passwordForm={passwordForm} setPasswordForm={setPasswordForm}/>}
              {isEditing &&
                <Button typeButton={'outline'} onClick={handleSave}>
                  Save
                </Button>}
            </div>
          </div>
        </div>
        <div className={`${styles.fireflyContainer} ${styles.right} md:block hidden`}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Firefly key={index} direction={'left'} width={200} height={200}/>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center mt-[100px]">
        <Button typeButton={'outline'} onClick={() => {
        }} className="w-[180px]">
          {'Refer a friend'}
        </Button>
      </div>
    </section>
  )
}
