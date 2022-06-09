import './App.css';
import Header from './components/header/Header';
import HeaderSecond from './components/headerSecond/HeaderSecond';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import { useEffect, useState } from "react";
import Admin from './pages/admin/Admin';
import Dashboard from './pages/dashboard/Dashboard'
// import { api } from "./api/Api.js";
import CreatePizza from './pages/createPizza/CreatePizza';
import Api from './api/Api'
import { useSelector, useDispatch } from 'react-redux';
import { SET_ALL_PIZZA } from "./redux/ActionTypes"



const PrivateRoute = ({ Component }) => {
  const isAuth = useSelector((state) => state.auth.data?.token);

  return isAuth ? <Component /> : <Navigate to="/admin" />
}

const PublicRoute = ({ Component }) => {
  const isAuth = useSelector((state) => state.auth.data?.token);

  return !isAuth ? <Component /> : <Navigate to="/dashboard" />
}

function App(props) {

  // const [pizzas, setPizzas] = useState([]);
  // const [_, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || [])

  const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem("auth")));
  // const [count, setCount] = useState(0);

  const dispatch = useDispatch();


  // useEffect(() => {
  //   localStorage.setItem("basket", JSON.stringify(_))
  // }, [_])

  // useEffect(() => {
  //   localStorage.setItem("auth", JSON.stringify(isAuth))
  // })


  // const addToBasket = (pizza) => {
  //   setBasket([..._, pizza])
  // }

  const addNewPizza = (newPizza) => {
    // TODO: rewrite to redux logic
    // setPizzas([...pizzas, addNewPizza])
  }

  useEffect(() => {
    Api.getAllPizzaMock().then((res) => {
      // setPizzas(res.data.data.data);
      // setPizzas(res.data);
      dispatch({ type: SET_ALL_PIZZA, payload: res.data })
    });

    // fetch(baseUrl)
    //   .then((res) => res.json())
    //   .then((data) => setPizzas(data));
  }, []);


  return (
    <BrowserRouter>

      {/* <div className='text-box'>
      <button onClick={() =>{dispatch( {type: "MINUS"})}}>Minus</button>
      <span> {countRedux} </span>
      <button onClick={() => {dispatch ( {type: "PLUS"} )}}>Plus</button>
    </div> */}

      <div className="App">
        <Header />
        <div className='headerSecond'>
          <HeaderSecond />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={
            <PublicRoute Component={Admin} />
          } />
          {/* <Route path="/dashboard" element={<Dashboard pizzas={pizzas} />} /> */}
          <Route path="/dashboard" element={<PrivateRoute
            Component={() => <Dashboard setAuth={() => { }}
            />}
            isAuth={isAuth}
          />}
          />
          {/* <Route path="/create-pizza" element={<CreatePizza addNewPizza={addNewPizza} />} /> */}
          <Route path="/create-pizza" element={<PrivateRoute
            Component={() => <CreatePizza addNewPizza={addNewPizza} />}
          />
          }
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
