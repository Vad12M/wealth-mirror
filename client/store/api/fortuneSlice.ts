import { baseApi } from "@/store/api/baseApi";
import { LIST_CONTENT_TAG } from "@/store/api/apiSlice";
import { IFortune, IFortuneForm } from "@/interfaces/IFortune";

export const fortuneSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    getFortunes: builder.query<IFortune[], void>({
      query: () => ({
        url: '/fortunes',
      }),
      providesTags: [{ type: LIST_CONTENT_TAG, id: 'fortunes' }]
    }),

    createFortune: builder.mutation<void, IFortuneForm>({
      query: (params) => ({
        url: '/fortunes/create',
        method: 'POST',
        body: JSON.stringify(params)
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'fortunes' }]
    }),

    updateFortune: builder.mutation<void, any>({
      query: (params) => {
        const { id, ...rest } = params;
        return {
          url: `/fortunes/update/${id}`,
          method: 'PUT',
          body: JSON.stringify(rest)
        }
      },
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'fortunes' }]
    }),

    deleteFortune: builder.mutation<void, string>({
      query: (id) => ({
        url: `/fortunes/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'fortunes' }]
    }),

    deleteAllFortunes: builder.mutation<void, void>({
      query: () => ({
        url: '/fortunes/delete/all',
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'fortunes' }]
    }),

    getStocks: builder.query<any, { search?: string }>({
      query: (params) => ({
        url: '/stocks?limit=10',
        params,
      }),
      providesTags: [{ type: LIST_CONTENT_TAG, id: 'stocks' }]
    }),

  })
})

export const {
  useGetFortunesQuery,
  useCreateFortuneMutation,
  useUpdateFortuneMutation,
  useDeleteFortuneMutation,
  useDeleteAllFortunesMutation,
  useGetStocksQuery,
} = fortuneSlice;
