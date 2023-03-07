import Logo from './logo.svg'
import { Nav } from './Nav'

export function Header() {
    return (
    <header>
        <img src={Logo} alt="Little Lemon Logo"/>
        <Nav/>
    </header>
    )
}