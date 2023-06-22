import React from "react";
import Button from "../Button/Button";
import style from "./professional.module.scss";
import pro1 from "../../assets/images/pro-1.png";
import pro2 from "../../assets/images/pro-2.png";
import pro3 from "../../assets/images/pro-3.png";
import CardPro from "../professionalCard/CardPro";

const Professional = () => {
  const cardData = [
    {
      title: "House cleaning    ",
      description:
        "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est..",
      img: pro1,
    },
    {
      title: "Office cleaning",
      description:
        "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.",
      img: pro2,
    },
    {
      title: "Industrial cleaning",
      description:
        "Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est",
      img: pro3,
    },
  ];
  return (
    <section id="professional" className={style.professional}>
      <div className="container">
        <div className={style.heading}>
          <h1>Take a look at our professional services</h1>
          <Button text={"Explore services"} />

        </div>
          <div className={style.card_wrapper}>
            {cardData.map((card, index) => (
              <CardPro
                key={index}
                img={card.img}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
      </div>
    </section>
  );
};

export default Professional;
