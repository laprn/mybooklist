import React, {Component} from 'react';
import './App.css';
import Sampledata from './fire/SampleData';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBK_C2civOULVlvI54D3TNHqiTMD_ywMyM",
  authDomain: "booklist-3npk084.firebaseapp.com",
  databaseURL: "https://booklist-3npk084-default-rtdb.firebaseio.com",
  projectId: "booklist-3npk084",
  storageBucket: "booklist-3npk084.appspot.com",
  messagingSenderId: "297733738066",
  appId: "1:297733738066:web:f9458660cc3dbbc3ab198b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class App extends Component{
  render(){
    return(
    <div>
      <h1>My book list</h1>
      <Sampledata />
    </div>
    );
  }
}

export default App;
