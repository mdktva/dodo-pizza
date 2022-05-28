import React from 'react';
import css from './CreatePizza.module.css';
import { useState } from 'react';
import Api from './../../api/Api';
import {useNavigate} from 'react-router-dom'

export default function CreatePizza({addNewPizza, setBasket, basket,}) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    const onDelete = (id) => {
        const newArr = basket.filter((item) => item.id !== id)
        setBasket([...newArr])
      }

    const submit = (e) =>{
        e.preventDefault();
    
        const data = {
            title: name,
            price: price,
            description: description,
            img: ""
        }
        // api.post("dodo", data)
        Api.createPizza(data)
        .then((res) =>{
            console.log(res);
            addNewPizza(res.data)
            navigate("/dashboard");
        })
    }


    return (
        <form onSubmit={submit} className={css.wrapper}>
            <h1>Cоздать новую пиццу</h1>
            <label className={css.inputWrapper}>
                <span>Название</span>
                <input type="text" placeholder='Name' 
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                />
            </label>

            <label className={css.inputWrapper}>
                <span>Описание</span>
                <input type="text" placeholder='Description' 
                value={description}
                onChange={(e)=>{setDescription(e.target.value)}}
                />
            </label>


            <label className={css.inputWrapper}>
                <span>Цена</span>
                <input type="number" placeholder='Price' 
                value={price}
                onChange={(e) => {setPrice(e.target.value)}}
                />
            </label> <br />

            <label>
                <input className={css.file} type="file" />
                <span style={{marginRight: "20px"}}>Image</span>
                <button type='submit' className={css.btn}>+ Создать</button>
            </label>
        </form>
    );
}

