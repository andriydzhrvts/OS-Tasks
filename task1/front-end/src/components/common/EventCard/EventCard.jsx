import React from 'react';
import styles from './EventCard.module.scss';

import EventDesc from './EventDesc/EventDesc';
import EventImg from './EventImg/EventImg';

const EventCard = (props) => {
  return (
    <div className={styles.eventItem}>
      <div className={styles.eventWrapper}>
        <div className={styles.eventBody}>
          <EventImg image={props.event.img} name={props.event.name} />
          <EventDesc
            event={props.event}
            isButtonLoading={props.isButtonLoading}
            onClickSubscribe={props.onClickSubscribe}
            onClickUnsubscribe={props.onClickUnsubscribe}
          />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
