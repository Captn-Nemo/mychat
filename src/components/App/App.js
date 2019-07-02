import React, {Component} from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import Form from '../Form/Form';
import firebase from 'firebase';  
import firebaseConfig from '../../config';

firebase.initializeApp(firebaseConfig);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      user:'',
     }
    }
     
  componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({user});
        })
     }   
    handleSignIn() {
      const provider=new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    }

    handleSignOut() {
      firebase.auth().signOut();  
    }

  render() { 
    return (
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h2>Simple Chat Application To Test Firebase</h2>  
          {!this.state.user? (
            <button className="app__button" onClick={this.handleSignIn.bind(this)}>Sign IN</button>
          ): (
            <button className="app__button" onClick={this.handleSignOut.bind(this)}>Logout</button>
          ) }  
        </header>
        <div className="app__list">
          <Form user={this.state.user}/>
        </div>
      </div>
    );
  }
}
 

export default App;
