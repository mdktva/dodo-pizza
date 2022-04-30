import './App.css';
import Header from './components/header/Header';
import HeaderSecond from './components/headerSecond/HeaderSecond';
// import Halal from './components/halal/Halal';
// import Order from './components/order/Order';
// import Kombo from './components/kombo/Kombo';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <HeaderSecond />

        <Routes>

          <Route path="/" element={<HomePage/>} />


        </Routes>

        {/* // <Kombo />
        // <Order />
        // <Halal /> */}
      </div>
      
      </BrowserRouter>

      );
}

      export default App;
