import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Clothes from './pages/Clothes'
import Editor from './pages/Editor'
import Create from './pages/Create'
import Images from './pages/Images'
import Login from './pages/Login'
import Register from './pages/Register'
import Designs from './pages/Designs'
import EditDesign from './pages/EditDesign'
import Config from './pages/Config'
import User from './pages/User'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="clothes" element={<Clothes />} />
        <Route path="designs" element={<Designs />} />
        <Route path="editor" element={<Editor />} />
        <Route path="create" element={<Create />} />
        <Route path="images" element={<Images />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="edit/:id" element={<EditDesign />} />
        <Route path="config" element={<Config />} />
        <Route path="user" element={<User />} />
      </Routes>
  );
}

export default App;