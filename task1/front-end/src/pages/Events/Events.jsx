import React, { useContext, useEffect, useState } from 'react';

//Components
import EventList from 'components/EventsList/EventList';

//Styles
import styles from './Events.module.scss';
import { getEvents } from 'services/EventService/EventService';
import Loader from 'components/common/Loader/Loader';
import { CurrentUserContext } from 'context/AppProvider';
import {
  getUserEvents,
  subscribeToEvent,
  unsubscribeToEvent,
} from 'services/EventService/UserEventService';

const Events = () => {
  const { currentUser } = useContext(CurrentUserContext);

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState('');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setIsLoading(true);
      const userEvents = await getUserEvents();
      const events = await getEvents();
      const subscribedEvents = events.map((item) => {
        const userEvent = userEvents.find((userEvent) => userEvent.eventId === item._id);
        return {
          ...item,
          isSubscribed: userEvent ? true : false,
          userEventId: userEvent?._id ?? null,
        };
      });
      setEvents(subscribedEvents);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickSubscribe = async (eventId) => {
    try {
      setIsButtonLoading(eventId);
      const eventForSubscribe = events.find((item) => item?._id === eventId);
      const userEvent = {
        userId: currentUser._id,
        eventId: eventForSubscribe._id,
        name: eventForSubscribe.name,
        description: eventForSubscribe.description,
        img: eventForSubscribe.img,
        type: eventForSubscribe.type,
      };
      const userEventData = await subscribeToEvent(userEvent);
      const updatedEvents = events.map((item) =>
        item?._id === eventId
          ? { ...item, isSubscribed: true, userEventId: userEventData._id }
          : item,
      );
      setEvents(updatedEvents);
      setIsButtonLoading('');
    } catch (error) {
      console.log(error);
    }
  };

  const onClickUnsubscribe = async (eventId) => {
    try {
      setIsButtonLoading(eventId);
      const event = events.find((item) => item?._id === eventId);

      await unsubscribeToEvent(event?.userEventId);

      const updatedEvents = events.map((item) =>
        item?._id === eventId ? { ...item, isSubscribed: false } : item,
      );
      setEvents(updatedEvents);
      setIsButtonLoading('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.events}>
      <h2>Pending events</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <EventList
          events={events}
          isButtonLoading={isButtonLoading}
          onClickSubscribe={onClickSubscribe}
          onClickUnsubscribe={onClickUnsubscribe}
        />
      )}
    </div>
  );
};

export default Events;
