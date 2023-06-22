import React from 'react'
import style from './clientsinfo.module.scss';


const ClientsInfo = (props) => {
  return (
        <div className={style.clent_wrapper}>
            <img src={props.img} alt="img" />
            <div className="client_info">
                <p>{props.clients}</p>
                <span>{props.number}</span>
            </div>
        </div>
  )
}

export default ClientsInfo