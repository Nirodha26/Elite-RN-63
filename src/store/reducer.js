

const initialState = {
      movies: [],
      isLoading: false
  }
function moviesReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_MOVIES':
        return {
          ...state,
          movies: action.payload,
        };

      case 'SET_LOADING':
          return {
            ...state,
            isLoading: action.isLoading,
          };
  
      default:
        return state;
    }
  }


  export default moviesReducer;