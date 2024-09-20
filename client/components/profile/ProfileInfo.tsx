import Typography from "@/ui/typography/Typography";
import Input from "@/ui/input/input";
import { IUser } from "@/interfaces/IUser";
import GreenTickIcon from "@/ui/icons/GreenTickIcon";
import { useGetIsMobile } from "@/hooks/useGetIsMobile";

export default function ProfileInfo({
  user, setUser, isEditing
}: {
  user: IUser,
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isEditing: boolean
}) {
  const isMobile = useGetIsMobile();
  return (
    <div className="flex flex-col w-full items-center md:space-y-10 space-y-5 z-20">
      {((isMobile && isEditing) || !isMobile) && <div className="flex md:flex-row flex-col items-center w-full md:space-x-6">
        <div className="flex flex-col items-start md:w-1/2 w-full md:mb-0 mb-5">
          {(isMobile && isEditing || !isMobile) && <Typography text={`First Name`} type='body2' className="mb-1"/>}
          {isEditing ?
            <Input
              value={user?.firstName}
              onUpdate={(e) => setUser((prevState) => ({ ...prevState, firstName: e.target.value }))}
              placeholder="First Name"
              className={'w-full'}
            /> :
            <Typography
              text={user?.firstName || ''}
              type={isMobile ? 'subHeading4' : 'heading3'}
              className="md:block hidden"
            />}
        </div>
        <div className="flex flex-col items-start md:w-1/2 w-full">
          {(isMobile && isEditing || !isMobile) && <Typography text={`Last Name`} type='body2' className="mb-1"/>}
          {isEditing ?
            <Input
              value={user?.lastName}
              onUpdate={(e) => setUser((prevState) => ({ ...prevState, lastName: e.target.value }))}
              placeholder="Last Name"
              className={'w-full'}
            /> :
            <Typography
              text={user?.lastName || ''}
              type={isMobile ? 'subHeading4' : 'heading3'}
              className="md:block hidden"
            />}
        </div>
      </div>}
      <div className="flex flex-col items-start w-full">
        <Typography text={`Email`} type='body2' className="mb-1"/>
        {isEditing ?
          <Input
            value={user?.email}
            onUpdate={(e) => setUser((prevState) => ({ ...prevState, email: e.target.value }))}
            placeholder="Email"
            className={'w-full'}
          /> :
          <div className="flex items-center md:justify-start justify-between w-full space-x-3">
            {!isMobile && <GreenTickIcon/>}
            <Typography text={user?.email || ''} type={isMobile ? 'subHeading4' : 'heading3'}/>
            {isMobile && <GreenTickIcon width={18} height={18}/>}
          </div>}
      </div>
      <div className="flex flex-col items-start w-full">
        <Typography text={`Phone`} type='body2' className="mb-1"/>
        {isEditing ?
          <Input
            value={user?.phone}
            onUpdate={(e) => setUser((prevState) => ({ ...prevState, phone: e.target.value }))}
            placeholder="Phone"
            className={'w-full'}
          /> :
          <div className="flex items-center md:justify-start justify-between w-full space-x-3">
            {!isMobile && <GreenTickIcon/>}
            <Typography text={user?.phone || ''} type={isMobile ? 'subHeading4' : 'heading3'}/>
            {isMobile && <GreenTickIcon width={18} height={18}/>}
          </div>}
      </div>
      <div className="flex flex-col items-start w-full">
        <Typography text={`Address`} type='body2' className="mb-1"/>
        {isEditing ?
          <Input
            value={user?.address}
            onUpdate={(e) => setUser((prevState) => ({ ...prevState, address: e.target.value }))}
            placeholder="Address"
            className={'w-full'}
          /> :
          <Typography text={user?.address || ''} type={isMobile ? 'subHeading4' : 'heading3'}/>}
      </div>

    </div>
  )
}
