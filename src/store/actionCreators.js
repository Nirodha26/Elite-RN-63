export const setMovies = (payload) => ({
    type: 'SET_MOVIES',
    payload
  });

export const setLoading = (isLoading) => ({
    type: 'SET_LOADING',
    isLoading
  });

// Write a function that has `dispatch` and `getState` as arguments
export const fetchMovies = () => {
  return dispatch => {

  dispatch(setLoading(true))
  // Make an async HTTP request
  fetch('http://localhost:3000/movies')
  .then(response => response.json())
  .then(data => {
    // Dispatch an action to set movies
    dispatch(setMovies(data))
    dispatch(setLoading(false))
  });
  }
}