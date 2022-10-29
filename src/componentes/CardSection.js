import React from 'react'
import "./Cards.css"

const CardSection = (props) => {
  return (
    <section className='cardSection'>
      {props.children}
    </section>
  )
}

export default CardSection