import css from './BasketCard.module.css'
import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { DELETE_PIZZA_BASKET } from './../../redux/ActionTypes';

export default function BasketCard({setBasket, basket, title, price, description, image, id, ...props }) {
    console.log(props);


//     const onDelete = (id) => {
//     const newArr = basket.filter((item) => item.id !== id)
//     setBasket([...newArr])
//   }

     
  const dispatch = useDispatch();

   const onDeleteFromBasket = () => {
       dispatch({type: DELETE_PIZZA_BASKET, id: id})
   }

    return (
        <div>
            <div className={css.global}>
                <div className={css.main}>
                    <img style={{ width: "65px" }} src="https://dodopizza-a.akamaihd.net/static/Img/Products/420b846ea9864b0ba6421776655a1dd6_292x292.jpeg" alt="" />
                    {/* <img style={{ width: "65px" }} src={image} alt="" /> */}
                    <div className={css.body}>
                        <h4>{title}</h4>
                        <div className={css.description}>{description}</div>
                    </div>
                </div>
                <hr />
                <div className={css.delete}>
                    <span style={{ marginLeft: "65px" }}>{price} </span>
                    <button onClick={onDeleteFromBasket} className={css.button} 
                    >Удалить</button>
                    
                </div>

            </div>



        </div>


    )
}
