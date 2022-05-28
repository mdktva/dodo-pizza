import React from 'react'
import InfoPizza from './../../components/infoPizza/InfoPizza';
import css from './Dashboard.module.css'
import { Link } from 'react-router-dom'

export default function Dashboard(props) {
    return (
        <div className={css.wrapper + " " + 'container'}>
            {/* <h1 style={{ marginBottom: "30px" }}>Пицца</h1> <br /> */}

            <Link to="/create-pizza" className={css.addBtn}>
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828819.png" alt="" />

            </Link>

            {
                props.pizzas.map((item) => <InfoPizza
                    basket={props.basket}
                    setBasket={props.setBasket}
                    isAdmin={true}
                    key={item.id}
                    {...item}
                />)
            }
        </div>
    )
}
