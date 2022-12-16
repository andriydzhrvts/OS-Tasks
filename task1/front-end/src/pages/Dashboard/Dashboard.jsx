import React, { useCallback, useContext, useEffect, useState } from 'react';

import EventList from 'components/EventsList/EventList';

import styles from './Dashboard.module.scss';
import Loader from 'components/common/Loader/Loader';
import {
  getUserEvents,
  getUserEventsTypes,
  unsubscribeToEvent,
} from 'services/EventService/UserEventService';
import { CurrentUserContext } from 'context/AppProvider';
import Types from 'components/common/Types/Types';

const Dashboard = () => {
  const { currentUser } = useContext(CurrentUserContext);

  const [types, setTypes] = useState([]);
  const [userEvents, setUserEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTypes = async () => {
    try {
      const types = await getUserEventsTypes();
      setTypes(types);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const fetchUserEvents = useCallback(async () => {
    try {
      setIsLoading(true);
      const userEvents = await getUserEvents(currentUser._id);
      const mapUserEvents = userEvents.map((item) => ({
        ...item,
        isSubscribed: true,
      }));
      setUserEvents(mapUserEvents);
      await fetchTypes();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [currentUser._id]);

  useEffect(() => {
    fetchUserEvents();
    fetchTypes();
  }, [fetchUserEvents]);

  const onClickUnsubscribe = async (eventId) => {
    try {
      await unsubscribeToEvent(eventId);
      await fetchUserEvents();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.events}>
      <h2>My events</h2>
      {types.length > 0 && <Types list={types} />}

      {isLoading ? (
        <Loader />
      ) : (
        <EventList events={userEvents} onClickUnsubscribe={onClickUnsubscribe} />
      )}
    </div>
  );
};

export default Dashboard;
