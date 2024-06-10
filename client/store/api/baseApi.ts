import useAuthHandler from "@/service/useAuthHandler";
import { FetchBaseQueryArgs } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const jsonType = "application/json";

export const baseApi = createApi({
  reducerPath: "gql",
  baseQuery: async (
    args: FetchBaseQueryArgs & {
      url: string;
      externalToken?: string;
      extraBaseURL?: string;
    },
    api,
    extra?: any,
  ) =>
    await fetchBaseQuery({
      baseUrl: process.env.NEXT_PUBLIC_API_URL as string,
      prepareHeaders: async (headers) => {
        const token = await useAuthHandler().getAuthToken();
        if (args.externalToken || token) {
          headers.set('apiauthorization', `Bearer ${args.externalToken || token}`);
        }
        if (!(args.body instanceof FormData)) {
          headers.set("Content-Type", jsonType);
        }
        headers.set("Accept", jsonType);
        const KEY = process.env.NEXT_PUBLIC_KEY as string;
        if (KEY) {
          headers.set('authorization', KEY);
        }

        return headers;
      },
    })({ ...args, url: args.url }, api, extra),
  endpoints: () => ({}),
});
