import { baseApi } from "@/store/api/baseApi";
import { LIST_CONTENT_TAG } from "@/store/api/apiSlice";
import { IGold, IGoldForm } from "@/interfaces/IGold";

export const GoldSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    getGolds: builder.query<IGold[], void>({
      query: () => ({
        url: '/gold',
      }),
      providesTags: [{ type: LIST_CONTENT_TAG, id: 'gold' }]
    }),

    createGold: builder.mutation<void, IGoldForm>({
      query: (params) => ({
        url: '/gold/create',
        method: 'POST',
        body: JSON.stringify(params)
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'gold' }]
    }),

    updateGold: builder.mutation<void, any>({
      query: (params) => {
        const { id, ...rest } = params;
        return {
          url: `/gold/update/${id}`,
          method: 'PUT',
          body: JSON.stringify(rest)
        }
      },
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'gold' }]
    }),

    deleteGold: builder.mutation<void, string>({
      query: (id) => ({
        url: `/gold/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'gold' }]
    }),

    deleteAllGold: builder.mutation<void, void>({
      query: () => ({
        url: '/gold/delete/all',
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'gold' }]
    }),
  })
})

export const {
  useGetGoldsQuery,
  useCreateGoldMutation,
  useUpdateGoldMutation,
  useDeleteGoldMutation,
  useDeleteAllGoldMutation
} = GoldSlice;
