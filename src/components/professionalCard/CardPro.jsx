import React from 'react'
import style from './cardpro.module.scss';


const CardPro = (pros) => {
  return (
        <div className={style.card}>
            <img src={pros.img} alt="" />
            <h3>{pros.title}</h3>
            <p>{pros.description}</p>
        </div>
  )
}

export default CardPro
