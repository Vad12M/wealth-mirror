import { baseApi } from "@/store/api/baseApi";
// const transformResponse = <T extends any>(response: IAPIResponse<T>) => response.data

export const cardSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<any[], void>({
      query: () => ({
        url: '/cards',
      }),
    }),

    createCard: builder.mutation<void, any>({
      query: (params) => ({
        url: '/cards/create',
        method: 'POST',
        body: JSON.stringify(params)
      }),
    }),

    updateCard: builder.mutation<void, any>({
      query: (params) => {
        const { id, ...rest } = params;
        return {
          url: `/cards/update/${id}`,
          method: 'PUT',
          body: JSON.stringify(rest)
        }
      },
    }),

    deleteCard: builder.mutation<void, number>({
      query: (id) => ({
        url: `/cards/delete/${id}`,
        method: 'DELETE',
      }),
    }),

    deleteAllCards: builder.mutation<void, void>({
      query: () => ({
        url: '/cards/delete/all',
        method: 'DELETE',
      }),
    }),

  })
})

export const {
  useGetCardsQuery,
  useCreateCardMutation,
  useUpdateCardMutation,
  useDeleteCardMutation,
  useDeleteAllCardsMutation,
} = cardSlice;
