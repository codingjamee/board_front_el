import "./App.css";
import "./components/styles/style.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
import EduQuestion from "./components/EduQuestion";
import EduShare from "./components/EduShare";
import Total from "./components/Total";
import FreeTalk from "./components/FreeTalk";

function App() {
  return (
    <div>
      <Layout />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Total />} />
            <Route path="/question" element={<EduQuestion />} />
            <Route path="/share" element={<EduShare />} />
            <Route path="/talk" element={<FreeTalk />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
