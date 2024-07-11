import { baseApi } from "@/store/api/baseApi";
// const transformResponse = <T extends any>(response: IAPIResponse<T>) => response.data

export const carSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCars: builder.query<any[], void>({
      query: () => ({
        url: '/cars',
      }),
    }),

    createCar: builder.mutation<void, any>({
      query: (params) => ({
        url: '/cars/create',
        method: 'POST',
        body: JSON.stringify(params)
      }),
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
    }),

    deleteCar: builder.mutation<void, number>({
      query: (id) => ({
        url: `/cars/delete/${id}`,
        method: 'DELETE',
      }),
    }),

    deleteAllCars: builder.mutation<void, void>({
      query: () => ({
        url: '/cars/delete/all',
        method: 'DELETE',
      }),
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
