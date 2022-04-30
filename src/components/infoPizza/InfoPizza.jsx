import css from './InfoPizza.module.css'

import React from 'react';

export default function InfoPizza(props) {
    return (
        <div className={css.main}>
            <img src='https://dodopizza-a.akamaihd.net/static/Img/Products/420b846ea9864b0ba6421776655a1dd6_292x292.jpeg' alt="#" />

            <div>
                {/* <h4>{props.title} </h4> */}
                <h4>Пепперони</h4>
                {/* <p className={css.desc}>{props.description}</p> */}
                <p className={css.desc}>Пепперони из цыпленка, увеличенная порция моцареллы, томаты, томатный соус</p>
                {/* <h5> {props.price}</h5> */}
                <h5>от 520 сом</h5>


            </div>

        </div>
    );
}

