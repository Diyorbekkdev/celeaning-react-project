import React from "react";
import Card from "../CardService/Card";
import style from './service.module.scss';
import SeviceCardImg from '../../assets/images/service-1.png';
import SeviceCardImgS from '../../assets/images/service-2.png';
import SeviceCardImgTh from '../../assets/images/service-3.png';
import Button from "../Button/Button";

const Service = () => {
  const cardData = [
    { title: "1. Schedule online", 
      description: "Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.",
      img: SeviceCardImg,
     },
    { title: "2. Pay online easily", description: "Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.",
      img: SeviceCardImgS,
    },
    { title: "3. Get your house cleaned", description: "Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.",
    img:SeviceCardImgTh,
     },
  ];
  return (
    <section id="services" className={style.service}>
      <div className="container">
        <h1>How our service works?</h1>
        <p>
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque
          nisi felis non ultrices massa id egestas quam velit pretium nu.
        </p>
        <div className={style.service_wrapper_card}>
          {cardData.map((card) => (
            <Card
              img={card.img}  
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className={style.button_wrapper}>
            <Button text={"Get a free quote"}/>
            <Button text={"Explore services"}/>
        </div>
        <div className={style.line}></div>
      </div>
    </section>
  );
};

export default Service;
