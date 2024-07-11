import { baseApi } from "@/store/api/baseApi";
import { ICar, ICarForm } from "@/interfaces/ICar";
import { LIST_CONTENT_TAG } from "@/store/api/apiSlice";

export const carSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCars: builder.query<ICar[], void>({
      query: () => ({
        url: '/cars',
      }),
      providesTags: [{ type: LIST_CONTENT_TAG, id: 'cars' }]
    }),

    createCar: builder.mutation<void, ICarForm>({
      query: (params) => ({
        url: '/cars/create',
        method: 'POST',
        body: JSON.stringify(params)
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'cars' }]
    }),

    updateCar: builder.mutation<void, any>({
      query: (params) => {
        const { id, ...rest } = params;
        return {
          url: `/cars/update/${id}`,
          method: 'PUT',
          body: JSON.stringify(rest)
        }
      },
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'cars' }]
    }),

    deleteCar: builder.mutation<void, string>({
      query: (id) => ({
        url: `/cars/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'cars' }]
    }),

    deleteAllCars: builder.mutation<void, void>({
      query: () => ({
        url: '/cars/delete/all',
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'cars' }]
    }),

  })
})

export const {
  useGetCarsQuery,
  useCreateCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
  useDeleteAllCarsMutation,
} = carSlice;
