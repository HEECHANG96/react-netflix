import React from 'react';
import { Badge } from 'react-bootstrap';

const Detail = ({ detail }) => {
  return (
    <div className='Detail'>
      <div>
            {detail.genres.map((it) => (
                <Badge bg="danger" className='Badge'>
                  {it.name}
                </Badge>
            ))}
        </div>
        <div className='title'>
          <h1>{detail.title}</h1>
          <h4>{detail.tagline}</h4>
        </div>
        <div>
          {detail.vote_average}
        </div>    
    </div>
  )
}

export default Detail;
