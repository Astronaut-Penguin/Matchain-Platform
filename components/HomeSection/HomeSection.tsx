// IMPORT REACT
import React from "react";

// IMPORT STYLES
import styles from "./HomeSection.module.css";

// IMPORT COMPONENT
import BlueButton from "../../components/BlueButton/BlueButton";

//Next image
import Image from "next/image";

// IMPORT SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

type HomeProps = {
  style?: React.CSSProperties;
};

const HomeSection: React.FC<HomeProps> = () => {
  ////////////
  // RENDER //
  ////////////
  return (
    <div className={styles.Container} id="home">
      <Swiper
        pagination={{
          el: ".my-custom-pagination-div",
          clickable: true,
          renderBullet: (index, className) => {
            return '<span class="' + className + '">' + "" + "</span>";
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className={styles.Slide}>
          <Image
            src={"/assets/Home/slide2.png"}
            layout="fill"
            className={styles.Image2}
          />
          <Image
            src={"/assets/Home/texture.png"}
            layout="fill"
            className={styles.Texture}
          />
          <h2 className={styles.Start}>
            START YOUR <b>OWN GAME</b> NOW
          </h2>
          <div className={styles.Learn}>
            <BlueButton text={"LEARN NOW"} />
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.Slide}>
          <Image
            src={"/assets/Home/slide1.png"}
            layout="fill"
            className={styles.Image}
          />
          <h2 className={styles.Title}>WORKAHOLIC</h2>
          <Image
            src={"/assets/Home/character.gif"}
            layout="fill"
            className={styles.Character}
          />
          <div className={styles.Play}>
            <BlueButton text={"PLAY NOW"} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSection;
