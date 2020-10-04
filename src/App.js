import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = "428f83c4";
  const APP_KEY = "ba9704b500c71aacf7eb82f667f613a0";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");             /* For the updation in the search bar*/
  const [query, setQuery] = useState("chicken");       /*To set a query in the search bar and created to stop the continous calling of the API*/
  
  
  useEffect(() => {
  getRecipes();                       /*this empty array at the last makes use effect to only render one time unless something is passed into it a parameter*/
  },[query]);                          /* useEffect will run on when the query is been changed */

  const getRecipes = async () => {
    const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e =>{
    setSearch(e.target.value);
                                               /*Event for searching things in the search bar*/
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch(''); 
                                          /*To prevent the page reload*/
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" placeholder="Type foody stuff"type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">Search</button>
     </form>
     <div className="recipes">     
       {recipes.map(recipe =>(
       <Recipe 
       key={recipe.recipe.label}
       title={recipe.recipe.label} calories={recipe.recipe.calories}
       dietLabels={recipe.recipe.dietLabels}
       image={recipe.recipe.image}
      />
     ))}
     
     </div>
     <div className="Footer">
     <p>Made with ❤ by Naveen Jangid</p>

     </div>
     
 
    </div>
  )
}

export default App;
