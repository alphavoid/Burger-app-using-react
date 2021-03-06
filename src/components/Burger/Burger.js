import React from 'react';   
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    console.log(props);
    let transformIngredients = Object.keys(props.ingredients)
    .map( igKey => {
        return[...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        }); //[,] Array with 2 elements --> use map --> convert string to array
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, [] );
    if (transformIngredients.length == 0){
        transformIngredients = <p>Please start adding ingredients.</p>
    }
    // console.log(transformIngredients);
    return (
        <div className={"Burger"}>
            <BurgerIngredient type="bread-top" />
            {transformIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;