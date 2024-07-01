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
    <div className="flex items-center w-full my-10">
      <div className="flex flex-col items-start w-1/3">
        <Typography text={`Old Password`} type='healine4'/>
        <Input
          value={passwordForm?.oldPassword}
          onUpdate={(e) => setPasswordForm((prevState) => ({ ...prevState, oldPassword: e.target.value }))}
          placeholder="Old Password"
        />
      </div>
      <div className="flex flex-col items-start">
        <Typography text={`New Password`} type='healine4'/>
        <Input
          value={passwordForm?.newPassword}
          onUpdate={(e) => setPasswordForm((prevState) => ({ ...prevState, newPassword: e.target.value }))}
          placeholder="New Password"
        />
      </div>
    </div>
  )
}
