import css from './Modal.module.css';

import React from 'react';
import BasketCard from '../../components/basketcard/BasketCard';
import { useState } from 'react';
import OrderModal from './../../components/ordermodal/OrderModal';


export default function Modal(props, basket) {

    const [orderModal, setOrderModal] = useState(true);
    const totalBalance = props.basket.reduce((acc, item) => acc + Number(item.price), 0)

    return (
        <div onClick={() => {
            props.setIsModal(false)
        }} className={`${css.wrapper} ${props.isModal ? css.active : ""}`} >

            <div className={css.basket} onClick={(e) => e.stopPropagation()}>
                {
                    props.basket.length
                        ? <div>
                            <>
                                <h2 style={{marginLeft: "100px"}} className={css.total}>
                                   {props.basket.length} товар на {totalBalance} сом
                                </h2>


                                <div className={css.footer}>
                                    <input className={css.promokod} placeholder="Промокод" style={{ color: "grey" }}></input>
                                    <div className={css.info}>
                                        <p>{props.basket.length}</p>
                                        <p>{totalBalance}</p>
                                    </div>
                                    <div className={css.info}>
                                        <p>Начислим додокоины</p>
                                        <p>+100</p>
                                    </div>
                                    <hr />

                                    <div className={css.info}>
                                        <div>Сумма заказа</div>
                                        <div>{totalBalance}</div>
                                    </div>

                                    <button className={css.btn} onClick={() => setOrderModal(true)}>К оформлению заказа</button>

                                </div>

                            </>
                            <div className={css.list}>
                                {
                                    props.basket.map((item, index) => <BasketCard
                                        key={item.id}
                                        {...item}
                                    />)
                                }
                            </div>
                        </div>

                        : <div className={css.dog}><img src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg" style={{ width: "300px" }} alt="" />
                            <h1>Ой, пусто!</h1>
                            <p style={{width: "70%"}}>Ваша корзина пуста, откройте «Меню»
                                и выберите понравившийся товар.
                                Мы доставим ваш заказ от 365 сом</p>
                        </div>

                }


            </div>
            <OrderModal orderModal={orderModal} setOrderModal={setOrderModal} />

        </div>
    );
}


