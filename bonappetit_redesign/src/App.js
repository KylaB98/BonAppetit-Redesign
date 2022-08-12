import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Landing from "./components/pages/Landing"
=======
import Landing from "./components/HomePage/Landing";
import Cooking from "./components/cooking/Cooking";
>>>>>>> 23a3380 (Cooking Page Done)

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={[<Landing />]} />
          <Route path="/cooking" element={<Cooking />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// <BrowserRouter>
//   <Nav />
//   <Footer />
// </BrowserRouter>
