import css from './Admin.module.css'
import { useState } from 'react'
import Api from '../../api/Api';
import { useDispatch } from 'react-redux';
import { SET_AUTH } from '../../redux/ActionTypes';



export default function Admin() {
    const submit = (e) => {
        e.preventDefault();

        alert(login + " " + password);
        dispatch(
            {
                type: SET_AUTH,
                payload: { token: "lorem10000" }
            }
        )
        Api.auth({ login, password }).then((res) => {
            if (res.data.token) {
                // setAuth(res.data)


            } else {
                alert("Something wrong, please try later")
            }
        })

    }
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState()
    const dispatch = useDispatch();



    const [state, setState] = useState([]);

    return (
        <form onSubmit={submit} className={css.main}>
            <label htmlFor="">
                login
            </label>
            <br /> <input className={css.inputAdmin} type="text" placeholder="login"
                value={login}
                onChange={(e) => { setLogin(e.target.value) }}
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

