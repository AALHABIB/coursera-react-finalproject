import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"
import { CallToAction } from "../Components/CallToAction"
import { Specials } from "../Components/Specials"

export function HomePage() {
    return (
        <>
            <Header />
            <CallToAction />
            <Specials />
            <Footer />
        </>
    )
}