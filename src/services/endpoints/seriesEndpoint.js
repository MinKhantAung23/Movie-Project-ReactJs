import { ApiServices } from "../ApiServices";

const seriesEndpoints = ApiServices.injectEndpoints({
    endpoints: (builder) => ({
        getSeries: builder.query({
            query: (page = 1, limit = 20) => `tv/popular?page=${page}&limit=${limit}&api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Series"],
            keepUnusedDataFor: 60 * 60
        }),
        getSeriesById: builder.query({
            query: (id) => `tv/${id}?api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Series"],
            keepUnusedDataFor: 60 * 60
        }),
        popularSeries: builder.query({
            query: (page = 1, limit = 20) => `tv/popular?page=${page}&limit=${limit}&api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Series"],
            keepUnusedDataFor: 60 * 60
        }),
        topRatedSeries: builder.query({
            query: (page = 1, limit = 20) => `tv/top_rated?page=${page}&limit=${limit}&api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Series"],
            keepUnusedDataFor: 60 * 60
        }),
        upcomingSeries: builder.query({
            query: (page = 1, limit = 20) => `tv/on_the_air?page=${page}&limit=${limit}&api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Series"],
            keepUnusedDataFor: 60 * 60
        }),
        nowPlayingSeries: builder.query({
            query: (page = 1, limit = 20) => `tv/airing_today?page=${page}&limit=${limit}&api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Series"],
            keepUnusedDataFor: 60 * 60
        }),
        trendingSeries: builder.query({
            query: (page = 1, limit = 20) => `trending/tv/week?page=${page}&limit=${limit}&api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Series"],
            keepUnusedDataFor: 60 * 60
        }),
        getSeriesRecommendations: builder.query({
            query: (id) => `tv/${id}/recommendations?api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Series"],
            keepUnusedDataFor: 60 * 60
        }),
        getSeriesCasts: builder.query({
            query: (id) => `tv/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Series"],
            keepUnusedDataFor: 60 * 60
        }),
        getSeriesTrailersById: builder.query({
            query: (id) => `tv/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Series"],
            keepUnusedDataFor: 60 * 60
        })
    })
})

export const { useGetSeriesQuery,
    useGetSeriesByIdQuery,
    usePopularSeriesQuery,
    useTopRatedSeriesQuery,
    useUpcomingSeriesQuery,
    useNowPlayingSeriesQuery,
    useTrendingSeriesQuery,
    useGetSeriesRecommendationsQuery,
    useGetSeriesCastsQuery,
    useGetSeriesTrailersByIdQuery
} = seriesEndpoints;