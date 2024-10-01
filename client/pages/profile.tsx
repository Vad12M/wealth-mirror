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
import { useGetIsMobile } from "@/hooks/useGetIsMobile";
import useGetUser from "@/hooks/useGetUser";
import { useRouter } from "next/router";

export default function ProfilePage() {
  const router = useRouter();
  const isMobile = useGetIsMobile();
  const [updateMe] = useUpdateMeMutation();
  const [updatePassword] = useChangePasswordMutation();
  const { isLoggedIn, isAdmin } = useGetUser();
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
    <section className="md:pt-[240px] pt-[140px] md:pb-[100px] pb-[30px] flex flex-col fixed-container">
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex md:flex-row flex-col items-center justify-between md:mb-28 mb-14">
            <div className="flex flex-col md:items-start items-center md:mb-0 mb-5">
              <div className="p-4 rounded-full bg-primary mb-4 md:hidden block">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path
                    d="M15 5C16.3261 5 17.5979 5.52678 18.5355 6.46447C19.4732 7.40215 20 8.67392 20 10C20 11.3261 19.4732 12.5979 18.5355 13.5355C17.5979 14.4732 16.3261 15 15 15C13.6739 15 12.4021 14.4732 11.4645 13.5355C10.5268 12.5979 10 11.3261 10 10C10 8.67392 10.5268 7.40215 11.4645 6.46447C12.4021 5.52678 13.6739 5 15 5ZM15 17.5C20.525 17.5 25 19.7375 25 22.5V25H5V22.5C5 19.7375 9.475 17.5 15 17.5Z"
                    fill="white" fillOpacity="0.9"/>
                </svg>
              </div>
              {isMobile
                ? <Typography
                  type={'heading4'}
                  text={form.firstName + ' ' + form.lastName}
                  primaryElements={['Profile']}
                  className={'mb-2'}
                />
                : <Typography type={'heading2'} text={'Your Profile'} primaryElements={['Profile']}/>}
              <Typography
                type={'body2'}
                text={'View, update, and take charge of your profile.'}
                color="text-grayLight2"
              />
            </div>
            <Button
              typeButton={'outline'}
              onClick={() => setIsEditing(!isEditing)}
              className="bg-primary py-2 px-4 rounded-[20px] text-white z-10"
            >
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </Button>
          </div>
          <Typography type={'heading6SM'} text={'Account details'} className="mb-4" color="text-grayLight2"/>
          <div
            className='md:fixed-container rounded-[25px] px-6 md:px-10 md:py-7 py-4 relative md:max-w-[720px] max-w-[360px] mb-6'
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
          <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "354" : "720"} height="2" viewBox="0 0 720 2"
               fill="none">
            <path d="M1 1H719" stroke="white" strokeOpacity="0.2" strokeLinecap="round"/>
          </svg>
          <Typography type={'heading6SM'} text={'Membership details'} className="mb-4 mt-6" color="text-grayLight2"/>
          <div
            className='md:fixed-container rounded-[25px] md:px-10 px-6 md:py-7 py-5 relative md:max-w-[720px] max-w-[360px]'
            style={{
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.11) 14.26%, rgba(153, 153, 153, 0.00) 137.6%)'
            }}
          >
            <div className="flex flex-col items-start w-full md:mb-8 mb-5">
              <Typography text={`Account Status`} type={isMobile ? 'body1' : 'body2'} className="mb-1"/>
              <Typography text={isAdmin ? 'Premium' : 'Free'} type={isMobile ? 'subHeading4' : 'heading3'}/>
            </div>
            <div className="flex md:flex-row flex-col items-center w-full">
              <div className="flex flex-col items-start md:w-1/2 w-full md:mb-0 mb-5">
                <Typography text={`Subscription Type`} type={isMobile ? 'body1' : 'body2'} className="mb-1"/>
                <Typography text={isAdmin ? 'Yearly' : 'N/A'} type={isMobile ? 'subHeading4' : 'heading3'}/>
              </div>
              <div className="flex flex-col items-start md:w-1/2 w-full">
                <Typography text={`Subscription Validity`} type={isMobile ? 'body1' : 'body2'} className="mb-1"/>
                <Typography text={isAdmin ? '25 June, 2030' : 'N/A'} type={isMobile ? 'subHeading4' : 'heading3'}/>
              </div>
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
        <Button
          typeButton={'outline'}
          onClick={() => {
            router.push('/payment')
          }}
          className="w-[280px]"
        >
          {'Get Wealth Mirror Premium'}
        </Button>
      </div>
    </section>
  )
}
