import api from "../api";

const API_KEY=process.env.REACT_APP_API_KEY;

function getMoviesDetail ({id}) {
    return async(dispatch) => {
        try {
            dispatch({ type:"GET_MOVIES_DETAIL_REQUEST", payload:{id} });
            const movieDetailApi = api.get(
                `/movie/${id}?api_key=${API_KEY}&language=en-US`
            );
            let [movieDetail] = await Promise.all([
                movieDetailApi,
            ]);
            console.log("movie detail", movieDetail);
            dispatch({
                type:"GET_MOVIES_DETAIL_SUCCESS",
                payload: {
                    movieDetail: movieDetail.data,
                }
            });
        } catch (err) {
            dispatch({ type:"GET_MOVIES_DETAIL_FAILURE" })
        }
    }
};

function getMovies() {
    return async(dispatch) => {
        try {
            dispatch({ type:"GET_MOVIES_REQUEST" });
            const popularMovieApi = api.get(
                `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
            );
    
            const topRatedApi = api.get(
                `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
            );
    
            const upComingApi = api.get(
                `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
            );
            const genreApi = api.get(
                `/genre/movie/list?api_key=${API_KEY}&language=en-US`
            );

            // 각각의 api를 동시에 진행시키고 3개의 데이터가 다 올때까지만 기다리는 것
            let [popularMovies, topRatedMovies, upcomingMovies, genreList] = await Promise.all([
                popularMovieApi, 
                topRatedApi, 
                upComingApi,
                genreApi,
            ]);
            console.log("genreList?", genreList);
            dispatch({
                type: "GET_MOVIES_SUCCESS",
                payload: { 
                    popularMovies: popularMovies.data, 
                    topRatedMovies: topRatedMovies.data, 
                    upcomingMovies: upcomingMovies.data, 
                    genreList: genreList.data.genres,
                }
            });  
        } catch(err) {
            // 에러 핸들링 하는 곳
            dispatch({ type:"GET_MOVIES_FAILURE" })
        }
    }   
};

export const movieAction = {
    getMovies,
    getMoviesDetail,
};