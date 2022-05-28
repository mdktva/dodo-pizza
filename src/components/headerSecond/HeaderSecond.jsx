import React from 'react'
import css from './HeaderSecond.module.css'
import Modal from '../../pages/modal/Modal'
import { useState } from 'react';

export default function HeaderSecond(props) {

  const [isModal, setIsModal] = useState(false);



  return (
    <div className={css.body + " container"} >
      <div className={css.global}>
        <a href="">Пицца</a>
        <a href="">Комбо</a>
        <a href="">Закуски</a>
        <a href="">Десерты</a>
        <a href="">Напитки</a>
        <a href="">Другие товары</a>
        <a href="">Акции</a>
        <a href="">Контакты</a>
        <a href="">О нас</a>
        <a href="">Прямой эфир</a>
      </div>
      <div>

        <button className={css.button} onClick={() => setIsModal(true)}>Корзина | {props.basket.length}</button>

      </div>

      <Modal setBasket={props.setBasket} basket={props.basket} setIsModal={setIsModal} isModal={isModal} />

    </div>
  )
}
