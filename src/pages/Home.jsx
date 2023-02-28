import { fetchTopMovies } from 'api/FetchMovies';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState, Suspense } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetchTopMovies().then(({ data: { results } }) => {
      setTopMovies(results);
    });
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        <Suspense fallback={<Loader />}>
          {topMovies.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{original_title}</Link>
            </li>
          ))}
        </Suspense>
      </ul>
    </div>
  );
};

export default Home;
