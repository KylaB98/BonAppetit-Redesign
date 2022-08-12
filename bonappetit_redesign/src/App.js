import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/HomePage/Landing";
import Newsletter from "./components/Newsletter/newsletter";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={[<Landing />]} />
          <Route path="/newsletter" element={<Newsletter />} />
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
