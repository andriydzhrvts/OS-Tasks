import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import { SidebarList } from 'components/SidebarList/SidebarList';

import { CurrentUserContext } from 'context/AppProvider';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      <aside className={styles.sidebar}>
        <Typography variant='h6' color='#7f839a'>{`${currentUser.email}`}</Typography>
        <SidebarList />
      </aside>
      <Outlet />
    </>
  );
};
