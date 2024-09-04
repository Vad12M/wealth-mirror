import { baseApi } from "@/store/api/baseApi";
import { LIST_CONTENT_TAG } from "@/store/api/apiSlice";
import { IFixedDeposit, IFixedDepositForm } from "@/interfaces/wealths/IFixedDeposit";

export const fixedDepositSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    getFixedDeposits: builder.query<IFixedDeposit[], void>({
      query: () => ({
        url: '/fixedDeposits',
      }),
      providesTags: [{ type: LIST_CONTENT_TAG, id: 'fixedDeposits' }]
    }),

    createFixedDeposit: builder.mutation<void, IFixedDepositForm>({
      query: (params) => ({
        url: '/fixedDeposits/create',
        method: 'POST',
        body: JSON.stringify(params)
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'fixedDeposits' }]
    }),

    updateFixedDeposit: builder.mutation<void, any>({
      query: (params) => {
        const { id, ...rest } = params;
        return {
          url: `/fixedDeposits/update/${id}`,
          method: 'PUT',
          body: JSON.stringify(rest)
        }
      },
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'fixedDeposits' }]
    }),

    deleteFixedDeposit: builder.mutation<void, string>({
      query: (id) => ({
        url: `/fixedDeposits/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'fixedDeposits' }]
    }),

    deleteAllFixedDeposits: builder.mutation<void, void>({
      query: () => ({
        url: '/fixedDeposits/delete/all',
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'fixedDeposits' }]
    }),
  })
})

export const {
  useGetFixedDepositsQuery,
  useCreateFixedDepositMutation,
  useUpdateFixedDepositMutation,
  useDeleteFixedDepositMutation,
  useDeleteAllFixedDepositsMutation
} = fixedDepositSlice;
