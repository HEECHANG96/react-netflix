let initialState = {
    movieDetail: {},
    loading: true,
};

function detailReducer(state = initialState, action) {
    let { type, payload } = action;
    switch(type) {
        case "GET_MOVIES_DETAIL_REQUEST":
            return { 
                ...state, 
                loading: true 
            };
        case "GET_MOVIES_DETAIL_SUCCESS":
                return { 
                ...state, 
                movieDetail: payload.movieDetail,
                loading:false,
            };
        case "GET_MOVIES_DETAIL_FAILURE":
            return {
                ...state,
                loading: false,
            }       
        default:
            return { ...state };
    }
};

export default detailReducer;