import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from '../../API/API';
import { ReviesContainer } from './Revies.styled';



const Revies = () => {
  const [reviesInfo, setReviewsInfo] = useState([]);
  const { moviesID } = useParams();


    const fetchMoviesReviews = useCallback(async () => {
        try {
            const data = await getMoviesReviews(moviesID);
            setReviewsInfo(data);
        } catch (error) {
            console.log(error.message);
        }
    }, [moviesID]);


    useEffect(() => {
        fetchMoviesReviews();
    }, [fetchMoviesReviews]);



    return (
        <ReviesContainer>
            <ul className='revies-list'>
                {reviesInfo.length === 0 ? (
                <p>There are no reviews.</p>
                ) : (
                reviesInfo.map(reviesInfo => (
                    <li className='revies-item' key={reviesInfo.id}>
                        <h3 className='revies-title'>Author: {reviesInfo.author}</h3>
                        <p className='revies-text'>{reviesInfo.content}</p>
                    </li>
                ))
                )}
            </ul>
        </ReviesContainer>
    );
};



export default Revies;