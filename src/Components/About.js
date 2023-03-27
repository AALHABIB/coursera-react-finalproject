import RestaurantImage from '../Assets/restauranfood.jpg'
import { PrimaryButton } from './PrimaryButton'

export function About() {
    return (
        <section className="md:grid grid-cols-2 items-center bg-white md:px-20">
        <div className="md:flex-col py-10 md:px-20 md:relative left-1/3">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p className="flex-initial w-80 py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='relative'>
        <img src={RestaurantImage} alt="restaurant food sample" className="rounded h-80 absolute top-0 bottom-0 mt-20"/>
        <img src={RestaurantImage} alt="restaurant food sample" className="rounded h-80 relative top-0 bottom-0 mt-1 ml-20 mb-20"/>
        </div>
        </section>
    )
}