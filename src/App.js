import React, {useState} from 'react';

import {Header} from './components';
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";

const App = () => {
    const [pizzas, setPizzas] = useState([])

    React.useEffect(() => {
        fetch('http://localhost:3000/db.json')
            .then((res) => res.json())
            .then(json => {
                setPizzas(json.pizzas);
            })
    }, []);

    console.log(pizzas);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path="/">
                    <Home items={pizzas}/>
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>


            </div>
        </div>
    );
}

export default App;
