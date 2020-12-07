import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';

import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom';

const auth = firebase.auth();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h2>⚛️ React + 🔥 Firestore = 💬 Realtime Chat</h2>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}



export default App;
