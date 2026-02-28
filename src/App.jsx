import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Home } from "./pages/Home.jsx";
import { Country } from "./pages/Country.jsx";
import { NotFound } from "./pages/NotFound.jsx";


function App() {


  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:country" element={ <Country />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    </Router>
  )
}

export default App
