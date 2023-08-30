import { useEffect, useState, useCallback } from "react";
import { getPopularMovies } from "API/API";
import PopularMoviesList from "components/PopularMovieList/PopularMovieList";



const HomePage = () => {
    const [popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(false);


    const fetchMovies = useCallback(async () => {
        try{    
            setLoading(true);
            const data = await getPopularMovies();
            setPopular(data.results);
        }
        catch(error){
            console.log(error.message);
        }
        finally{
            // setLoading(false);
        }
    
    },[]);


    useEffect(() => {
        fetchMovies();
    }, [fetchMovies]);



    return(
        <>
            {loading ? 
            <PopularMoviesList trendFilms={popular} /> : 
            <div></div>}
        </>
    );
};


export default HomePage;


