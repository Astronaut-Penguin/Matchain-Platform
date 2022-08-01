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
          <div className={styles.Image2}>
            <Image src={"/assets/Home/slide2.png"} layout="fill" />
          </div>
          <h2 className={styles.Start}>
            START YOUR <b>OWN GAME</b> NOW
          </h2>
          <div className={styles.Learn}>
            <BlueButton text={"LEARN NOW"} />
          </div>
          <div className={styles.Texture}>
            <Image
              src={"/assets/Home/texture.png"}
              width="100%"
              height="30%"
              layout="responsive"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className={styles.Slide}>
          <div className={styles.Image}>
            <Image src={"/assets/Home/slide1.png"} layout="fill" />
          </div>
          <h2 className={styles.Title}>WORKAHOLIC</h2>
          <div className={styles.Character}>
            <Image
              src={"/assets/Home/character.gif"}
              width="100%"
              height="100%"
              layout="responsive"
            />
          </div>
          <div className={styles.Play}>
            <BlueButton text={"PLAY NOW"} />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSection;
