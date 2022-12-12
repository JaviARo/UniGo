import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Designs from "./pages/Designs";
import Clothes from './pages/Clothes';
import Editor from './pages/Editor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Designs />} />
        <Route path="clothes" element={<Clothes />} />
        <Route path="editor" element={<Editor />} />
        {/* <Route component={PageNotFound} /> */}
      </Routes>
    </Router>
  );
}

export default App;