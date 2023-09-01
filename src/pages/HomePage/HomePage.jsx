import { useEffect, useState, useCallback } from "react";
import { getPopularMovies } from "API/API";
import PopularMoviesList from "components/PopularMovieList/PopularMovieList";



const HomePage = () => {
    const [popular, setPopular] = useState([]);


    const fetchMovies = useCallback(async () => {
        try{    
            const data = await getPopularMovies();
            setPopular(data.results);
        }
        catch(error){
            console.log(error.message);
        }
    },[]);


    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);



    return(
        <>
        <PopularMoviesList trendFilms={popular} />
        </>
    );
};


export default HomePage;


