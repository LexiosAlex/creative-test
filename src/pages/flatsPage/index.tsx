import React, { useEffect } from "react";
import { connect } from "react-redux";

import Header from "../../components/header";
import Banner from "../../components/banner";
import FlatsList from "../../components/flatsList";

import selectors from "../../selectors/flats";
import heroImg from "./img/heroImg.jpg";
import { AppState } from "../../reducers/rootReducer";
import { IAsyncReducer } from "../../utils/interfaces/AsyncReducer";

import styles from "./index.module.scss";
import { getFlatsPending } from "../../actions/flats";

interface IFlatsPageProps {
  flatsList: any;
  status: IAsyncReducer;
  fetch: Function;
}

const FlatsPage: React.FC<IFlatsPageProps> = ({ flatsList, status, fetch }) => {
  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <h1 className={styles.usabilityHidden}>Подборка лучших квартир</h1>
        <Banner title={"#Лучшие предложения"} backgroundSrc={heroImg} />
        <FlatsList flats={flatsList} isLoading={status.pending} />
      </main>
    </>
  );
};

export default connect(
  (state: AppState) => ({
    flatsList: selectors.getFilteredHeap(state),
    status: selectors.getStatus(state)
  }),
  dispatch => ({
    fetch: () => dispatch(getFlatsPending())
  })
)(FlatsPage);
