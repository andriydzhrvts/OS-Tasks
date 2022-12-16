import React from 'react';

import styles from './Type.module.scss';
import { Chip } from '@mui/material';

const Type = (props) => {
  return (
    <div className={styles.typeItem}>
      <Chip variant='outlined' label={props.type} />
    </div>
  );
};

export default Type;
