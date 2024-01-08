import React, { useState } from 'react'
import { Grid,Form,Input } from 'semantic-ui-react'

const Search = ({setSearchQuery}) => {
    const[value,setValue]=useState("");
    const handleSubmit=()=>{
       setSearchQuery(value);
    }

  return (
    <div>
      <Grid columns={2} textAlign='center' className='search-box'>
       <Grid.Column>
         <h2 className='search-h2'>Search Recipes with <span style={{color:"orangered"}}>Our Recipes</span></h2>
         
         <Form onSubmit={handleSubmit}>
            <Input
                placeholder="Search..."
                action={{icon: "search", color:"blue"}}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
         </Form>
       </Grid.Column>
      </Grid>
    </div>
  )
}

export default Search
