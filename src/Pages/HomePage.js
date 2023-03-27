import { About } from "../Components/About"
import { CallToAction } from "../Components/CallToAction"
import { Specials } from "../Components/Specials"
import { Testimonials } from "../Components/Testimonials"

export function HomePage() {
    return (
        <>
            <CallToAction />
            <Specials />
            <Testimonials />
            <About />
        </>
    )
}