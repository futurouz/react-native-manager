import React, {Component} from 'react';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import {createStore, applyMiddleware} from 'redux';
import reducers from './src/reducers'
import LoginForm from './src/components/LoginForm'

class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: 'AIzaSyCksTQBQkgUtlKQQaHh8Z9epiD7OlUMBS8',
      authDomain: 'manager-6715e.firebaseapp.com',
      databaseURL: 'https://manager-6715e.firebaseio.com',
      projectId: 'manager-6715e',
      storageBucket: '',
      messagingSenderId: '1008723154637'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm/>
      </Provider>
    )
  }
};

export default App
