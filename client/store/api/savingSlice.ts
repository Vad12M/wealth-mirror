import { baseApi } from "@/store/api/baseApi";
import { LIST_CONTENT_TAG } from "@/store/api/apiSlice";
import { ISaving, ISavingForm } from "@/interfaces/wealths/ISaving";

export const SavingSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    getSavings: builder.query<ISaving[], void>({
      query: () => ({
        url: '/savings',
      }),
      providesTags: [{ type: LIST_CONTENT_TAG, id: 'savings' }]
    }),

    createSaving: builder.mutation<void, ISavingForm>({
      query: (params) => ({
        url: '/savings/create',
        method: 'POST',
        body: JSON.stringify(params)
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'savings' }]
    }),

    updateSaving: builder.mutation<void, any>({
      query: (params) => {
        const { id, ...rest } = params;
        return {
          url: `/savings/update/${id}`,
          method: 'PUT',
          body: JSON.stringify(rest)
        }
      },
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'savings' }]
    }),

    deleteSaving: builder.mutation<void, string>({
      query: (id) => ({
        url: `/savings/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'savings' }]
    }),

    deleteAllSaving: builder.mutation<void, void>({
      query: () => ({
        url: '/savings/delete/all',
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'savings' }]
    }),
  })
})

export const {
  useGetSavingsQuery,
  useCreateSavingMutation,
  useUpdateSavingMutation,
  useDeleteSavingMutation,
  useDeleteAllSavingMutation,
} = SavingSlice;
