import './App.css';
import { createContext, useState } from 'react';
import Login from './Components/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Register from './Components/Register';
import Home from './Components/Home';
import {Routes, Route} from 'react-router-dom';

export const UserContext = createContext();  //Creating the context

function App() {
  const [userCredentials, setUserCredentials] = useState({email: '', password: ''});

  const handleUserCred = (value) => {
    return setUserCredentials(details => {
        return {...details, ...value}
    })
}

  return (
    // Context Provide
      <UserContext.Provider value={{userCredentials: userCredentials, handleUserCred: handleUserCred }}>  
        <div className="App">
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register />} />
            {/* <Route path='/cart' element={<Cart/>} />
            <Route path='/orders' element={<Orders/>} />
            <Route path='/payment' element={<Payment/>} />
            <Route path='/profile' element={<Profile/>} /> */}
          </Routes>
          <Footer />
        </div>
      </UserContext.Provider>
  );
}

export default App;