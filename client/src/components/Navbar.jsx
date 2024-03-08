import { Link } from "react-router-dom"
import './/Navbar.css'

export default function 
() {
  return (
    <nav className="nav">
      <Link className="Home" to ='/'>Home</Link>
      <Link className="register" to = '/register'>register</Link>
      <Link className="Login" to = '/Login'>Login</Link>
    </nav>
  )
}
