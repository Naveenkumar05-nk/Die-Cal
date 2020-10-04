import React from 'react';
import style from "./recipe.module.css";

const Recipe = ({title, calories, image, dietLabels}) =>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
           
            <h3>Calories : {calories}</h3>
            <h3>Diet Label : {dietLabels}</h3>

           
            <img className={style.image}src={image} alt=""/>

        </div>
    )
}

export default Recipe;

