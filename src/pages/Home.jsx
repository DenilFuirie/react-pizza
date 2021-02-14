import React from 'react';
import {Categories, SortPopup, PizzaBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from '../redux/actions/filters'
import {fetchPizzas} from "../redux/actions/pizzas";
import LoadingBlock from "../components/PizzaBlock/LoadingBlock";

const categoryNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [{name: 'популярности', type: 'popular'}, {name : 'цене', type: 'price'}, {name: 'алфавиту', type: 'alphabet'},]

const Home = ( ) => {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({filters}) => filters);
    console.log(category, sortBy)

    React.useEffect(() => {

        dispatch(fetchPizzas());
    }, [category]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}/>
                <SortPopup
                    activeSortType={sortBy}
                    items={sortItems}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((obj) => <PizzaBlock isLoading={true} key={obj.id} {...obj}/>)
                    : Array(12).fill(0).map((_, index) => <LoadingBlock key={index}/>)}


            </div>
        </div>
    )
};

export default Home;