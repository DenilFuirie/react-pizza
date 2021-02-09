import React, {useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import {Header} from './components';
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";
import {setPizzas} from "./redux/actions/pizzas";

const App = () => {
    const dispatch = useDispatch();


    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({data}) => dispatch(setPizzas(data.pizzas)))
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/cart">
                    <Cart/>
                </Route>

            </div>
        </div>
    );
}

export default App;

