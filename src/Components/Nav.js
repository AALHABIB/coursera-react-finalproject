import Logo from '../Assets/logo.svg'
import { Link } from 'react-router-dom'

export function Nav() {
    return (
    <nav className="p-5 bg-white md:flex md:items-center md:justify-between">
        <img src={Logo} alt="Little Lemon Logo"/>
        <ul className="md:flex md:items-center">
            <li className="mx-4"><Link to="/home" className="text-xl hover:text-green-800 duration-500">HOME</Link></li>
            <li className="mx-4"><Link to="/about" className="text-xl hover:text-green-800 duration-500">ABOUT</Link></li>
            <li className="mx-4"><Link to="/menu" className="text-xl hover:text-green-800 duration-500">MENU</Link></li>
            <li className="mx-4"><Link to="/booking" className="text-xl hover:text-green-800 duration-500">RESERVATIONS</Link></li>
            <li className="mx-4"><Link to="/orderonline" className="text-xl hover:text-green-800 duration-500">ORDER ONLINE</Link></li>
            <li className="mx-4"><Link to="/login" className="text-xl hover:text-green-800 duration-500">LOGIN</Link></li>
        </ul>
    </nav>
    )
}