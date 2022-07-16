import { MovieCard } from './MovieCard';
import {MovieProps} from "../models/MovieProps";
import {GenreResponseProps} from "../models/GenreResponseProps";
import '../styles/content.scss';
import { useEffect, useState } from 'react';
import { api } from '../services/api';


interface ContentProps {
  selectedGenreId: number;
  selectedGenre: GenreResponseProps;
}

export function Content({selectedGenreId, selectedGenre}: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });
  }, [selectedGenreId]);


  return (
    <div className="container">
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>

    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )
}