import {createAsyncThunk, createSlice, isFulfilled, isPending, isRejected, type PayloadAction} from "@reduxjs/toolkit";
import type {IMovieDetails, IMovieShort} from "../../models/movie/IMovie.ts";
import {type GetMoviesParams, moviesService} from "../../services/getMovies.service.ts";
import {getError} from "../../helpers/getError.ts";

type MovieSliceType = {
    movies: IMovieShort[];
    movie: IMovieDetails | null;
    loadState: "succeed" | "loading" | "failed";
    error: string | null;
}

const initialState: MovieSliceType = {movies: [], movie: null, loadState: "succeed", error: null};

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
)

export const movieSlice = createSlice({
    name: "movieSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadMovies.fulfilled, (state, action: PayloadAction<IMovieShort[]>) => {
                state.movies = action.payload;
            })
            .addCase(loadMovie.fulfilled, (state, action: PayloadAction<IMovieDetails>) => {
                state.movie = action.payload;
            })
            .addMatcher(isPending(loadMovies, loadMovie), (state) => {
                state.loadState = "loading";
                state.error = null;
                state.movie = null;
            })
            .addMatcher(isFulfilled(loadMovies, loadMovie), (state) => {
                state.loadState = "succeed";
            })
            .addMatcher(isRejected(loadMovies, loadMovie), (state, action) => {
                state.loadState = "failed";
                state.error = action.payload as string || "Error";
            });
    }
});

export const movieSliceActions = {...movieSlice.actions, loadMovies, loadMovie};