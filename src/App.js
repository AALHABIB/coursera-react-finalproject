import './App.css';
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage';
import { BookingPage } from './Pages/BookingPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>
    </>
  );
}

export default App;
