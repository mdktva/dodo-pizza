import css from './HomePage.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliderinfo from '../../components/sliderInfo/SliderInfo';
import { useEffect, useState } from "react";
import InfoPizza from './../../components/infoPizza/InfoPizza';
import Order from './../../components/order/Order';

export default function HomePage() {

    const [pizza, setPizza] = useState([]);

    useEffect(() => {
        fetch('https://625eaad13b039517f1fa0794.mockapi.io/dodo')
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPizza(data);
            })
            .catch((error) => console.log(error))
    }, []);

    return (
        <div >
            <Sliderinfo />
            <Order />

            <div className="container">
                <h1>Пицца</h1>
                <div className={css.pcontainer}>
                    {
                        pizza.map((item) => <InfoPizza
                            id={item.id}
                            title={item.title}
                            img={item.image}
                            description={item.description}
                            price={item.price}
                        />)
                    }
                </div>
            </div>


        </div>
    )
}
