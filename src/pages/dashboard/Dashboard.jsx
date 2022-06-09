import React from 'react'
import InfoPizza from './../../components/infoPizza/InfoPizza';
import css from './Dashboard.module.css'
import { Link } from 'react-router-dom'
import HomePage from '../homePage/HomePage';
import { useSelector, useDispatch } from 'react-redux';
import { SET_LOGOUT } from './../../redux/ActionTypes';

export default function Dashboard(props) {
    const dispatch = useDispatch();

    const logout = () => {
        // props.setState(null)
        dispatch(
            {
                type: SET_LOGOUT,
                payload: { token: "lorem10000" }
            }
        )
    }

    const pizzas = useSelector((state) => state.pizzas.data)
    return (
        <div >
            <button style={{ marginLeft: "100px", backgroundColor: "red" }} onClick={logout}>Выйти</button>


            <div className={css.wrapper + " " + 'container'}>
                {/* <h1 style={{ marginBottom: "30px" }}>Пицца</h1> <br /> */}

                <Link to="/create-pizza" className={css.addBtn}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1828/1828819.png" alt="" />

                </Link>

                {
                    pizzas.map((item) => <InfoPizza
                        basket={props.basket}
                        setBasket={props.setBasket}
                        isAdmin={true}
                        key={item.id}
                        {...item}
                    />)
                }
            </div>
        </div>
    )
}
