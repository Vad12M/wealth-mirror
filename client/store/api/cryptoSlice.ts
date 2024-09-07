import { baseApi } from "@/store/api/baseApi";
import { LIST_CONTENT_TAG } from "@/store/api/apiSlice";
import { ICrypto, ICryptoForm } from "@/interfaces/ICrypto";

export const cryptoSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCryptos: builder.query<ICrypto[], void>({
      query: () => ({
        url: '/crypto',
      }),
      providesTags: [{ type: LIST_CONTENT_TAG, id: 'crypto' }]
    }),

    createCrypto: builder.mutation<void, ICryptoForm>({
      query: (params) => ({
        url: '/crypto/create',
        method: 'POST',
        body: JSON.stringify(params)
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'crypto' }]
    }),

    updateCrypto: builder.mutation<void, any>({
      query: (params) => {
        const { id, ...rest } = params;
        return {
          url: `/crypto/update/${id}`,
          method: 'PUT',
          body: JSON.stringify(rest)
        }
      },
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'crypto' }]
    }),

    deleteCrypto: builder.mutation<void, string>({
      query: (id) => ({
        url: `/crypto/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'crypto' }]
    }),

    deleteAllCryptos: builder.mutation<void, void>({
      query: () => ({
        url: '/crypto/delete/all',
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'crypto' }]
    }),

  })
})

export const {
  useGetCryptosQuery,
  useCreateCryptoMutation,
  useUpdateCryptoMutation,
  useDeleteCryptoMutation,
  useDeleteAllCryptosMutation,
} = cryptoSlice;
