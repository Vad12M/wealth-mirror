import { baseApi } from "@/store/api/baseApi";
import { LIST_CONTENT_TAG } from "@/store/api/apiSlice";
import { IIncome, IIncomeForm } from "@/interfaces/wealths/IIncome";

export const incomeSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    getIncomes: builder.query<IIncome[], void>({
      query: () => ({
        url: '/incomes',
      }),
      providesTags: [{ type: LIST_CONTENT_TAG, id: 'incomes' }]
    }),

    createIncome: builder.mutation<void, IIncomeForm>({
      query: (params) => ({
        url: '/incomes/create',
        method: 'POST',
        body: JSON.stringify(params)
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'incomes' }]
    }),

    updateIncome: builder.mutation<void, any>({
      query: (params) => {
        const { id, ...rest } = params;
        return {
          url: `/incomes/update/${id}`,
          method: 'PUT',
          body: JSON.stringify(rest)
        }
      },
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'incomes' }]
    }),

    deleteIncome: builder.mutation<void, string>({
      query: (id) => ({
        url: `/incomes/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'incomes' }]
    }),

    deleteAllIncomes: builder.mutation<void, void>({
      query: () => ({
        url: '/incomes/delete/all',
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'incomes' }]
    }),
  })
})

export const {
  useGetIncomesQuery,
  useCreateIncomeMutation,
  useUpdateIncomeMutation,
  useDeleteIncomeMutation,
  useDeleteAllIncomesMutation
} = incomeSlice;
