import React from 'react';

const MoviePoster = ({ detail }) => {
  console.log("Movie Poster ", detail);
 
  return (
    <div className='MoviePoster'>
      <div
      className='poster'
      style={{
        backgroundImage: 
            "url(" + 
            `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detail.poster_path}` +
            ")",
            height:500,
            width:300,
            backgroundRepeat:'no-repeat',
      }}
      >
      </div>
    </div>
  )
}

export default MoviePoster;
