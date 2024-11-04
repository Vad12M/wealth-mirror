
export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  role?: string;
  expiredPaymentDate?: string;
  status?: string;
}
