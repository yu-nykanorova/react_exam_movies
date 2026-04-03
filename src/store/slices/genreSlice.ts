import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IGenre} from "../../models/genre/IGenre.ts";
import {moviesService} from "../../services/getMovies.service.ts";
import {getError} from "../../helpers/getError.ts";

type GenreSliceType = {
    genres: IGenre[];
    loading: boolean;
    error: string | null;
}

const initialState: GenreSliceType = {genres: [], loading: false, error: null};

const loadGenres = createAsyncThunk(
    "genreSlice/loadGenres",
    async (_, thunkAPI) => {
        try {
            const genres = await moviesService.getGenres();
            return thunkAPI.fulfillWithValue(genres);
        } catch (error) {
            return thunkAPI.rejectWithValue(getError(error));
        }
    }
);

export const genreSlice = createSlice({
    name: "genreSlice",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadGenres.fulfilled, (state, action: PayloadAction<IGenre[]>) => {
                state.genres = action.payload;
                state.loading = false;
            })
            .addCase(loadGenres.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loadGenres.rejected, (state, action) => {
                state.loading = false;
                state.error = (action.payload as string) ?? "Error";
            })
    }
});

export const genreSliceActions = {
    ...genreSlice.actions,
    loadGenres,
};