import './App.css';
import Header from './components/header/Header';
import HeaderSecond from './components/headerSecond/HeaderSecond';
import Halal from './components/halal/Halal';
// import Order from './components/order/Order';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import { useEffect, useState } from "react";
import Modal from './pages/modal/Modal';


function App() {

  const [pizzas, setPizzas] = useState([]);
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || [])

  useEffect(()=>{
    localStorage.setItem("basket", JSON.stringify(basket))
  },[basket])

  const addToBasket = (pizza) =>{
    setBasket([...basket, pizza])
  }


  useEffect(() => {
    // const basketPizzas = JSON.parse(localStorage.getItem("basket")) || []
    // setBasket(basketPizzas)
    fetch('https://625eaad13b039517f1fa0794.mockapi.io/dodo')
      .then((res) => res.json())
      .then((data) => setPizzas(data));
  }, []);


  return (
    <BrowserRouter>

      <div className="App">


        <Header />
        <HeaderSecond basket={basket}/>

        <Routes>

          <Route path="/" element={<HomePage pizzas={pizzas} addToBasket={addToBasket} />} />


        </Routes>



      </div>


    </BrowserRouter>

  );
}

export default App;
