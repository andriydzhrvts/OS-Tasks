import React from 'react';

//Styles
import styles from './EventList.module.scss';

//Components
import EventCard from 'components/common/EventCard/EventCard';

const EventList = (props) => {
  return (
    <div className={styles.events}>
      {props.events.length ? (
        props.events.map((item) => (
          <EventCard
            key={item._id}
            event={item}
            isButtonLoading={props.isButtonLoading === item._id ? true : false}
            onClickSubscribe={props.onClickSubscribe}
            onClickUnsubscribe={props.onClickUnsubscribe}
          />
        ))
      ) : (
        <div style={{ marginLeft: '12px' }}>You do not have subscribed events now!</div>
      )}
    </div>
  );
};

export default EventList;
