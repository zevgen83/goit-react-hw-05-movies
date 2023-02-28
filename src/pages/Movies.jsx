import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from 'api/FetchMovies';
import { Loader } from 'components/Loader/Loader';

const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (movieName === '' || movieName === null) return;

    fetchMoviesByName(movieName).then(({ data: { results } }) => {
      setMovies(results);
    });
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (form.elements.query.value)
      setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="query" />
        <button>Search</button>
      </form>
      <ul>
        <Suspense fallback={<Loader />}>
          {movies &&
            movies.map(({ id, original_title }) => {
              return (
                <li key={id}>
                  <Link state={{ from: location }} to={`/movies/${id}`}>
                    {original_title}
                  </Link>
                </li>
              );
            })}
        </Suspense>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SearchMovies;
