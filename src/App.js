
import { Addtask } from "./components/Addtask";
import {Showtask} from "./components/Showtask";
import {Header} from './components/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Addtask />
      <Showtask />
    </div>
  );
}

export default App;