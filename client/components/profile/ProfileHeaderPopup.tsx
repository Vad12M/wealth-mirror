import Typography from "@/ui/typography/Typography";
import { Button } from "@/ui/button/Button";
import { useRouter } from "next/router";
import useGetUser from "@/hooks/useGetUser";
import useAuth from "@/hooks/useAuth";

export default function ProfileHeaderPopup({
  onClose,
  refContainer,
}: {
  onClose: () => void;
  refContainer?: any;
}) {
  const router = useRouter();
  const { user } = useGetUser();
  const { logout } = useAuth();

  return (
    <div
      ref={refContainer}
      className=" bg-naturalBlack rounded-[8px] absolute top-[50px] right-0 z-50"
      style={{ border: '1px solid rgba(255, 255, 255, 0.47)', }}
    >
      <div
        className="py-[18px] px-[14px] rounded-[8px] "
        style={{ background: 'rgba(224, 255, 223, 0.10)', backdropFilter: 'blur(21.600000381469727px)', }}
      >
        <Typography
          text={`${user?.firstName || ''} ${user?.lastName || ''}`}
          type={'heading5'}
          className="opacity-80"
        />
        <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 210 2" fill="none" className="my-4">
          <path d="M0 1H210" stroke="white" strokeOpacity="0.4" strokeWidth="2"/>
        </svg>
        <Button typeButton={'none'} className="pb-2" onClick={() => {
          router.push('/profile')
          onClose()
        }}>
          <Typography text={'Profile Settings'} type={'body1'} className="opacity-80"/>
        </Button>
        <Button typeButton={'none'} onClick={() => {
          logout()
          onClose()
        }}>
          <Typography text={'Logout'} type={'body1'} color="text-danger"/>
        </Button>
      </div>
    </div>
  )
}
