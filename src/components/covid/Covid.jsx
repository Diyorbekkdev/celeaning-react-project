import React from 'react'
import image from '../../assets/images/covid.png';
import style from './covid.module.scss';
import Button from '../Button/Button';
import ContactUs from '../calling/ContactUs';

const Covid = () => {
  return (
    <div id={style.covid} className='container'>
      <div className={style.left}>
        <img src={image} alt="" />
      </div>
      <div className={style.right}>
        <h4>Covid-19 sanitization</h4>
        <h2>We follow guidelines to keep you safe from the COVID-19 virus</h2>
        <p>
          Lobortis mattis odio leo eget mauris met aliquet semper molestie
          sollicitudin congue massa mauris lectus.
        </p>
        <div className={style.connect}>
          <Button text="Get a free quote" />
          <ContactUs/>
        </div>
      </div>
    </div>
  );
}

export default Covid