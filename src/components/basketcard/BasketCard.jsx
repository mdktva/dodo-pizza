import css from './BasketCard.module.css'
import React from 'react'

export default function BasketCard({ title, price, description, image, id, ...props }) {
    console.log(props);
    return (
        <div>
            <div className={css.global}>
                <div className={css.main}>
                    <img style={{ width: "65px" }} src="https://dodopizza-a.akamaihd.net/static/Img/Products/420b846ea9864b0ba6421776655a1dd6_292x292.jpeg" alt="" />
                    {/* <img style={{ width: "65px" }} src={image} alt="" /> */}
                    <div className={css.body}>
                        <h4>{props.title}</h4>
                        <div className={css.description}>{description}</div>
                    </div>
                </div>
                <hr />
                <div className={css.delete}>
                    <span style={{ marginLeft: "65px" }}>{price} </span>
                    <button className={css.button}>Удалить</button>
                </div>

            </div>



        </div>


    )
}
