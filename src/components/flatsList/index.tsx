import React from "react";

import { IMappedRoom } from "../../utils/interfaces/flatsData";
import Flat from "../flat";
import styles from "./index.module.scss";
import Loading from "../loading";

interface IFlatsListProps {
  flats: IMappedRoom[];
  isLoading: boolean;
}

const FlatsList: React.FC<IFlatsListProps> = ({ flats, isLoading }) => {
  return (
    <section className={styles.flatsList}>
      <h2 className={styles.sectionTitle}>Наша подборка</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.flatsListContainer}>
          {flats.map(flat => (
            <Flat {...flat} key={flat.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default FlatsList;
