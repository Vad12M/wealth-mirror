import { baseApi } from "@/store/api/baseApi";
import { ILogin, IRegister } from "@/interfaces/IAuth";
import { IWaitUser } from "@/interfaces/IWaitUser";
import { IContactForm } from "@/interfaces/IContactForm";
import { IUser } from "@/interfaces/IUser";

// const transformResponse = <T extends any>(response: IAPIResponse<T>) => response.data
export const LIST_CONTENT_TAG = 'CONTENT_LIST' as never;
export const CONTENT_TAG = 'CONTENT' as never;

export const apiSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation<{ token: string }, ILogin>({
      query: (params) => ({
        url: '/auth/login',
        method: 'POST',
        body: JSON.stringify(params)
      }),
    }),

    register: builder.mutation<void, IRegister>({
      query: (params) => ({
        url: '/auth/register',
        method: 'POST',
        body: JSON.stringify(params)
      }),
    }),

    getMe: builder.query<IUser, {}>({
      query: () => ({
        url: '/auth/me',
      }),
    }),

    updateMe: builder.mutation<void, any>({
      query: (params) => ({
        url: '/user/update',
        method: 'PUT',
        body: JSON.stringify(params)
      }),
    }),

    changePassword: builder.mutation<void, any>({
      query: (params) => ({
        url: '/user/update-password',
        method: 'POST',
        body: JSON.stringify(params)
      }),
    }),

    addWaitUser: builder.mutation<void, IWaitUser>({
      query: (params) => ({
        url: '/addWaitUser',
        method: 'POST',
        body: JSON.stringify(params)
      }),
    }),

    contact: builder.mutation<void, IContactForm>({
      query: (params) => ({
        url: '/contact',
        method: 'POST',
        body: JSON.stringify(params),
      }),
    }),

    getContacts: builder.query<IContactForm[], void>({
      query: () => ({
        url: '/contacts',
      }),
    }),

    getWaitUsers: builder.query<IWaitUser[], void>({
      query: () => ({
        url: '/wait-users',
      }),
    }),

    getCars: builder.query<any[], void>({
      query: () => ({
        url: '/cars',
      }),
    }),

  })
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetMeQuery,
  useAddWaitUserMutation,
  useContactMutation,
  useGetContactsQuery,
  useGetWaitUsersQuery,
  useUpdateMeMutation,
  useChangePasswordMutation,
  useGetCarsQuery,
} = apiSlice;
