import React from 'react';
import style from "./recipe.module.css";

const Recipe = ({title, calories, image, dietLabels, ingredients}) =>{
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
           
            <h3>Calories : {calories}</h3>
               <ol>
                   {ingredients.map(ingredient =>(
                       <li>{ingredient.text}</li>
                   ))}
               </ol>
            <h3>Diet Label : {dietLabels}</h3>

           
            <img className={style.image}src={image} alt=""/>

        </div>
    )
}

export default Recipe;

