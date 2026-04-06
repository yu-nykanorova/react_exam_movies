import {createAsyncThunk, createSlice, isPending, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import type {IMovieDetails, IMovieShort} from "../../models/movie/IMovie.ts";
import {type GetMoviesParams, type MoviesResult, moviesService, type SearchQueryParams} from "../../services/getMovies.service.ts";
import {getError} from "../../helpers/getError.ts";

type MovieSliceType = {
    movies: IMovieShort[];
    searchedMovies: IMovieShort[];
    movie: IMovieDetails | null;
    totalPages: number;
    moviesListLoading: boolean;
    movieDetailsLoading: boolean;
    error: string | null;
}

const initialState: MovieSliceType = {movies: [], searchedMovies: [], movie: null, totalPages: 1, moviesListLoading: false, movieDetailsLoading: false, error: null};

const loadMovies = createAsyncThunk(
    "movieSlice/loadMovies",
    async (params: GetMoviesParams | undefined, thunkAPI) => {
        try {
            const movies = await moviesService.getMovies(params);
            return thunkAPI.fulfillWithValue(movies);
        } catch (error) {
            return thunkAPI.rejectWithValue(getError(error));
        }
    }
);

const loadMovie = createAsyncThunk(
    "movieSlice/loadMovie",
    async (id: string, thunkAPI) => {
        try {
            const movie = await moviesService.getMovieById(id);
            return thunkAPI.fulfillWithValue(movie);
        } catch (error) {
            return thunkAPI.rejectWithValue(getError(error));
        }
    }
);

const loadSearchedMovies = createAsyncThunk(
    "movieSlice/loadSearchedMovies",
    async (query: SearchQueryParams, thunkAPI) => {
        try {
            const searchedMovies = await moviesService.searchMovies(query);
            return thunkAPI.fulfillWithValue(searchedMovies);
        } catch (error) {
            return thunkAPI.rejectWithValue(getError(error));
        }
    }
)

export const movieSlice = createSlice({
    name: "movieSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadMovies.fulfilled, (state, action: PayloadAction<MoviesResult>) => {
                state.movies = action.payload.movies;
                state.totalPages = Math.min(action.payload.totalPages, 500);
                state.moviesListLoading = false;
            })
            .addCase(loadSearchedMovies.fulfilled, (state, action: PayloadAction<MoviesResult>) => {
                state.searchedMovies = action.payload.movies;
                state.totalPages = Math.min(action.payload.totalPages, 500);
                state.moviesListLoading = false;
            })
            .addCase(loadMovie.fulfilled, (state, action: PayloadAction<IMovieDetails>) => {
                state.movie = action.payload;
                state.movieDetailsLoading = false;
            })
            .addCase(loadMovie.pending, (state) => {
                state.movieDetailsLoading = true;
                state.movie = null;
            })
            .addCase(loadMovie.rejected, (state) => {
                state.movieDetailsLoading = false;
            })
            .addMatcher(isPending(loadMovies, loadSearchedMovies), (state) => {
                state.moviesListLoading = true;
            })
            .addMatcher(isRejected(loadMovies, loadSearchedMovies), (state) => {
                state.moviesListLoading = false;
            })
            .addMatcher(isPending(loadMovies, loadMovie, loadSearchedMovies), (state) => {
                state.error = null;
            })
            .addMatcher(isRejected(loadMovies, loadMovie, loadSearchedMovies), (state, action) => {
                state.error = (action.payload as string) ?? "Error";
            });
    }
});

export const movieSliceActions = {
    ...movieSlice.actions,
    loadMovies,
    loadMovie,
    loadSearchedMovies
};