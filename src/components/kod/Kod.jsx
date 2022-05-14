import React from 'react'
import css from "./Kod.module.css";

export default function Kod(props) {
    
    return (
        <div onClick={() => {
            props.setIsKod(false)
        }}
            className={`${css.wrapper} ${props.isKod ? css.active : ""}`}>
            <div className={css.phone} onClick = {(e) => e.stopPropagation()}>
                <h1>Вход на сайт</h1>
                <p>Код отправили сообщением на</p>
                <div className={css.body}>
                    <div>
                        <input className={css.input} maxLength="1" type="text" />
                    </div>
                    <div>
                        <input className={css.input} maxLength="1" type="text" />
                    </div>
                    <div>
                        <input className={css.input} maxLength="1" type="text" />
                    </div>
                    <div>
                        <input className={css.input} maxLength="1" type="text" />
                    </div>
                </div>
                <button className={css.btn}>Получить новый код через </button>



            </div>

        </div>
    )
}
