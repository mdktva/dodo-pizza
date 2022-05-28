import css from './InfoPizza.module.css'
import React from 'react';
import Api from './../../api/Api';


export default function InfoPizza({ 
    name,
    title, 
    price, 
    description, 
    image, 
    id, 
    addToBasket, 
    isAdmin, 
    ...props 
}) {

    const onDelete =() => {
        // api.delete("dodo/" + id)
        Api.deletePizza(id)
        .then(() => {
            alert('Вы удалили эту пиццу')
            window.location.reload()
        })
    }

    return (
        <div className={css.main}>
            <div className={css.element}>
                <img src='https://dodopizza-a.akamaihd.net/static/Img/Products/420b846ea9864b0ba6421776655a1dd6_292x292.jpeg' alt="#" />

                <div>
                    <h4>{title} </h4>
                    {/* <h4>Пепперони</h4> */}
                    {/* <p className={css.desc}>{description}</p> */}
                    <p className={css.desc}>Пепперони из цыпленка, увеличенная порция моцареллы, томаты, томатный соус</p>
                    <h5> {price}</h5>
                    {/* <h5>от 520 сом</h5> */}

                    {
                        isAdmin
                            ? <div>
                                <button style={{backgroundColor: 'green', color: 'white', marginRight: '8px', border: 'none'}}>Change</button>
                                <button onClick={() => onDelete(id)} style={{backgroundColor: 'red', color: 'white', border: 'none'}}>Delete </button>
                            </div>
                            : <button className={css.btn} onClick={() => {
                                addToBasket({ title, price, description, image, id, addToBasket })
                            }}>
                                Выбрать
                            </button>
                    }


                    {/* <span style={{ marginRight: "10px" }}>от 366 сом</span> */}

                </div>
            </div>


        </div>
    );
}

