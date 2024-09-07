import { baseApi } from "@/store/api/baseApi";
import { LIST_CONTENT_TAG } from "@/store/api/apiSlice";
import { ILiquidCash, ILiquidCashForm } from "@/interfaces/ILiquidCash";

export const LiquidCashSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    getLiquidCashs: builder.query<ILiquidCash[], void>({
      query: () => ({
        url: '/liquidCash',
      }),
      providesTags: [{ type: LIST_CONTENT_TAG, id: 'liquidCash' }]
    }),

    createLiquidCash: builder.mutation<void, ILiquidCashForm>({
      query: (params) => ({
        url: '/liquidCash/create',
        method: 'POST',
        body: JSON.stringify(params)
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'liquidCash' }]
    }),

    updateLiquidCash: builder.mutation<void, any>({
      query: (params) => {
        const { id, ...rest } = params;
        return {
          url: `/liquidCash/update/${id}`,
          method: 'PUT',
          body: JSON.stringify(rest)
        }
      },
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'liquidCash' }]
    }),

    deleteLiquidCash: builder.mutation<void, string>({
      query: (id) => ({
        url: `/liquidCash/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'liquidCash' }]
    }),

    deleteAllLiquidCash: builder.mutation<void, void>({
      query: () => ({
        url: '/liquidCash/delete/all',
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'liquidCash' }]
    }),
  })
})

export const {
  useGetLiquidCashsQuery,
  useCreateLiquidCashMutation,
  useUpdateLiquidCashMutation,
  useDeleteLiquidCashMutation,
  useDeleteAllLiquidCashMutation,
} = LiquidCashSlice;
