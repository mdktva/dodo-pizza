import React from 'react'
import css from './HeaderSecond.module.css'


export default function HeaderSecond() {
  return (
    <div className={css.body}>
      <div>
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
        <button className={css.button}>Корзина</button>
      </div>


    </div>
  )
}
