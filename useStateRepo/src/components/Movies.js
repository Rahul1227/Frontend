import React from 'react'

const Movies = (props) => {
  return (
    <div className='image'>
        <img src={props.img} className='realimg'/>
        <p>{props.title}</p>
        <p>Year={props.year}</p>

    </div>
  )
}

export default Movies