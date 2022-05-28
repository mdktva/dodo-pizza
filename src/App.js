import './App.css';
import Header from './components/header/Header';
import HeaderSecond from './components/headerSecond/HeaderSecond';
// import Halal from './components/halal/Halal';
// import Order from './components/order/Order';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import { useEffect, useState } from "react";
// import Modal from './pages/modal/Modal';
import Admin from './pages/admin/Admin';
import Dashboard from './pages/dashboard/Dashboard'
// import { api } from "./api/Api.js";
import CreatePizza from './pages/createPizza/CreatePizza';
import Api from './api/Api'


const PrivateRoute = ({ Component, isAuth }) => {

  return isAuth ? <Component /> : <Navigate to="/admin" />
}

const PublicRoute = ({ Component, isAuth }) => {
  return !isAuth ? <Component /> : <Navigate to="/dashboard" />
}

function App(props) {

  // const baseUrl = "https://625eaad13b039517f1fa0794.mockapi.io/dodo";

  const [pizzas, setPizzas] = useState([]);
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || [])
  const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")) );



  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket))
  }, [basket])

  useEffect(() =>{
    localStorage.setItem("auth", JSON.stringify(isAuth) )
  })


  const addToBasket = (pizza) => {
    setBasket([...basket, pizza])
  }

  const addNewPizza = (newPizza) => {
    setPizzas([...pizzas, addNewPizza])
  }

  useEffect(() => {
    Api.getAllPizza()
      .then((res) => {
        setPizzas(res.data.data.data);
      })

    // fetch(baseUrl)
    //   .then((res) => res.json())
    //   .then((data) => setPizzas(data));
  }, []);


  return (
    <BrowserRouter>
      <div className="App">

        <Header />
        <div className='headerSecond'>
          <HeaderSecond setBasket={setBasket} basket={basket} />
        </div>

        <Routes>
          <Route path="/" element={<HomePage pizzas={pizzas} addToBasket={addToBasket} />} />
          <Route path="/admin" element={<PublicRoute
            Component={() => <Admin setAuth={setAuth} />}
          />
          } />
          {/* <Route path="/dashboard" element={<Dashboard pizzas={pizzas} />} /> */}
          <Route path="/dashboard" element={<PrivateRoute
            Component={() => <Dashboard pizzas={pizzas} />}
            isAuth={isAuth}
          />}
          />
          {/* <Route path="/create-pizza" element={<CreatePizza addNewPizza={addNewPizza} />} /> */}
          <Route path="/create-pizza" element={<PrivateRoute
            Component={() => <CreatePizza addNewPizza={addNewPizza} />}
            isAuth={isAuth}
          />}
          />
          {/* <Route path="/dashboard" element={<PublicRoute
            Component={() => <Dashboard pizzas={pizzas} />}
            auth={auth}
          />}
          /> */}


        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
