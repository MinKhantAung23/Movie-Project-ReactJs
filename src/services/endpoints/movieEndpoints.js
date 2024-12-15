import { ApiServices } from "../ApiServices";

const movieEndpoints = ApiServices.injectEndpoints({
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: (page = 1, limit = 20) => `movie/popular?page=${page}&limit=${limit}&api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Movies"],
            keepUnusedDataFor: 60 * 60,
        }),
        getMovieById: builder.query({
            query: (id) => `movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Movies"],
            keepUnusedDataFor: 60 * 60,
        }),
        getMovieCast: builder.query({
            query: (id) => `movie/${id}/credits?api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Movies"],
            keepUnusedDataFor: 60 * 60,
        }),
        getMovieSimilar: builder.query({
            query: (id) => `movie/${id}/similar?api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Movies"],
            keepUnusedDataFor: 60 * 60,
        }),
        getMovieRecommendations: builder.query({
            query: (id) => `movie/${id}/recommendations?api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Movies"],
            keepUnusedDataFor: 60 * 60,
        }),
        getMoviesByGenre: builder.query({
            query: (genreId, page = 1, limit = 20) => `discover/movie?with_genres=${genreId}&page=${page}&limit=${limit}&api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Movies"],
            keepUnusedDataFor: 60 * 60,
        }),
        getMoviesBySearch: builder.query({
            query: ({ query, page = 1, limit = 20 }) => `search/multi?query=${query}&page=${page}&limit=${limit}&api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Movies"],
            keepUnusedDataFor: 60 * 60,
        }),
        upcomingMovies: builder.query({
            query: (page = 1, limit = 20) => `movie/upcoming?page=${page}&limit=${limit}&api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Movies"],
            keepUnusedDataFor: 60 * 60,
        }),
        popularMovies: builder.query({
            query: (page = 1, limit = 20) => `movie/popular?page=${page}&limit=${limit}&api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Movies"],
            keepUnusedDataFor: 60 * 60,
        }),
        topRatedMovies: builder.query({
            query: (page = 1, limit = 20) => `movie/top_rated?page=${page}&limit=${limit}&api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Movies"],
            keepUnusedDataFor: 60 * 60,
        }),
        nowPlayingMovies: builder.query({
            query: (page = 1, limit = 20) => `movie/now_playing?page=${page}&limit=${limit}&api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Movies"],
            keepUnusedDataFor: 60 * 60,
        }),
        trendingMovies: builder.query({
            query: (page = 1, limit = 20) => `trending/all/day?page=${page}&limit=${limit}&api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Movies"],
            keepUnusedDataFor: 60 * 60,
        }),
        getMovieTrailer: builder.query({
            query: (id) => `movie/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`,
            providesTags: ["Movies"],
            keepUnusedDataFor: 60 * 60,
        })
    }),
})

export const {
    useGetMoviesQuery,
    useGetMovieByIdQuery,
    useGetMovieCastQuery,
    useGetMovieRecommendationsQuery,
    useGetMovieSimilarQuery,
    useGetMoviesByGenreQuery,
    useGetMoviesBySearchQuery,
    useUpcomingMoviesQuery,
    usePopularMoviesQuery,
    useTopRatedMoviesQuery,
    useNowPlayingMoviesQuery,
    useTrendingMoviesQuery,
    useGetMovieTrailerQuery
} = movieEndpoints;