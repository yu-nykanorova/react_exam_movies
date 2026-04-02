import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {MoviesPage} from "../pages/MoviesPage.tsx";
import {MovieDetailsPage} from "../pages/MovieDetailsPage.tsx";
import {FavoritesPage} from "../pages/FavoritesPage.tsx";
import {ComingSoonPage} from "../pages/ComingSoonPage.tsx";
import {SettingsPage} from "../pages/SettingsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {index: true, element: <MoviesPage/>},
            {path: "movie/:id", element: <MovieDetailsPage/>},
            {path: "favorites", element: <FavoritesPage/>},
            {path: "upcoming", element: <ComingSoonPage/>},
            {path: "settings", element: <SettingsPage/>},
        ]
    }
]);