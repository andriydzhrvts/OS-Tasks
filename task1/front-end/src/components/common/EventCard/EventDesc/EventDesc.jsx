import React from 'react';
import styles from './EventDesc.module.scss';

import { LoadingButton } from '@mui/lab';

const EventDesc = (props) => {
  const buttonLabel = props.event.isSubscribed ? 'Unsubscribe' : 'Subscribe';

  const onClick = () => {
    props.event.isSubscribed
      ? props.onClickUnsubscribe(props.event._id)
      : props.onClickSubscribe(props.event._id);
  };

  return (
    <div className={styles.eventDesc}>
      <div className={styles.eventInfo}>
        <div className={styles.dFlex}>
          <div className={styles.eventTitle}>{props.event.name}</div>
        </div>
      </div>
      <LoadingButton
        loading={props.isButtonLoading}
        onClick={onClick}
        type='submit'
        variant='contained'
        sx={{ margin: '15px 0' }}
      >
        {buttonLabel}
      </LoadingButton>
    </div>
  );
};

export default EventDesc;
