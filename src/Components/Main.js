import RestaurantImage from '../Assets/restauranfood.jpg'
import Bruchetta from '../Assets/bruchetta.svg'
import Greeksalad from '../Assets/greeksalad.jpg'
import Lemondessert from '../Assets/lemondessert.jpg'
import { PrimaryButton } from './PrimaryButton'
import { Card } from './Card'


export function Main() {
    return (
    <main>
        <section class="hero">
        <div>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <PrimaryButton name="TEST" />
        </div>
        <img src={RestaurantImage} alt="restaurant food sample"/>
        </section>
        <section class="highlights">
            <div class="header">
                <h2>This weeks specials!</h2>
                <PrimaryButton name="TEST" />
            </div>
            <div class="card">
            <div  class="card-details">
                    <div>
                      <img src={Greeksalad} alt="Greek salad" class="card-img"/>
                    </div>
                    <div class="card-header">
                      <h4>Greek Salad</h4>
                      <h4>$12.99</h4>
                    </div>
                    <div>
                      <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    </div>
                    <div>
                      <h4>Order a delivery</h4>
                    </div>
                </div>
            </div>
            <div class="card">
                <div  class="card-details">
                    <div>
                      <img src={Bruchetta} alt="Greek salad" class="card-img"/>
                    </div>
                    <div class="card-header">
                      <h4>Bruchetta</h4>
                      <h4>$8.99</h4>
                    </div>
                    <div>
                      <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    </div>
                    <div>
                      <h4>Order a delivery</h4>
                    </div>
                </div>
            </div>
            <div class="card">
            <div  class="card-details">
                    <div>
                     <img src={Lemondessert} alt="Greek salad" class="card-img"/>
                    </div>
                    <div class="card-header">
                      <h4>Lemon Dessert</h4>
                      <h4>$5.00</h4>
                    </div>
                    <div>
                      <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    </div>
                    <div>
                      <h4>Order a delivery</h4>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}