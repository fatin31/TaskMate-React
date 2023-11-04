import { Header } from "./components/Header";
import { AddTask } from "./components/Addtask";
import { ShowTask } from "./components/Showtask";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <ShowTask />
    </div>
  );
}

export default App;