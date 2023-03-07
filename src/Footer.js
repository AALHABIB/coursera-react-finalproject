import Logo from './logo.svg'
import { Nav } from './Nav'


export function Footer() {
    return (
    <footer>
        <img src={Logo} alt="Company Logo"/>
        <div>
             <h3>Doormat Navigation</h3>
             <Nav />
        </div>
       
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

