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
import {ErrorComponent} from "../components/ui/ErrorComponent.tsx";
import {Loader} from "../components/ui/Loader.tsx";

export const MoviesPage = () => {
    const dispatch = useAppDispatch();

    const {genres, loading: loadingGenres, error: errorGenres} = useAppSelector(({genreSlice}) => genreSlice);
    const {movies, searchedMovies, totalPages, moviesListLoading: loadingMovies, error: errorMovies} = useAppSelector(({movieSlice}) => movieSlice);

    const [searchParams] = useSearchParams();

    const currentPage = Number(searchParams.get("page") || "1");
    const searchQuery = searchParams.get("searchQuery") || "";

    const selectedGenres = useMemo(() => {
        const paramGenres = searchParams.get("genres");
        return paramGenres ? paramGenres.split(",").map(Number) : [];
    }, [searchParams]);

    useEffect(() => {
        dispatch(genreSliceActions.loadGenres());
    }, [dispatch]);

    useEffect(() => {
        if (searchQuery) {
            dispatch(movieSliceActions.loadSearchedMovies({query: searchQuery, page: currentPage}));
        } else {
            dispatch(movieSliceActions.loadMovies({page: Number(currentPage), genresIds: selectedGenres}));
        }

    }, [currentPage, selectedGenres, searchQuery, dispatch]);

    const moviesToShow = searchQuery ? searchedMovies : movies;

    const mainMovie = moviesToShow.length
        ? [...moviesToShow].sort((a, b) => b.vote_average - a.vote_average)[0]
        : null;

    if (errorMovies) {
        return <ErrorComponent message={errorMovies}/>
    }

    if (!loadingMovies && searchQuery && !searchedMovies.length) {
        return <ErrorComponent message={"No results matching your query"}/>
    }

    return (
        <>
            {
                !loadingMovies && <MainPoster movie={mainMovie}/>
            }
            {
                loadingGenres && <Loader/>
            }
            {
                errorGenres && <ErrorComponent message={errorGenres}/>
            }
            {
                !loadingGenres && !errorGenres && <GenresList genres={genres} selected={selectedGenres}/>
            }
            {
                loadingMovies
                    ? <Loader/>
                    : <MoviesList movies={moviesToShow}/>
            }
            {
                !loadingMovies &&
                <Pagination totalPages={totalPages}/>
            }
        </>
    );
};
