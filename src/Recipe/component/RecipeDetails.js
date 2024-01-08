import React, { useEffect, useState } from 'react'
import { getRecipe } from '../services/Api'
import { Link, useParams } from 'react-router-dom';
import { Button, Grid,Header,Image, Segment } from 'semantic-ui-react';
import Navbar from './common/Navbar';

const RecipeDetails = () => {

    const [recipe ,setRecipe]=useState({});

    const {recipeId}=useParams();

    useEffect(()=>{
        const getData= async()=>{
       let result= await getRecipe(recipeId);
       if(result && result.recipe){
       setRecipe(result.recipe);
       }
        }
        getData();
    },[])
  return (
  
    
      
    Object.keys(recipe).length > 0 ?
    
    <Grid container stackable columns={2} className='detail-content'>
    <Navbar/>
       <Grid.Column>
           <Button
              as={Link}
              to={'/recipes'}
              content='Back to Recipe List'
              color='orange'
              style={{marginBottom:"50px"}}
           />
           <Image src={recipe.image_url}/>
       </Grid.Column>
       <Grid.Column>
         <Header size='medium'>{recipe.title}</Header>
         <p>Provider By:{recipe.publisher}</p>
         <Button
              as={'a'}
              href={recipe.publisher_url}
              target='_blank'
              content='Publisher Web Page'
              color='blue'
            />
            <Button
              as={'a'}
              href={recipe.source_url}
              target='_blank'
              content='Recipe URL'
              color='yellow'
            />
            <Header size='large' content='Ingredients'/>
            <Segment.Group>
                {
                    recipe && recipe.ingredients.map(data=>(
                        <Segment>
                         <h5>{data}</h5>
                        </Segment>
                    ))
                }
            </Segment.Group>
       </Grid.Column>
    </Grid> :null
    
     
  )
}

export default RecipeDetails
