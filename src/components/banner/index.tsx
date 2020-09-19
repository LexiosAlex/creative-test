import React from "react";
import styles from "./index.module.scss";

interface IBannerProps {
  title: string;
  backgroundSrc: string;
}

const Banner: React.FC<IBannerProps> = ({ title, backgroundSrc }) => {
  return (
    <section
      style={{ backgroundImage: `url(${backgroundSrc})` }}
      className={styles.bannerContainer}
    >
      <div className={styles.banner}>
        <h2>{title}</h2>
      </div>
    </section>
  );
};

export default Banner;
