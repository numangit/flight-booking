import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import BookingForm from './components/BookingForm';
import Header from './components/Header';
import PreviewSection from './components/PreviewSection';

function App() {
  const bookingsState = useSelector((state) => state);
  console.log(bookingsState);

  // useEffect(() => {

  // }, [bookingsState.length])


  return (
    <div>
      <Header />
      <BookingForm />
      {
        bookingsState.length > 0 && <PreviewSection />
      }

    </div>
  );
}

export default App;
