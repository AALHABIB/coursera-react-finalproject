import RestaurantImage from '../Assets/restauranfood.jpg'
import { PrimaryButton } from './PrimaryButton'

export function CallToAction() {
    return (

        <section className="md:grid grid-cols-2 items-center bg-green-800 md:px-20">
        <div className="md:flex-col py-10 md:px-20 md:relative left-1/3">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p className="flex-initial w-80 py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <PrimaryButton name="Reserve a Table" />
        </div>
        <img src={RestaurantImage} alt="restaurant food sample" className="rounded h-80 md:relative right-1 top-1/4"/>
        </section>

    )

}