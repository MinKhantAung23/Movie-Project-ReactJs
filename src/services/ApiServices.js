import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiServices = createApi({
    reducerPath: "moviesApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${import.meta.env.VITE_API_URL}`,
    }),
    endpoints: (builder) => ({}),
})