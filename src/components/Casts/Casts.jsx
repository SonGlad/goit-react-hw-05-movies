import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from '../../API/API';
import NoPhoto from '../../Images/no-photo.png';
import { CastList } from './Casts.styled';

const Casts = () => {
  const [moviesCast, setMoviesCast] = useState([]);
  const { moviesID } = useParams();


   const fetchMoviesCast = useCallback(async () => {
    try {
      const data = await getMoviesCast(moviesID);
      setMoviesCast(data);
    } catch (error) {
      console.log(error.message);
    } 
  }, [moviesID]);


  useEffect(() => {
    fetchMoviesCast();
  }, [fetchMoviesCast]);



  return (
    <CastList>
      <ul className='cast-list'>
        {moviesCast.length === 0 ? (
          <p>There are no cast.</p>
        ) : (
          moviesCast.map(moviesCast => (
            <li className='cast-card' key={moviesCast.id}>
              <img className='cast-photo'
                  width={170}
                  src={
                  moviesCast.profile_path
                      ? `https://image.tmdb.org/t/p/original/${moviesCast.profile_path}`
                      : NoPhoto
                  }
                  alt="Actor"
              />
              <p>Name:{moviesCast.original_name}</p>
              <p>Character: {moviesCast.character}</p>
            </li>
          ))
        )}
      </ul>
    </CastList>
  );
};


export default Casts;