import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchedMovies } from 'API/API';
import { Searchbar } from 'components/SearchBar/SearchBar';
import PopularMoviesList from 'components/PopularMovieList/PopularMovieList';



const MoviePage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

  
    const query = searchParams.get('query');


    const handleSubmit = query => {
        setSearchParams({ query: query });
        setSearchResults([]);
    };

    
    const fetchSearchedMovies = useCallback(async query => {
        try {
        setLoading(true);
        const data = await getSearchedMovies(query);
        setSearchResults(data.results);
      } 
      catch (error) {
        console.log(error.message);
      } 
      finally {
          setLoading(false);
        }
    }, []);
    
    
    useEffect(() => {
        if (!searchResults.length) {
          setLoading(false);
        }
    }, [searchResults]);
    
  
    useEffect(() => {
        if (!query) {
            return;
        }
        fetchSearchedMovies(query);
    }, [query, fetchSearchedMovies]);



    return (
        <>
            <Searchbar onSubmit={handleSubmit}/>
            {loading && (<div>Loading data...</div>)}
            <PopularMoviesList searchResults={searchResults}/>
        </>
    );
};



export default MoviePage;