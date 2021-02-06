import React, {useState} from 'react';

import {Header} from './components';
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";
import axios from 'axios';

const App = () => {
    const [pizzas, setPizzas] = useState([])

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({data}) => setPizzas(data.pizzas))
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
