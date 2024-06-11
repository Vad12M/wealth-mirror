import useAuthHandler from "@/service/useAuthHandler";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const jsonType = "application/json";

export const baseApi = createApi({
  reducerPath: "gql",
  baseQuery: async (
    args: any & {
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

        return headers;
      },
    })({ ...args, url: args.url }, api, extra),
  endpoints: () => ({}),
});
