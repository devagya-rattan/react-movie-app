import React from 'react';
import { useGlobalContext } from './Context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const {movie} = useGlobalContext();
  return (
    <div>
    <section className='movie-page'>
      <div className='container grid grid-4-col'>
      {movie.map((curmov) =>{
        const {imdbID,Title,Poster} = curmov;
        return(
          <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className='card'>
                <div className='card-info'>
                    <h2>{Title}</h2>
                    <img src={Poster} alt='poster'/>
                </div>
              </div>
          </NavLink>
        )
      })}
      </div>
    </section>
     
    </div>
  );
}

export default Movies;
