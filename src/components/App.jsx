import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PAGE_NAMES } from 'router/paths';
import { MainLayouts } from 'Layouts/MainLayout';

const Home = lazy(() => import('../pages/Home'));
const SearchMovies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const NotFound = lazy(() => import('pages/NotFound'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export function App() {
  return (
    <>
      <Routes>
        <Route path={PAGE_NAMES.homepage} element={<MainLayouts />}>
          <Route index element={<Home />} />
          <Route path={PAGE_NAMES.movies} element={<SearchMovies />} />
          <Route path={PAGE_NAMES.movieId} element={<MovieDetails />}>
            <Route path={PAGE_NAMES.movieCast} element={<Cast />} />
            <Route path={PAGE_NAMES.movieReviews} element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
