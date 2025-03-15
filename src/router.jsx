import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "@/App";
import Home from "@/Pages/Home";
import Ongoing from "@/Pages/home/Ongoing";
import Batch from "@/Pages/home/Batch";
import Detail from "@/Pages/Detail";
import Movie from "@/Pages/movie/Movie";
import Genre from "@/Pages/Genre";
import Search from "@/Pages/Search";
import NotFound from "@/Pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Navigate to="/otakudesu/home" /> },
      { path: "/otakudesu/*", element: <Navigate to="/otakudesu/home" /> },
      { path: "/Animememx/home/*", element: <Home /> },
      { path: "/Animememx/genre/*", element: <Genre /> },
      { path: "/Animememx/genre/:genre/:page/*", element: <Genre /> },

      { path: "/Animememx/ongoing-all/*", element: <Ongoing /> },
      { path: "/Animememx/ongoing-all/:page/*", element: <Ongoing /> },

      { path: "/Animememx/batch-all/*", element: <Batch /> },
      { path: "/Animememx/batch-all/:page/*", element: <Batch /> },

      { path: "/Animememx/movie-all/*", element: <Movie /> },
      { path: "/Animememx/movie-all/:page/*", element: <Movie /> },
      { path: "/Animememx/detail/:title/:episode/*", element: <Detail /> },

      { path: "/Animememx/search/:query/*", element: <Search /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
