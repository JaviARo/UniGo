import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Clothes from './pages/Clothes';
import Editor from './pages/Editor';
import Login from './pages/Login';
import Register from './pages/Register';
import Designs from './pages/Designs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="clothes" element={<Clothes />} />
        <Route path="designs" element={<Designs />} />
        <Route path="editor" element={<Editor />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* <Route component={PageNotFound} /> */}
      </Routes>
    </Router>
  );
}

export default App;