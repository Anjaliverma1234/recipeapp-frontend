import React from 'react'
import {Menu} from "semantic-ui-react" 
import logo from '../../assets/my-recipes-logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
   const res=localStorage.getItem("user");
  const user=JSON.parse(res);
 const handleLogout=()=>{
  localStorage.clear();
 }
  return (
    <>
      <Menu borderless fixed='top' >
      <Menu.Item>
        <img src={logo} style={{width:"100px"}}/>
      </Menu.Item>
        <Menu.Item name="Home" as={Link} to='/home' style={{fontSize:"20px"}}/>
        {/* <Menu.Item name='Recipes' as={Link} to='/recipes' style={{fontSize:"20px"}}/> */}
        <Menu.Item>
          <button style={{marginLeft:"1100px", width:"100px", height:"40px",fontSize:"18px",backgroundColor:"aqua"}}><Link  
          style={{textDecoration:"none"}} 
          to="/" onClick={handleLogout}>Logout</Link></button>
        </Menu.Item>
      </Menu>
    </>
  )
}

export default Navbar

