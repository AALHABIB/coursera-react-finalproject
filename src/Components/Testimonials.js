import profile1 from '../Assets/profile1.jpg'
import profile2 from '../Assets/profile2.jpg'
import profile3 from '../Assets/profile3.jpg'
import profile4 from '../Assets/profile4.jpg'

export function Testimonials() {
    return (
        <section className="md:flex-col md:items-center md:justify-center p-20 bg-slate-500">
            <span className='flex-col text-center'><h1>Testimonials</h1></span>
            <div className="grid md:grid-cols-4 gap-10 py-10 px-20 mx-20">
            <div className="overflow-hidden bg-white p-10 justify-between">
                <h1>5 Stars</h1>
                <div className='grid grid-cols-2 gap-5 py-5'>
                    <img src={profile1} alt='personal'/>
                    <h3>Tony</h3>
                </div>
                <p>Such an amazing food and service!</p>
            </div>
            <div className="overflow-hidden bg-white p-10 justify-between">
                <h1>5 Stars</h1>
                <div className='grid grid-cols-2 gap-5 py-5'>
                    <img src={profile2} alt='personal'/>
                    <h3>Mike</h3>
                </div>
                <p>One of the best restaurants in the city.</p>
            </div>
            <div className="overflow-hidden bg-white p-10 justify-between">
                <h1>4.5 Stars</h1>
                <div className='grid grid-cols-2 gap-5 py-5'>
                    <img src={profile3} alt='personal'/>
                    <h3>Jenna</h3>
                </div>
                <p>Booking is easy and staff are professional.</p>
            </div>
            <div className="overflow-hidden bg-white p-10 justify-between">
                <h1>4 Stars</h1>
                <div className='grid grid-cols-2 gap-5 py-5'>
                    <img src={profile4} alt='personal'/>
                    <h3>John</h3>
                </div>
                <p>Wonderful service and the food is top notch!</p>
            </div>
            </div>
            
        </section>
    )
}