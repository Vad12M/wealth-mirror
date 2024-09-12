import Typography from "@/ui/typography/Typography";
import Input from "@/ui/input/input";
import { IUser } from "@/interfaces/IUser";
import GreenTickIcon from "@/ui/icons/GreenTickIcon";

export default function ProfileInfo({
  user, setUser, isEditing
}: {
  user: IUser,
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isEditing: boolean
}) {
  return (
    <div className="flex flex-col w-full items-center space-y-10 z-50">
      <div className="flex items-center w-full space-x-6">
        <div className="flex flex-col items-start w-1/2">
          <Typography text={`First Name`} type='body2' className="mb-1"/>
          {isEditing ?
            <Input
              value={user?.firstName}
              onUpdate={(e) => setUser((prevState) => ({ ...prevState, firstName: e.target.value }))}
              placeholder="First Name"
              className={'w-full'}
            /> :
            <Typography text={user?.firstName || ''} type='heading3'/>}
        </div>
        <div className="flex flex-col items-start w-1/2">
          <Typography text={`Last Name`} type='body2' className="mb-1"/>
          {isEditing ?
            <Input
              value={user?.lastName}
              onUpdate={(e) => setUser((prevState) => ({ ...prevState, lastName: e.target.value }))}
              placeholder="Last Name"
              className={'w-full'}
            /> :
            <Typography text={user?.lastName || ''} type='heading3'/>}
        </div>
      </div>
      <div className="flex flex-col items-start w-full">
        <Typography text={`Email`} type='body2' className="mb-1"/>
        {isEditing ?
          <Input
            value={user?.email}
            onUpdate={(e) => setUser((prevState) => ({ ...prevState, email: e.target.value }))}
            placeholder="Email"
            className={'w-full'}
          /> :
          <div className="flex items-center space-x-3">
            <GreenTickIcon/>
            <Typography text={user?.email || ''} type='heading3'/>
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
          <div className="flex items-center space-x-3">
            <GreenTickIcon/>
            <Typography text={user?.phone || ''} type='heading3'/>
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
          <Typography text={user?.address || ''} type='heading2'/>}
      </div>
      <div className="flex flex-col items-start w-full">
        <Typography text={`Account Status`} type='body2' className="mb-1"/>
        <Typography text={'Free'} type='heading2'/>
      </div>

      <div className="flex items-center w-full">
        <div className="flex flex-col items-start w-1/2">
          <Typography text={`Subscription Type`} type='body2' className="mb-1"/>
          <Typography text={'Monthly'} type='heading2'/>
        </div>
        <div className="flex flex-col items-start w-1/2">
          <Typography text={`Subscription Validity`} type='body2' className="mb-1"/>
          <Typography text={'25 June, 2025'} type='heading2'/>
        </div>
      </div>
    </div>
  )
}
