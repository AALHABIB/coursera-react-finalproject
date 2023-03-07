import Logo from './logo.svg'
import { Nav } from './Nav'


export function Footer() {
    return (
    <footer>
        <img src={Logo}/>
        <Nav />
        <>
            <a>Address</a>
            <a>Phone Number</a>
            <a>Email</a>
        </>
        <>
            <a>Address</a>
            <a>Phone Number</a>
            <a>Email</a>
        </>
    </footer>
    )
}

