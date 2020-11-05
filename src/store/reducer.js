

const initialState = {
      movies: []
  }
function moviesReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_MOVIES':
        return {
          ...state,
          movies: action.payload,
        };
  
      default:
        return state;
    }
  }


  export default moviesReducer;