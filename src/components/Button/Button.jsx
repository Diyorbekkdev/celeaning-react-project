import React from 'react'
import style from './button.module.scss';

function Button({text}) {
  return (
    <button className={style.quote_button}>{text}</button>
  )
}

export default Button