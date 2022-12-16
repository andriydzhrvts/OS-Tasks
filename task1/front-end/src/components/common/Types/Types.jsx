import React from 'react';
import Type from './Type/Type';

import styles from './Types.module.scss';

const Types = (props) => {
  return (
    <div className={styles.typesBar}>
      {props.list.map((type, idx) => (
        <Type key={idx} type={type} />
      ))}
    </div>
  );
};

export default Types;
