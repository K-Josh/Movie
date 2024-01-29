import { createBrowserRouter } from "react-router-dom";
import TvSeries from "./tv-series";
import Home from "./home";
import Movies from "./movies";
import Error from "./error";
import Bookmark from "./bookmark";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
    },
    {
        path: '/movies',
        element: <Movies />,
        errorElement: <Error />,
    },
    {
        path: '/tv-series',
        element: <TvSeries />,
        errorElement: <Error />,
    },
    {
        path: '/bookmark',
        element: <Bookmark />,
        errorElement: <Error />,
    },
]);