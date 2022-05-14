import css from './OrderModal.module.css'
import React from 'react'
import { useState } from "react";
import Kod from './../kod/Kod';

export default function OrderModal(props) {
    const [isKod, setIsKod] = useState(false);
    // const [code, setCode] = useState()

    // const [phoneNumber, setPhoneNumber] = useState();

    // const handlePhoneNumber = (e) =>{
    //     setPhoneNumber(e.target.value)
    // }
    // const submit = (e) =>{
    //     if(sendCode.maxlength === "12"){

    //     }else{

    //     }
    // }

    // const handleCode = (e) =>{
    //     setCode(e.target.value)
    // }

    return (
        <div onClick={() => {
            props.setOrderModal(false)
        }}
            className={`${css.wrapper} ${props.orderModal ? css.active : ""}`
            }>OrderModal
            <div className={css.phone} onClick={(e) => e.stopPropagation()}>
                <h1>Вход на сайт</h1>
                <p style={{ color: "grey", fontSize: "15px", marginBottom: "30px" }}>Подарим подарок на день рождения, сохраним адрес доставки и расскажем об акциях</p>
                <label className='number'>Номер телефона
                    <input className={css.number} 
                    type="number" 
                    placeholder='+996 999-000005'
                    // value={phoneNumber}
                    // onChange={handlePhoneNumber}
                     />
                    
                     <br />
                </label>
                {/* <button className={css.kod} type="text" placeholder='Выслать код'/> */}
                <button className={css.kod} 
                onClick={() => setIsKod(true)}
                // onChange={handleCode}
                >Выслать код</button>
            </div>
            <Kod isKod={isKod} setIsKod={setIsKod} />

        </div>
    )
}
