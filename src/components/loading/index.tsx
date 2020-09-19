import React from 'react';
import styles from './index.module.scss';
import loadingIcon from './img/loading.svg';

const Loading: React.FC = () => {
  return (
    <div className={`${styles.loadingContainer}`}>
      <img className={`${styles.loadingIcon}`} src={String(loadingIcon)} alt="Загрузка" />
    </div>
  );
};

export default Loading;