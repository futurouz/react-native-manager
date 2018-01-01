import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Text, View} from 'react-native';
import {createStore} from 'redux';
import reducers from './src/reducers'
import firebase from 'firebase';

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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!!
          </Text>
        </View>
      </Provider>
    )
  }
};

export default App
