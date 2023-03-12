import RestaurantImage from '../Assets/restauranfood.jpg'
import { PrimaryButton } from './PrimaryButton'
import { Card } from './Card'


export function Main() {
    return (
    <main>
        <section className="hero">
        <div>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <PrimaryButton name="TEST" />
        </div>
        <img src={RestaurantImage} alt="restaurant food sample"/>
        </section>
        <section className="highlights">
            <div className="header">
                <h2>This weeks specials!</h2>
                <PrimaryButton name="TEST" />
            </div>
            <Card name="Greek Salad" />
            <Card name="Bruchetta" />
            <Card name= "Lemon Dessert" />
        </section>
    </main>
    )
}