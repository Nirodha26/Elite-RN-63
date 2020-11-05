import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import Movies from './src/screens/Movies'

const App = ()  => {
  return (
    <Provider store={store}>
      <Movies/>
    </Provider>
  );
}

export default App;
