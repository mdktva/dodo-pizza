import React from 'react'
import css from './Halal.module.css'

export default function Halal() {
    return (
        <div className={css.main}>
            <img src="https://dodopizza-a.akamaihd.net/site-static/dist/f30f1ab8cd7a7a54476d.svg" style={{ width: "50px" }} alt="" />
            
            <span style={{paddingLeft: "20px"}}> Без свинины
                <p style={{color: "grey"}}>Мы готовим из цыпленка и говядины</p>
            </span>

        </div>
    )
}
