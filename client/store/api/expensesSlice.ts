import { baseApi } from "@/store/api/baseApi";
import { LIST_CONTENT_TAG } from "@/store/api/apiSlice";
import { IExpenses, IExpensesForm } from "@/interfaces/wealths/IExpenses";

export const expensesSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    getExpenses: builder.query<IExpenses[], void>({
      query: () => ({
        url: '/expenses',
      }),
      providesTags: [{ type: LIST_CONTENT_TAG, id: 'expenses' }]
    }),

    createExpenses: builder.mutation<void, IExpensesForm>({
      query: (params) => ({
        url: '/expenses/create',
        method: 'POST',
        body: JSON.stringify(params)
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'expenses' }]
    }),

    updateExpenses: builder.mutation<void, any>({
      query: (params) => {
        const { id, ...rest } = params;
        return {
          url: `/expenses/update/${id}`,
          method: 'PUT',
          body: JSON.stringify(rest)
        }
      },
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'expenses' }]
    }),

    deleteExpenses: builder.mutation<void, string>({
      query: (id) => ({
        url: `/expenses/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'expenses' }]
    }),

    deleteAllExpenses: builder.mutation<void, void>({
      query: () => ({
        url: '/expenses/delete/all',
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'expenses' }]
    }),
  })
})

export const {
  useGetExpensesQuery,
  useCreateExpensesMutation,
  useUpdateExpensesMutation,
  useDeleteExpensesMutation,
  useDeleteAllExpensesMutation
} = expensesSlice;
