import propTypes from "prop-types";

export const FilmListItem = ({ title, img, id, onDeleteFilm, watched, onWatchedFilm }) => {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500${img}`} alt="poster" />
      <h2>{title}</h2>
      <button type="button" onClick={() => onDeleteFilm(id)}>
        Delete
      </button>
          <span onClick={() => onWatchedFilm(id)}>watched: {watched+''}</span>
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
