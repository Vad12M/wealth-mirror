import { baseApi } from "@/store/api/baseApi";
import { LIST_CONTENT_TAG } from "@/store/api/apiSlice";
import { ICard, ICardForm } from "@/interfaces/ICard";

export const cardSlice = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<ICard[], void>({
      query: () => ({
        url: '/cards',
      }),
      providesTags: [{ type: LIST_CONTENT_TAG, id: 'cards' }]
    }),

    createCard: builder.mutation<void, ICardForm>({
      query: (params) => ({
        url: '/cards/create',
        method: 'POST',
        body: JSON.stringify(params)
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'cards' }]
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
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'cards' }]
    }),

    deleteCard: builder.mutation<void, string>({
      query: (id) => ({
        url: `/cards/delete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'cards' }]
    }),

    deleteAllCards: builder.mutation<void, void>({
      query: () => ({
        url: '/cards/delete/all',
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: LIST_CONTENT_TAG, id: 'cards' }]
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
