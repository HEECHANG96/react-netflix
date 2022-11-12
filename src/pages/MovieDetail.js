import React, { useEffect } from 'react';
import MoviePoster from "../components/MoviePoster";
import { useDispatch, useSelector } from 'react-redux';
import { movieAction } from '../redux/actions/movieAction';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const { movieDetail } = useSelector((state) => state.detail);
  console.log("movie detail", movieDetail);

  useEffect(() => {
    dispatch(movieAction.getMoviesDetail({ id }));
   }, []);
  
  return (
    <div>
      <MoviePoster detail={movieDetail} />
    </div>
  )
}

export default MovieDetail;
