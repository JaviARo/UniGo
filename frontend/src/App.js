import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Clothes from './pages/Clothes';
import Editor from './pages/Editor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="clothes" element={<Clothes />} />
        <Route path="editor" element={<Editor />} />
        {/* <Route component={PageNotFound} /> */}
      </Routes>
    </Router>
  );
}

export default App;