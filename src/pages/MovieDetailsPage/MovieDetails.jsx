import { useState, useEffect, useCallback} from 'react';
import { Suspense } from 'react';
import { useParams, Link, Outlet, useLocation} from 'react-router-dom';
import { getMoviesDetailsById } from '../../API/API';
import { MovieDetailsStyled } from './MovieDetails.styled';
import NoPoster from '../../Images/no-poster.jpg';



const MovieDetailsPage = () => {
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';
  const [moviesInfo, setMoviesInfo] = useState({});
  const { moviesID } = useParams();


  const fetchMoviesDetails = useCallback(async () => {
    try {
      const data = await getMoviesDetailsById(moviesID);
      setMoviesInfo(data);
    } catch (error) {
      console.log(error.message);
    } 
  }, [moviesID]);


  useEffect(() => {
    fetchMoviesDetails();
  }, [fetchMoviesDetails]);


  const date = new Date(moviesInfo.release_date);
  const year = date.getFullYear();
  const score = Math.round(moviesInfo.vote_average * 10);
  const overview = moviesInfo.overview;
  const genres = moviesInfo.genres;



  return (
    <>
      <MovieDetailsStyled>
        <Link className='back-link' to={backLink}>Go back</Link>
        <div className='main-content'>
          <img className='main-img' width={170}
            src={moviesInfo.poster_path
              ? `https://image.tmdb.org/t/p/original/${moviesInfo.poster_path}`
              : NoPoster}
            alt={moviesInfo.title}
          />
          <div className='main-decr'>
            <div>
              <h2 className='card-title'>{moviesInfo.title} ({year})</h2>
              <p className='card-score'>User score {score} %</p>
              <h3 className='card-overview'>Overview:</h3>
              <p className='text-overview'>{overview}</p>
              <h3 className='genres-title'>Genres:</h3>
              {genres &&
              genres.map(genre => 
              <span key={genre.id}> {genre.name},</span>)}
            </div>
            <div>
              <h3 className='information-title'>Additional Information</h3>
              <ul>
                <li>
                  <Link className='info-link'
                    to="cast"
                    state={{from: location.state.from}}
                    >Casts
                  </Link>
                </li>
                <li>
                  <Link className='info-link last-link'
                    to="review"
                    state={{from: location.state.from}}
                    >Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MovieDetailsStyled>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet/> 
      </Suspense>
    </>
  )
};


export default MovieDetailsPage;


// import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
// import React from 'react';
// import { useEffect, useState } from 'react';
// import { getMoviesDetailsById } from '../../API/API';

// const MovieDetaisPage = () => {
//   const location = useLocation();
//   const cameBack = location?.state?.from ?? '/'
  
//   const { moviesID } = useParams();
  

//   const [movie, setMovies] = useState([] ?? null);
//   console.log(movie);
//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await getMoviesDetailsById(moviesID);
//       console.log(res.results);
//       setMovies(res);
      
//     };
   
    
//     fetchData().catch(() => {
      
//     })
//   }, [moviesID]);
//   const score = Math.round(movie?.vote_average * 10);

//   // if (movie === null) {
//   //   return 
//   // }
//   return (
//     <>
//     <Link to={cameBack}>Back</Link>
//       <div className=''>
//         <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" width='300px'/>
//         <div className=''>
//           <h1>{movie?.original_title}</h1>
//           <p>{`User score ${score}%`}</p>
//           <p>{movie?.overview}</p>

//           <ul>
//             <span>Genres: </span>
//             {movie && movie.genres && movie.genres.map(genre => {
//               return <li key={genre.id} className=''>{genre.name}</li>
//             })}
//           </ul>
//         </div>
//       </div>

      
//       <ul className=''>
//         <li className=''>
          
//           <Link to="cast" className='' state={{from: cameBack}}>Cast</Link>
//         </li>
//         <li className=''>
//           <Link to="review" className='' state={{from: cameBack}}>Reviews</Link>
//         </li>
//       </ul>
//       <Outlet />
//     </>
//   );
// };

// export default MovieDetaisPage;