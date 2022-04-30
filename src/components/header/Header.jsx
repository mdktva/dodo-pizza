import React from 'react';
import css from './Header.module.css'

export default function Header() {
    return (
        <div className='container'>
            <div className={css.header}>
                <div className={css.left}>

                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/13/2a/f1/cd/caption.jpg" style={{width: "50px"}} alt="" />

                    <div>
                        <h1>DODO PIZZA</h1>
                    </div>

                    <div>
                        <p style={{fontSize: "20px"}}>
                            Доставка пиццы Бишкек
                        </p>
                        <p>
                            33 мин 4.73
                        </p>
                    </div>

                    <div>
                        <p style={{fontSize: "20px"}}>
                            0 (551) 550-550
                        </p>
                        <p style={{color: "grey", fontSize: "18x"}}>
                            Звонок по телефону

                        </p>
                    </div>

                </div>

                <div className={css.right}>
                    <div>
                        <p style={{fontWeight: "500"}}>Додокоины</p>
                    </div>
                    <div>
                        <a href="" className={css.login}>Войти</a>
                    </div>

                </div>
            </div>
        </div>
    );
}


