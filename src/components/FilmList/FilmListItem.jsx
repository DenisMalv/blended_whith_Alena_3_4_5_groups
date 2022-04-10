import propTypes from "prop-types";
import css from './FilmList.module.css'

export const FilmListItem = ({ title, img, id, onDeleteFilm, watched, onWatchedFilm }) => {
  return (
    <>
      <img className={ css.image } src={`https://image.tmdb.org/t/p/w500${img}`} alt="poster" />
      <h2 className={ css.title }>{title}</h2>
      <button className={ css.button } type="button" onClick={() => onDeleteFilm(id)}>
        Delete
      </button>
      <span className={ css.watchedText } onClick={() => onWatchedFilm(id)}>watched: {watched+''}</span>
    </>
  );
};

FilmListItem.propTypes = {
    id:propTypes.number.isRequired,
    title:propTypes.string.isRequired,
    img:propTypes.string.isRequired,
    watched:propTypes.bool.isRequired,
    onDeleteFilm:propTypes.func.isRequired,
    onWatchedFilm:propTypes.func.isRequired,
}
