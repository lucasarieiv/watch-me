import { useState } from 'react';
import { Button } from './Button';
import GenreResponseProps from './GenreResponseProps';
import '../styles/sidebar.scss';


interface SideBarProps {
  genres: GenreResponseProps[];
  setSelectedGenreId: any;
}

export function SideBar(props: SideBarProps) {
  const [selectedGenreId, setSelectedGenreId] = useState<number>(1);
  function handleClickButton(id: number) {
    props.setSelectedGenreId(id);
    setSelectedGenreId(id)
  }
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}