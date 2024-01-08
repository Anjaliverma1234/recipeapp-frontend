import React, { useEffect, useState } from 'react'
import Search from '../component/Search'
import RecipeList from '../component/RecipeList'
import { getRecipes } from '../services/Api'

const Recipes = () => {

  const [searchQuery,setSearchQuery]=useState('Pizza');
  const [recipes,setRecipes]=useState([]);

    useEffect(()=>{
      getSearchResult();
    }, [searchQuery])

    const getSearchResult= async ()=>{
      let result = await getRecipes(searchQuery);
      if(result && result.recipes){
        setRecipes(result.recipes);
      }
    }
  return (
    <>
    <Search setSearchQuery={setSearchQuery}/>
    <RecipeList recipes={recipes} searchQuery={searchQuery}/>
    </>
  )
}

export default Recipes
