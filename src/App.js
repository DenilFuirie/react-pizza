import React, {useState} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import {Header} from './components';
import {Home, Cart} from "./pages";
import {Route} from "react-router-dom";

import {setPizzas} from "./redux/actions/pizzas";

// const App = ({items}) => {
//     console.log(items)
//     React.useEffect(() => {
//         axios.get('http://localhost:3000/db.json')
//             .then(({data}) => window.store.setPizzas(data.pizzas))
//     }, []);
//
//     return (
//         <div className="wrapper">
//             <Header/>
//             <div className="content">
//                 <Route exact path="/">
//                     <Home items={items}/>
//                 </Route>
//                 <Route exact path="/cart">
//                     <Cart/>
//                 </Route>
//
//             </div>
//         </div>
//     );
// }

class App extends React.Component {
    componentDidMount() {
        axios.get('http://localhost:3000/db.json')
            .then(({data}) => this.props.setPizzas(data.pizzas));
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Route exact path="/">
                        <Home items={this.props.items}/>
                    </Route>
                    <Route exact path="/cart">
                        <Cart />
                    </Route>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items,
        filters: state.filters
    }
}

export default connect(mapStateToProps, {
    setPizzas
})(App);
