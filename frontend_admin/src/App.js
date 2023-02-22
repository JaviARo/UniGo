import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Login from './pages/Login'
import Clothes from './pages/clothes/Clothes'
import Designs from './pages/designs/Designs'
import Images from './pages/images/Images'
import Users from './pages/users/Users'
import AddClothes from './pages/clothes/AddClothes'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />

        <Route path="clothes" element={<Clothes />} />
        <Route path="designs" element={<Designs />} />
        <Route path="images" element={<Images />} />
        <Route path="users" element={<Users />} />

        <Route path="add_clothes" element={<AddClothes />} />
      </Routes>
  );
}

export default App;