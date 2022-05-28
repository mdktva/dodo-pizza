import css from './Admin.module.css'
import { useState } from 'react'
import Api from '../../api/Api';



export default function Admin({setAuth}) {
    const submit = (e) => {
        e.preventDefault();
        // TODO: add auth logic
        alert(login + " " + password);
        Api.auth({login, password}).then((res) =>{
            if(res.data.token){
                setAuth(res.data)

            }else{
                alert("Something wrong, please try later")
            }
        })

    }
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState()


    const [state, setState] = useState([]);

    return (
        <form onSubmit={submit} className={css.main}>
            <label htmlFor="">
                login
            </label>
            <br /> <input className={css.inputAdmin} type="text"  placeholder="login"
                value={login}
                onChange={(e) => {setLogin(e.target.value)}} 

            />
            <br />

            <label htmlFor="password">
                password
            </label>
            <br />
            <input className={css.inputAdmin} type="password" placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />

            <br />
            <button type="submit">Войти</button>
        </form>
    );
}

