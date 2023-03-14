import RestaurantImage from '../Assets/restauranfood.jpg'
import { PrimaryButton } from './PrimaryButton'
import { Card } from './Card'


export function Main() {
    return (
    <main>
        <section className="md:flex md:items-center md:justify-center bg-green-800 overflow-visible">
        <div className="md:flex-col">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p className="flex-initial w-80 py-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <PrimaryButton name="TEST" />
        </div>
        <img src={RestaurantImage} alt="restaurant food sample" className="h-80 pt-7 pl-6 relative"/>
        </section>
        <section className="md:flex-col md:items-center md:justify-center">
            <div className="md:flex md:justify-between py-10 px-20">
                <h2>This weeks specials!</h2>
                <PrimaryButton name="TEST" />
            </div>
            <div className="grid md:grid-cols-3 gap-10 py-10 px-20">
                <Card name="Greek Salad" />
                <Card name="Bruchetta" />
                <Card name= "Lemon Dessert" />
            </div>   
        </section>
    </main>
    )
}