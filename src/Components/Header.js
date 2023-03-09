import Logo from '../Assets/logo.svg'
import { Nav } from './Nav'

export function Header() {
    return (
    <header>
        <img src={Logo} alt="Little Lemon Logo"/>
        <Nav/>
    </header>
    )
}