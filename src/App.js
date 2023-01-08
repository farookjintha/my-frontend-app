import './App.css';
import Login from './Components/Login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      {/* <Register /> */}
      <Footer />
    </div>
  );
}

export default App;
