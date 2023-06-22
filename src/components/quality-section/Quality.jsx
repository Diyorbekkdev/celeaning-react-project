import React from 'react'
import Button from '../Button/Button'
import ContactUs from '../calling/ContactUs'
import style from './quality.module.scss';
import hero from '../../assets/images/sister.png';


function Quality() {
  return (
        <section id='home' className={style.home}>
            <div className="container">
                <div className={style.quality_wrapper}>
                    <h1>Quality cleaning for your home</h1>
                    <p>Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
                    <div className={style.quality_contact}>
                        <Button text={"Get a free quote"}/>
                        <ContactUs/>
                    </div>
                </div>
            </div>
            <img className={style.hero_img} src={hero} alt="Hero" />
        </section>
  )
}

export default Quality