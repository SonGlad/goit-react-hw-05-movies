import {Routes, Route } from "react-router-dom";
import  SharedLayout  from "./SharedLayout/SharedLayout";
import HomePage from "pages/HomePage/HomePage";
import MoviePage from "pages/MoviePage/MoviePage";
import MovieDetaisPage from "pages/MovieDetailsPage/MovieDetails";

// import { lazy } from "react";


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/movies" element={<MoviePage/>}/>
        <Route path="movies/:moviesID" element={<MovieDetaisPage/>}/>


      </Route>
    </Routes>
  );
};
