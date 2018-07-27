import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

// Routes (App)
import routes from './router';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDuAkVcoPAF1sVcvwjbcWdrlaAQeeRx-a0",
  authDomain: "volutrack.firebaseapp.com",
  databaseURL: "https://volutrack.firebaseio.com",
  storageBucket: "volutrack.appspot.com",
  messagingSenderId: "488190387252"
};
firebase.initializeApp(config);

ReactDOM.render(
  routes,
  document.getElementById('root')
);
