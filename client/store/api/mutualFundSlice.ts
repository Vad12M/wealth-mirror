import { baseApi } from "@/store/api/baseApi";
import { LIST_CONTENT_TAG } from "@/store/api/apiSlice";
import { IMutualFund, IMutualFundForm } from "@/interfaces/wealths/IMutualFund";

export const mutualFundSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMutualFunds: builder.query<IMutualFund[], void>({
      query: () => ({
        url: '/mutualFunds',
      }),
      providesTags: [{ type: LIST_CONTENT_TAG, id: 'mutualFunds' }]
    }),

    createMutualFund: builder.mutation<void, IMutualFundForm>({
      query: (params) => ({
        url: '/mutualFunds/create',
        method: 'POST',
        body: JSON.stringify(params)
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'mutualFunds' }]
    }),

    updateMutualFund: builder.mutation<void, any>({
      query: (params) => {
        const { id, ...rest } = params;
        return {
          url: `/mutualFunds/update/${id}`,
          method: 'PUT',
          body: JSON.stringify(rest)
        }
      },
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'mutualFunds' }]
    }),

    deleteMutualFund: builder.mutation<void, string>({
      query: (id) => ({
        url: `/mutualFunds/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'mutualFunds' }]
    }),

    deleteAllMutualFunds: builder.mutation<void, void>({
      query: () => ({
        url: '/mutualFunds/deleteAll',
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'mutualFunds' }]
    }),
  })
})

export const {
  useGetMutualFundsQuery,
  useCreateMutualFundMutation,
  useUpdateMutualFundMutation,
  useDeleteMutualFundMutation,
  useDeleteAllMutualFundsMutation,
} = mutualFundSlice;
