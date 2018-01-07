import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { View } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {



  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCksTQBQkgUtlKQQaHh8Z9epiD7OlUMBS8",
      authDomain: "manager-6715e.firebaseapp.com",
      databaseURL: "https://manager-6715e.firebaseio.com",
      projectId: "manager-6715e",
      storageBucket: "manager-6715e.appspot.com",
      messagingSenderId: "1008723154637"
    };
    firebase.initializeApp(config);
  }
  render() {
    console.ignoredYellowBox = ['Setting a timer'];
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    )
  }
}

export default App;