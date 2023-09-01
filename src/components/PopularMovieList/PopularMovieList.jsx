import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { HomePageSection } from './PopularMovieList.styled';
import NoPoster from '../../Images/no-poster.jpg';



const PopularMoviesList = ({ trendFilms, searchResults, showTitle }) => {
  const location = useLocation();
  const [arrayList, setArrayList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const isHomePage = location.pathname === "/";


  useEffect(() => {
    const films = trendFilms || searchResults;

    if (!films) {
      return;
    }


    const promises = films.map(item => {
      if (!item.poster_path) {
        return Promise.resolve();
      }

      return new Promise(resolve => {
        const img = new Image();
        img.src = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });
    });


    Promise.all(promises)
      .then(() => {
        setLoaded(true);
      })
      .catch(() => {
        console.log('Error loading images');
      });
      setArrayList(films);
  }, [trendFilms, searchResults]);


  const createMovieDetailsURL = movieID => {
    return `/movies/${movieID}`;
  };



  return (
    loaded && (
      <HomePageSection>
         {isHomePage && <h1 className='hero-section-title'>Trending Movies</h1>}
        <ul className='movie-list'>
          {arrayList.map(item => (
            <li className='movie-item' key={item.id}>
              <div className='movie-preview'>
                <Link
                  style={{ textDecoration: 'none', color: 'black' }}
                  to={createMovieDetailsURL(item.id)}
                  state={{ from: location }}
                >
                  <img
                    className='movie-img'
                    width={210}
                    height={315}
                    loading='lazy'
                    src={
                      item.poster_path
                        ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                        : NoPoster
                    }
                    alt={item.title}
                    onError={error => {
                      error.target.src = NoPoster;
                    }}
                  />
                </Link>
                <p className='film-name'>{item.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </HomePageSection>
    )
  );
};


export default PopularMoviesList;



PopularMoviesList.propTypes = {
  trendFilms: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ),
};
