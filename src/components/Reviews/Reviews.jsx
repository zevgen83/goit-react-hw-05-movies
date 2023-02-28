import { fetchMovieReviews } from 'api/FetchMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import {  } from './Cast.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsMovie, setReviewsMovie] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(({ data: { results, total_results } }) => {
      setReviewsMovie(results);
    });
  }, [movieId]);

  if (!reviewsMovie.length)
    return <p>We don't have any reviews of this movie</p>;

  return (
    <ul>
      {reviewsMovie &&
        reviewsMovie.map(({ id, author, content }) => {
          return (
            <li key={id}>
              <h3>Autor: {author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Reviews;
