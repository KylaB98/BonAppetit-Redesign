import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/pages/Landing";
import Cooking from "./components/cooking/Cooking";
import Newsletter from "./components/Newsletter/newsletter";
import AllRecipes from "./components/pages/RecipesPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={[<Landing />]} />
          <Route path="/cooking" element={<Cooking />} />
          <Route path="/recipes" element={<AllRecipes />} />
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
