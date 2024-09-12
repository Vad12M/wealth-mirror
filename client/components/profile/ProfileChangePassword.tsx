import Input from "@/ui/input/input";
import Typography from "@/ui/typography/Typography";

export interface IPasswordForm {
  oldPassword: string;
  newPassword: string;
}

export default function ProfileChangePassword({
  passwordForm,
  setPasswordForm
}: {
  passwordForm: IPasswordForm, setPasswordForm:  React.Dispatch<React.SetStateAction<IPasswordForm>>;
}) {

  return (
    <div className="flex items-center w-full my-10  space-x-6">
      <div className="flex flex-col items-start w-1/2">
        <Typography text={`Old Password`} type='body2'/>
        <Input
          value={passwordForm?.oldPassword}
          onUpdate={(e) => setPasswordForm((prevState) => ({ ...prevState, oldPassword: e.target.value }))}
          placeholder="Old Password"
          className={'w-full'}
        />
      </div>
      <div className="flex flex-col items-start w-1/2">
        <Typography text={`New Password`} type='body2'/>
        <Input
          value={passwordForm?.newPassword}
          onUpdate={(e) => setPasswordForm((prevState) => ({ ...prevState, newPassword: e.target.value }))}
          placeholder="New Password"
          className={'w-full'}
        />
      </div>
    </div>
  )
}
