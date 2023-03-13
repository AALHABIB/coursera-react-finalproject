import Logo from '../Assets/logo.svg'

export function Nav() {
    return (
    <nav className="p-5 bg-white md:flex md:items-center md:justify-between">
        <img src={Logo} alt="Little Lemon Logo"/>
        <ul className="md:flex md:items-center">
            <li className="mx-4"><a href="#home" className="text-xl hover:text-green-800 duration-500">HOME</a></li>
            <li className="mx-4"><a href="#about" className="text-xl hover:text-green-800 duration-500">ABOUT</a></li>
            <li className="mx-4"><a href="#menu" className="text-xl hover:text-green-800 duration-500">MENU</a></li>
            <li className="mx-4"><a href="#reservations" className="text-xl hover:text-green-800 duration-500">RESERVATIONS</a></li>
            <li className="mx-4"><a href="#orderonline" className="text-xl hover:text-green-800 duration-500">ORDER ONLINE</a></li>
            <li className="mx-4"><a href="#login" className="text-xl hover:text-green-800 duration-500">LOGIN</a></li>
        </ul>
    </nav>
    )
}