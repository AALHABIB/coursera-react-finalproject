
export function BookingForm() {
    return (
    <form className="grid items-center justify-center px-5 py-10">
        <div className='flex px-3 py-3 justify-between bg-slate-400'>
            <label htmlFor="res-date" className='px-3'>Choose date</label>
            <input type="date" id="res-date" className='px-3'/>
        </div>
    <div className='flex px-3 py-3 justify-between bg-slate-200'>
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time ">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
        </select>
    </div>
    
    <div className='flex px-3 py-3 justify-between  bg-slate-400'>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" placeholder="1" min="1" max="10" id="guests"/>
    </div>
   <div className='flex px-3 py-3 justify-between bg-slate-200'>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
        </select>
   </div>
   
   <input type="submit" value="Make Your reservation" className="flex items-center justify-center p-3 bg-yellow-300 rounded-3xl my-10" />
</form>
    )
}