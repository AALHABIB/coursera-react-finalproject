import { Card } from './Card'
import { PrimaryButton } from './PrimaryButton'

export function Specials() {
    return (
        
        <section className="md:flex-col md:items-center md:justify-center p-20">
             <div className="md:flex md:justify-between py-10 px-20">
                 <h2>This weeks specials!</h2>
                 <PrimaryButton name="TEST" />
             </div>
             <div className="grid md:grid-cols-3 gap-10 py-10 px-20 mx-20">
                 <Card name="Greek Salad" />
                 <Card name="Bruchetta" />
                 <Card name= "Lemon Dessert" />
             </div>
         </section>
        
    )
}