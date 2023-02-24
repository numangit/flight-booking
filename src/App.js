import { Provider } from 'react-redux';
import './App.css';
import BookingForm from './components/BookingForm';
import Header from './components/Header';
import PreviewSection from './components/PreviewSection';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <BookingForm />
        <PreviewSection />
      </div>
    </Provider>
  );
}

export default App;
