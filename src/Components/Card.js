import Bruchetta from '../Assets/bruchetta.svg'
import Greeksalad from '../Assets/greeksalad.jpg'
import Lemondessert from '../Assets/lemondessert.jpg'

const dishes = [
    {
        name: 'Greek Salad',
        price: 12.99,
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        imgUrl: Greeksalad
    },
    {
        name: 'Bruchetta',
        price: 5.99,
        description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        imgUrl: Bruchetta
    },
    {
        name: 'Lemon Dessert',
        price: 5.00,
        description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        imgUrl: Lemondessert
    },
]


export function Card(props) {
    let dish = dishes.find(dish => dish.name === props.name ? dish : null)
    return (
        <>
        <img src={dish.imgUrl} alt={dish.name}/>
        <h4>{dish.title}</h4>
        <h4>{dish.price}</h4>
        <p>{dish.description}</p>
        <h4>Order a Delivery</h4>
        </>
    )
}