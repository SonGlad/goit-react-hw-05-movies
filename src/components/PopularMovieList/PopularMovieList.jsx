import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { FilmName, MovePreview, HomePageSection } from './PopularMovieList.styled';
import NoPoster from '../../Images/no-poster.jpg';



const PopularMoviesList = ({trendFilms}) => {
    const [arrayList, setArrayList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const promises = trendFilms.map(item => {
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
    
        setArrayList(trendFilms);
      }, [trendFilms]);
    
      const createMovieDetailsURL = movieID => {
        return `/movies/${movieID}`;
      };



    return(
        loaded && (<HomePageSection>
            {arrayList.map(item => (
            <Link
                style={{ textDecoration: 'none', color: 'black' }}
                to={createMovieDetailsURL(item.id)}
                state={{
                from: location,
                }}
                key={item.id}
            >
            <MovePreview>
                <img
                    width={70}
                    src={
                    item.poster_path
                        ? `https://image.tmdb.org/t/p/original/${item.poster_path}`
                        : NoPoster
                    }
                    alt=""
                    onError={e => {
                      e.target.src = NoPoster;
                    }}
                />
                <FilmName>{item.title}</FilmName>
            </MovePreview>
            </Link>
            ))}
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
    ).isRequired,
};