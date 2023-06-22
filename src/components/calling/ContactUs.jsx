import React from 'react'
import phoneIcon from '../../assets/images/phone.svg';
import Style from './contact.module.scss';
function ContactUs() {
  return (
    <div className={Style.calling}>
        <img className={Style.calling_icon} src={phoneIcon} alt="phone" />
        <div className={Style.wrapper_calling}>
            <p>Call us now</p>
            <span>(414) 567 - 2109</span>
        </div>
    </div>
  )
}

export default ContactUs