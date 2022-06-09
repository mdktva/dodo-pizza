import css from './HomePage.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliderinfo from '../../components/sliderInfo/SliderInfo';
import { useEffect, useState } from "react";
import InfoPizza from './../../components/infoPizza/InfoPizza';
import Order from './../../components/order/Order';
import Halal from './../../components/halal/Halal';
import { useSelector} from 'react-redux';


export default function HomePage() {

 const pizzas = useSelector((state) => state.pizzas.data)
 console.log(pizzas)

    return (
        <div >
            <Sliderinfo />
            <div className='container'>
                <h2 style={{fontWeight:"600"}}>Часто заказывают</h2>
            </div>

            <Order />
            <Halal />


            <div className="container">
                <h1>Пицца</h1>
                <div className={css.pizzaWrapper + " container"}>

                    { pizzas.length
                        ? pizzas.map((item, index) => <InfoPizza
                            key={item.id}
                            {...item}
                        />)
                        : <h2 className={css.waterText}>Пока нет пиццы</h2>
                    }
                </div>
            </div>


        </div>
    )
}


    // const [pizza, setPizza] = useState([]);

    // useEffect(() => {
    //     fetch('https://625eaad13b039517f1fa0794.mockapi.io/dodo')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setPizza(data);
    //         })
    //         .catch((error) => console.log(error))
    // }, []);
