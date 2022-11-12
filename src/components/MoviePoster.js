import React from 'react';
import { useSelector } from 'react-redux';
import { Badge } from 'react-bootstrap';


const MoviePoster = ({ detail }) => {
  console.log("Movie Poster ", detail);
 
  return (
    <div className=''>
      <section
      className='poster'
      style={{
        backgroundImage: 
            "url(" + 
            `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${detail.poster_path}` +
            ")",
            height:500,
            display:'flex',
            justifyContent:'center',

      }}
      >

      </section>

    <section>
    <div>
            {detail.genres[0].name}
            {detail.genres[1].name}
            {detail.genres[2].name}
          </div>
          <h1>{detail.original_title}</h1>
          <h4>{detail.vote_average}</h4>
          <h4>{detail.overview}</h4>
          
          <div>
            {detail.budget}
            {detail.release_date}
          </div>

    </section>
          
    </div>
  )
}

export default MoviePoster;
