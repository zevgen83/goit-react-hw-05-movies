import PropTypes from 'prop-types';
import { Container, Poster } from './MovieCard.styled';

export const MovieCard = ({ data }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = data;

  const movieYear = () => new Date(release_date).getFullYear();
  const userScore = Math.trunc(vote_average * 10);
  const genresName = genres.map(genre => genre.name).join(' ');

  return (
    <Container>
      <Poster
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt={original_title}
      />
      <div>
        <h2>
          {original_title} ({movieYear()})
        </h2>
        <p>User score: {userScore}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <p>{genresName}</p>
      </div>
    </Container>
  );
};

MovieCard.propTypes = {
  data: PropTypes.object.isRequired,
};
