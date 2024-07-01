import Typography from "@/ui/typography/Typography";
import Input from "@/ui/input/input";
import { IUser } from "@/interfaces/IUser";

export default function ProfileInfo({
  user, setUser, isEditing
}: {
  user: IUser,
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isEditing: boolean
}) {
  return (
    <div className="flex flex-col w-full items-center space-y-10">
      <div className="flex items-center w-full">
        <div className="flex flex-col items-start w-1/3">
          <Typography text={`First Name`} type='healine4'/>
          {isEditing ?
            <Input
              value={user?.firstName}
              onUpdate={(e) => setUser((prevState) => ({ ...prevState, firstName: e.target.value }))}
              placeholder="First Name"
            /> :
            <Typography text={user?.firstName || ''} type='bodyB1'/>}
        </div>
        <div className="flex flex-col items-start w-1/3">
          <Typography text={`Last Name`} type='healine4'/>
          {isEditing ?
            <Input
              value={user?.lastName}
              onUpdate={(e) => setUser((prevState) => ({ ...prevState, lastName: e.target.value }))}
              placeholder="First Name"
            /> :
            <Typography text={user?.lastName || ''} type='bodyB1'/>}
        </div>
        <div className="flex flex-col items-start w-1/3">
          <Typography text={`Email`} type='healine4'/>
          {isEditing ?
            <Input
              value={user?.email}
              onUpdate={(e) => setUser((prevState) => ({ ...prevState, email: e.target.value }))}
              placeholder="Email"
            /> :
            <Typography text={user?.email || ''} type='bodyB1'/>}
        </div>
      </div>
      <div className="flex items-center w-full">
        <div className="flex flex-col items-start w-1/3">
          <Typography text={`Phone`} type='healine4'/>
          {isEditing ?
            <Input
              value={user?.phone}
              onUpdate={(e) => setUser((prevState) => ({ ...prevState, phone: e.target.value }))}
              placeholder="Phone"
            /> :
            <Typography text={user?.phone || ''} type='bodyB1'/>}
        </div>
        <div className="flex flex-col items-start">
          <Typography text={`Address`} type='healine4'/>
          {isEditing ?
            <Input
              value={user?.address}
              onUpdate={(e) => setUser((prevState) => ({ ...prevState, address: e.target.value }))}
              placeholder="Address"
            /> :
            <Typography text={user?.address || ''} type='bodyB1'/>}
        </div>
      </div>
    </div>
  )
}
