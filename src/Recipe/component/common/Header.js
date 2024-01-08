import React from 'react'

const Header = (props) => {
  return (
    
      <div className={props.bgClass}>
        <div className='text'>
            <h1 className='h1-title'>{props.title}</h1>
            {props.children}
        </div>
      </div>
    
  )
}

export default Header
