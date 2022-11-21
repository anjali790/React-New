import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Data } from './Data';
import './Recipe.css';
import { FaSearch } from "react-icons/fa";

export function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => {
        setRecipe([...response.data.meals]);
      });
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value)
    // console.log(e.target.value);
  }

  const updateQuery = (e) => {
    e.preventDefault();
    setQuery(search.toLocaleLowerCase());
  }

  return (
    <>
      <header>
        <div className='flex'>
          <img className='recipeLogo' height="70px" width="70px" src="https://pageflows.imgix.net/media/logos/foodvisor.png?auto=compress&ixlib=python-1.1.2&s=bec8370d698ebedc0b81cecd5cc5e417" alt=""></img>
          <h1 className='heading'>Recipe Finder</h1>
          <form onSubmit={updateQuery} className="form">
            <input className='inputBtn' type="text" value={search} onChange={updateSearch}></input>
            <button className='searchBtn' type="submit"><FaSearch className='searchIcon' /></button>
          </form>
        </div>
      </header>
      <main>
        <div className='imageDiv'>
          <img className='img1' width="400px" height="400px" src="https://play-lh.googleusercontent.com/2a51baeeaCIBHcZz0PD3nvOrGcNSw49OXJXqmwsLMNCqdWverkZcVKbvody3tBmqoEc" alt=""></img>
          <img className='img2' width="400px" height="400px" src="https://wallpaperaccess.com/full/462773.jpg" alt=""></img>
          <img className='img3' width="400px" height="400px" src="https://images6.alphacoders.com/434/434430.jpg" alt=""></img>
        </div>

        {/* {recipe.map((data) => (
          <Data title={data.strMeal} image={data.strMealThumb} instruction={data.strInstructions} />
        ))} */}

        {recipe.map((data) => (
          <div className='container'>
            <img className='recipeImg' src={data.strMealThumb} alt=""></img>
            <div className='innerDiv'>
              <h1 className='recipeName'>{data.strMeal}</h1>
              <p className='recipeInst'>{data.strInstructions}</p>
              <button className='recipeLinkBtn'><a href={data.strYoutube}>Watch Video</a></button>
            </div>
          </div>
        ))}
      </main>
    </>
  )
}