import './App.css';
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage';
import { BookingPage } from './Pages/BookingPage';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
