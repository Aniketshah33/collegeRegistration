import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import {Login} from "./login";
import {Register} from "./register";

function App() {
  const [currentFrom, setCurrentForm] = useState('login');

  const toogleForm = (formNaame) => {
    setCurrentForm(formNaame);

  }

  return (
    <div className="App">
      {
        currentFrom === "login" ? <Login onFormSwitch={toogleForm} /> : <Register onFormSwitch={toogleForm} />
      }
    </div>
  );
}

export default App;
