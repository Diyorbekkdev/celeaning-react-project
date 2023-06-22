import React, { useState, useRef } from "react";
import style from "./cleaning.module.scss";
import clientFirst from "../../assets/images/client-1.png";
import clientSecond from "../../assets/images/client-2.png";
import clientThird from "../../assets/images/client-3.png";
import video from "../../assets/video/JAVASCRIPTDA ANIMATSION MODAL (DOM PROJECTS).mp4";
import play from "../../assets/images/play.png";
import pause from "../../assets/images/pause.svg";
import ClientsInfo from "../clients-number/ClientsInfo";

const Cleaning = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleTogglePlay = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const clientsData = [
    { img: clientFirst, clients: "Clients", number: "3,480+" },
    { img: clientSecond, clients: "Jobs done", number: "12,540+" },
    { img: clientThird, clients: "Employees", number: "100+" },
  ];
  return (
    <section id="cleaning" className={style.cleaning}>
      <div className="container">
        <h1>Our cleaning services have no comparison</h1>
        <p className={style.info}>
          Lobortis mattis odio leo eget mauris met aliquet semper molestie
          sollicitudin congue massa mauris lectus vitae cras viverra gravida
          sapien.
        </p>

        <div className={style.clients_wrapper}>
          {clientsData.map((card, index) => (
            <ClientsInfo
              key={index}
              img={card.img}
              clients={card.clients}
              number={card.number}
            />
          ))}
        </div>
        <div className={style.video_container}>
          <span
            className={style.played}
            style={{ display: isPlaying ? "none" : "block" }}
          ></span>
          <span className="bg-video"></span>
          <video
            ref={videoRef}
            // muted
            className="main-video"
            src={video}
            controller
            poster="https://i.ytimg.com/vi/XH5OW46yO8I/maxresdefault.jpg"
          ></video>
          <div className={style.controls}>
            {isPlaying ? (
              <button className={style.pauseButton} onClick={handleTogglePlay}>
                <img className={style.pause} src={pause} alt="" /> Pause the
                video
              </button>
            ) : (
              <button className={style.playButton} onClick={handleTogglePlay}>
                <img className={style.pause_icon} src={play} alt="pause" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cleaning;
