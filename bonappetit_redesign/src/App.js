import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
