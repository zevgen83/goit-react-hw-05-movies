import { fetchMovieCast } from 'api/FetchMovies';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastList, CastPhoto, CastItem } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castMovie, setCastMovie] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(({ data: { cast } }) => setCastMovie(cast));
  }, [movieId]);

  return (
    <CastList>
      {castMovie &&
        castMovie.map(({ credit_id, profile_path, name }) => {
          return (
            <CastItem key={credit_id}>
              <CastPhoto
                src={`https://image.tmdb.org/t/p/original${profile_path}`}
                alt="name"
              />
              <p>{name}</p>
            </CastItem>
          );
        })}
    </CastList>
  );
};

export default Cast;
