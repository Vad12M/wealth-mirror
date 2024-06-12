import { baseApi } from "@/store/api/baseApi";
import { ILogin, IRegister } from "@/interfaces/IAuth";
import { IWaitUser } from "@/interfaces/IWaitUser";

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

    addWaitUser: builder.mutation<void, IWaitUser>({
      query: (params) => ({
        url: '/auth/addWaitUser',
        method: 'POST',
        body: JSON.stringify(params)
      }),
    }),

    getMe: builder.query<any, void>({
      query: () => ({
        url: '/auth/me',
      }),
    }),

  })
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetMeQuery,
  useAddWaitUserMutation

} = apiSlice;
