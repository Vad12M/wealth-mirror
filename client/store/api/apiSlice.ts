import { baseApi } from "@/store/api/baseApi";
import { ILogin, IRegister } from "@/interfaces/IAuth";

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

  })
})

export const {
  useLoginMutation,
  useRegisterMutation,

} = apiSlice;
