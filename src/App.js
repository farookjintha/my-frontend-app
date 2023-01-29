import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Home from './Components/Home';
import {Routes, Route} from 'react-router-dom';

function App() {
  const currentLocation = window.location.href.split('/')[3];
  return (
      <div className="App">
        {currentLocation !== 'login' && currentLocation !== 'register' && <Header />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* <Route path='/cart' element={<Cart/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/profile' element={<Profile/>} /> */}
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
