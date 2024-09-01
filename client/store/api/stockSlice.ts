import { baseApi } from "@/store/api/baseApi";
import { LIST_CONTENT_TAG } from "@/store/api/apiSlice";
import { IStock, IStockForm } from "@/interfaces/IStock";

export const stockSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    getStocks: builder.query<IStock[], void>({
      query: () => ({
        url: '/stocks',
      }),
      providesTags: [{ type: LIST_CONTENT_TAG, id: 'stocks' }]
    }),

    createStock: builder.mutation<void, IStockForm>({
      query: (params) => ({
        url: '/stocks/create',
        method: 'POST',
        body: JSON.stringify(params)
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'stocks' }]
    }),

    updateStock: builder.mutation<void, any>({
      query: (params) => {
        const { id, ...rest } = params;
        return {
          url: `/stocks/update/${id}`,
          method: 'PUT',
          body: JSON.stringify(rest)
        }
      },
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'stocks' }]
    }),

    deleteStock: builder.mutation<void, string>({
      query: (id) => ({
        url: `/stocks/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'stocks' }]
    }),

    deleteAllStocks: builder.mutation<void, void>({
      query: () => ({
        url: '/stocks/delete/all',
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'stocks' }]
    }),

    getExternalStocks: builder.query<any, { search?: string }>({
      query: (params) => ({
        url: '/external/stocks?limit=10',
        params,
      }),
      providesTags: [{ type: LIST_CONTENT_TAG, id: 'stocks' }]
    }),

  })
})

export const {
  useGetStocksQuery,
  useCreateStockMutation,
  useUpdateStockMutation,
  useDeleteStockMutation,
  useDeleteAllStocksMutation,
  useGetExternalStocksQuery
} = stockSlice;
