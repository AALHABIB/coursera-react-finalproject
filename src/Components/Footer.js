import Logo from '../Assets/logo.svg'


export function Footer() {
    return (
    <footer className ="grid grid-cols-4 py-10 px-20">
        <img src={Logo} alt="Company Logo" className=" self-center"/>
            <nav className="">
            <h3>Doormat Navigation</h3>
            <ul className="md:flex-col md:items-center">
                <li className=""><a href="#home" className="">HOME</a></li>
                <li className=""><a href="#about" className="">ABOUT</a></li>
                <li className=""><a href="#menu" className="">MENU</a></li>
                <li className=""><a href="#reservations" className="">RESERVATIONS</a></li>
                <li className=""><a href="#orderonline" className="">ORDER ONLINE</a></li>
                <li className=""><a href="#login" className="">LOGIN</a></li>
            </ul>
            </nav>
        <div>
            <h3>Contact</h3>
            <ul>
                <li><a href="#address">Address</a></li>
                <li><a href="#call">Phone Number</a></li>
                <li><a href="email">Email</a></li>
            </ul>
        </div>
        <div>
             <h3>Social Media Links</h3>
             <ul>
                <li><a href="#address">Address</a></li>
                <li><a href="#call">Phone Number</a></li>
                <li><a href="email">Email</a></li>
            </ul>
        </div>
    </footer>
    )
}

