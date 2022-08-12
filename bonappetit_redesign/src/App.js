import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/pages/Landing"
import AllRecipes from "./components/pages/RecipesPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={[<Landing />]} />
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
