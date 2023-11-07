
import { useState } from "react";

import { Addtask } from "./components/Addtask";
import {Showtask} from "./components/Showtask";
import {Header} from './components/Header';

import './App.css';


function App() {
  const [tasklist,setTasklist]= useState([]);


  return (
    <div className="App">
      <Header />
      <Addtask tasklist={tasklist} setTasklist={setTasklist} />
      <Showtask tasklist={tasklist} setTasklist={setTasklist}  />
    </div>
  );
}

export default App;