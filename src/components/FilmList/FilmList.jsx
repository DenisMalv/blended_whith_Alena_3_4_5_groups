import { FilmListItem } from './FilmListItem';
import propTypes from 'prop-types';
import { shape } from 'prop-types';

export const FilmList = ({ films, onDeleteFilm, onWatchedFilm }) => {
  return (
    <ul>
      {films.map(({ id, title, img, watched }) => (
        <li key={id}>
          <FilmListItem
            id={id}
            title={title}
            img={img}
            onDeleteFilm={onDeleteFilm}
            watched={watched}
            onWatchedFilm={onWatchedFilm}
          />
        </li>
      ))}
    </ul>
  );
};

FilmList.propTypes = {
  films: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      img: propTypes.string.isRequired,
      watched: propTypes.bool.isRequired,
    }).isRequired
    ).isRequired,
    onDeleteFilm: propTypes.func.isRequired,
    onWatchedFilm:propTypes.func.isRequired,
};
