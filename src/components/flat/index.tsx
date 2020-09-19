import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {useDispatch} from "react-redux";

import Button from "../button";
import { IMappedRoom } from "../../utils/interfaces/flatsData";
import {addFeatured, removeFeatured} from "../../actions/flats";

import styles from "./index.module.scss";

const Flat: React.FC<IMappedRoom> = ({
  id,
  isFeatured,
  address,
  areaDesc,
  price,
  imgSrc,
  rel,
  title
}) => {
  const dispatch = useDispatch();

  return (
    <article key={id} className={styles.flat}>
      <div className={styles.imgContainer}>
        <img src={imgSrc} alt="Изображение квартиры" />
      </div>
      <div className={styles.flatInfo}>
        <h3>{title}</h3>
        <b className={styles.flatPrice}>{price} ₽</b>
        <a className={styles.flatArea} href="#">
          {areaDesc}
        </a>
        <p className={styles.flatAddress}>{address}</p>
      </div>
      <div className={styles.flatRelations}>
        <div className={styles.flatRelationsImgContainer}>
          <img
            width="48px"
            height="48px"
            alt="изображение агента"
            src={rel.imgSrc}
          />
        </div>
        <div className={styles.flatRelationsInfo}>
          <p className={styles.relationsName}>{rel.name}</p>
          <p className={styles.relationsType}>{rel.type}</p>
        </div>
      </div>
      <div className={styles.flatControls}>
        <Button
          onClick={() => {isFeatured ? dispatch(removeFeatured(id)) : dispatch(addFeatured(id))}}
          className={isFeatured ? styles.featuredBtn : ""}
          icon={isFeatured ? <AiFillHeart /> : <AiOutlineHeart />}
        >
          <span>Добавить в избранное</span>
        </Button>
        <Button>
          <span>Показать телефон</span>
        </Button>
      </div>
    </article>
  );
};

export default Flat;
