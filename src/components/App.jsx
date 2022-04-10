import data from '../data.json';
import mapper from '../utils/mapper';
import { FilmList } from './FilmList/FilmList';
import { Button } from './Button/Button';

import react, { Component } from 'react';


class App extends Component {
  state = {
    films: mapper(data),
    isVisible: false,
  };

  toggleVisibility = () => {
    this.setState(({ isVisible }) => ({ isVisible: !isVisible }));
  };
  deleteFilm = deleteId => {
    this.setState(prevState => ({
      films: prevState.films.filter(({ id }) => deleteId !== id),
    }));
  };
  toggleWatchedFilm = currentId => {
    this.setState(prevState => ({
      films: prevState.films.map(film => {
        if (currentId === film.id) {
          return {...film, watched:!film.watched}
        }
        // console.log(film);
        return film
      }),
    }))
      console.log(this.state.films);;
  };

  render() {
    const { isVisible, films } = this.state;
    return (
      <>
        <h1>Filmoteka</h1>
        <Button
          toggleVisibility={this.toggleVisibility}
          isVisible={isVisible}
        />
        {isVisible && (
          <FilmList
            films={films}
            onDeleteFilm={this.deleteFilm}
            onWatchedFilm={this.toggleWatchedFilm}
          />
        )}
      </>
    );
  }
}

export default App;
