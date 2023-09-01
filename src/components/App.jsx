import {Routes, Route } from "react-router-dom";
import { SharedLayout }  from "./SharedLayout/SharedLayout";
import { lazy } from "react";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviePage = lazy(() => import('../pages/MoviePage/MoviePage'));
const MovieDetaisPage = lazy(() => import ('../pages/MovieDetailsPage/MovieDetails'));
const Casts = lazy(() => import('./Casts/Casts'));
const Revies = lazy(() => import('./Revies/Revies'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/movies" element={<MoviePage/>}/>
        <Route path="movies/:moviesID" element={<MovieDetaisPage/>}>
          <Route path="cast" element={<Casts />} />
          <Route path="review" element={<Revies />} />
        </Route>
      </Route>
    </Routes>
  );
};
