import { baseApi } from "@/store/api/baseApi";
import { LIST_CONTENT_TAG } from "@/store/api/apiSlice";
import { IRealEstate, IRealEstateForm } from "@/interfaces/IRealEstate";

export const realEstateSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    getRealEstates: builder.query<IRealEstate[], void>({
      query: () => ({
        url: '/realEstates',
      }),
      providesTags: [{ type: LIST_CONTENT_TAG, id: 'realEstates' }]
    }),

    createRealEstate: builder.mutation<void, IRealEstateForm>({
      query: (params) => ({
        url: '/realEstates/create',
        method: 'POST',
        body: JSON.stringify(params)
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'realEstates' }]
    }),

    updateRealEstate: builder.mutation<void, any>({
      query: (params) => {
        const { id, ...rest } = params;
        return {
          url: `/realEstates/update/${id}`,
          method: 'PUT',
          body: JSON.stringify(rest)
        }
      },
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'realEstates' }]
    }),

    deleteRealEstate: builder.mutation<void, string>({
      query: (id) => ({
        url: `/realEstates/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'realEstates' }]
    }),

    deleteAllRealEstates: builder.mutation<void, void>({
      query: () => ({
        url: '/realEstates/delete/all',
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'realEstates' }]
    }),

  })
})

export const {
  useGetRealEstatesQuery,
  useCreateRealEstateMutation,
  useUpdateRealEstateMutation,
  useDeleteRealEstateMutation,
  useDeleteAllRealEstatesMutation,
} = realEstateSlice;
