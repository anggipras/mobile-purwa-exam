import React from 'react';
import 'react-native-gesture-handler'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducers from './src/redux/reducers'
import AppMain from './AppMain'

const App = () => {
  const store = createStore(Reducers)
  return (
    <>
      <Provider store={store}>
        <AppMain />
      </Provider>
    </>
  );
};

export default App;
