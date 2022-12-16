import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styles from './SidebarList.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faBook, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

// Services
import { authService } from 'services/authService';

export const SidebarList = () => {
  const navigate = useNavigate();

  const logout = () => {
    authService.logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className='sidebarMenu'>
      <List className={styles.sidebarList}>
        <ListItem className={styles.sidebarItem}>
          <Link to='/app/dashboard' className={styles.sidebarLink}>
            <FontAwesomeIcon className={styles.sidebarIcon} icon={faHouseUser} />
            Dashboard
          </Link>
        </ListItem>
        <ListItem className={styles.sidebarItem}>
          <Link to='/app/events' className={styles.sidebarLink}>
            <FontAwesomeIcon className={styles.sidebarIcon} icon={faBook} />
            All Events
          </Link>
        </ListItem>
        <ListItem className={styles.sidebarItem}>
          <NavLink onClick={logout} to='/login' className={styles.sidebarLink}>
            <FontAwesomeIcon className={styles.sidebarIcon} icon={faRightFromBracket} />
            Logout
          </NavLink>
        </ListItem>
      </List>
    </div>
  );
};
