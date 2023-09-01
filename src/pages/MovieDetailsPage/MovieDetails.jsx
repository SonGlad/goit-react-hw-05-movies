import { useState, useEffect, useCallback} from 'react';
import { Suspense } from 'react';
import { useParams, Link, Outlet, useLocation} from 'react-router-dom';
import { getMoviesDetailsById } from '../../API/API';
import { MovieDetailsStyled } from './MovieDetails.styled';
import NoPoster from '../../Images/no-poster.jpg';



const MovieDetailsPage = () => {
  const location = useLocation();
  const [moviesInfo, setMoviesInfo] = useState({});
  const { moviesID } = useParams();
  const backLink = location?.state?.from ?? '/';


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
                    state={{from: backLink}}
                    >Casts
                  </Link>
                </li>
                <li>
                  <Link className='info-link last-link'
                    to="review"
                    state={{from: backLink}}
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
