import {MoviesList} from "../components/movies/MoviesList.tsx";
import {MainPoster} from "../components/movies/MainPoster.tsx";
import {useAppDispatch} from "../store/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../store/hooks/useAppSelector.tsx";
import {useEffect, useMemo} from "react";
import {movieSliceActions} from "../store/slices/movieSlice.ts";
import {genreSliceActions} from "../store/slices/genreSlice.ts";
import {GenresList} from "../components/genres/GenresList.tsx";
import {Pagination} from "../components/pagination/Pagination.tsx";
import {useSearchParams} from "react-router-dom";

export const MoviesPage = () => {
    const dispatch = useAppDispatch();
    const {genres, loading: loadingGenres, error: errorGenres} = useAppSelector(({genreSlice}) => genreSlice);
    const {movies, totalPages, moviesListLoading: loadingMovies, error: errorMovies} = useAppSelector(({movieSlice}) => movieSlice);
    const [searchParams] = useSearchParams();

    const currentPage = Number(searchParams.get("page") || "1");

    const selectedGenres = useMemo(() => {
        const paramGenres = searchParams.get("genres");
        return paramGenres ? paramGenres.split(",").map(Number) : [];
    }, [searchParams]);

    useEffect(() => {
        dispatch(genreSliceActions.loadGenres());
    }, [dispatch]);

    useEffect(() => {
        dispatch(movieSliceActions.loadMovies({page: Number(currentPage), genresIds: selectedGenres}));
    }, [currentPage, selectedGenres, dispatch]);

    const mainMovie = movies.length
        ? [...movies].sort((a, b) => b.vote_average - a.vote_average)[0]
        : null;

    return (
        <>
            {!loadingMovies && !errorMovies && <MainPoster movie={mainMovie}/>}
            {loadingGenres && <p className="loading">Loading genres list...</p>}
            {errorGenres && <p className="error">{errorGenres}</p>}
            {!loadingGenres && !errorGenres && <GenresList genres={genres}/>}
            {loadingMovies && <p className="loading">Loading movies list...</p>}
            {errorMovies && <p className="error">{errorMovies}</p>}
            {!loadingMovies && !errorMovies && <MoviesList movies={movies}/>}
            <Pagination totalPages={totalPages}/>
        </>
    );
};
