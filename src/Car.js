import { useState } from "react";

const Car = () => {

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

    const updateColor = ()=>{
        setCar(prevState => {
            return {...prevState, color:'blue'}
        });
    }

    return (
        <>
            <h1>My {car.brand}</h1>
            <p>it is a {car.color} {car.model} from {car.year}</p>
            <button type="button" onClick={updateColor} >Blue</button>
        </>
    )
}
export default Car