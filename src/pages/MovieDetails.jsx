import { useState, useEffect, Suspense } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { fetchMovieById } from 'api/FetchMovies';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(movieId).then(({ data }) => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      <button
        onClick={() => {
          navigate(location?.state?.from ?? '/');
        }}
      >
        Go back
      </button>
      {movie && <MovieCard data={movie} />}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link state={location.state} to={`/movies/${movieId}/cast`}>
              Cast
            </Link>
          </li>
          <li>
            <Link state={location.state} to={`/movies/${movieId}/reviews`}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
