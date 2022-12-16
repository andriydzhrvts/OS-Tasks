import React from 'react';
import styles from './EventImg.module.scss';

const EventImg = (props) => {
  return (
    <div className={styles.eventImg}>
      {props.image ? (
        <img src={props.image} alt={props.name} />
      ) : (
        <p className={styles.noImage}>{props.name}</p>
      )}
    </div>
  );
};

export default EventImg;
