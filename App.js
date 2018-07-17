import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import store from './app/config/reduxStore';
import Application from './app/index';
import { UNIQUE_KEY } from './app/assets/constants';
import firebaseConfig from './app/config/firebase';

type Props = {};

export default class App extends Component<Props> {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    firebase.initializeApp(firebaseConfig);

    AsyncStorage.getItem(UNIQUE_KEY).then(key => {
      if (!key) {
        const key = Math.floor(Math.random() * 90000) + 10000; // 5 digit unique number
        AsyncStorage.setItem(UNIQUE_KEY, key.toString());
      }
    })
  }

  render() {
    return (
      <Provider store={store}>
        <Application />
      </Provider>
    );
  }
}