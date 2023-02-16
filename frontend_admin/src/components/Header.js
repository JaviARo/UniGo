import { useNavigate } from 'react-router-dom'
import './header.css'

const Header = () => {
  const navigate = useNavigate();

  const navigateToUsers = () => {
    navigate("/users")
  }

  const navigateToClothes = () => {
    navigate("/clothes")
  }

  const navigateToImages = () => {
    navigate("/images")
  }

  const navigateToDesigns = () => {
    navigate("/designs")
  }

  return (
    <div id="header">
      <img src="/img/logo3.png"/>
      <p onClick={navigateToUsers}>Usuarios</p>
      <p onClick={navigateToClothes}>Prendas de ropa</p>
      <p onClick={navigateToImages}>Imágenes</p>
      <p onClick={navigateToDesigns}>Diseños</p>
    </div>
  )
} 

export default Header