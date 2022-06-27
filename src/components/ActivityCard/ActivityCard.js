// import styled from 'styled-components';
import {useState} from 'react';

import db from '../../lib/activityDB';

import CardWrapper from './ActivityCardStyle';

export default function ActivityCard() {
  const [activities, setActivities] = useState(db);

  return (
    <CardWrapper>
      {activities.map(activity => {
        return (
          <section key={activity.id}>
            <h2>{activity.name}</h2>
            <h3>{activity.location}</h3>
            {activity.duration === 'short' ? (
              <p>Day trip</p>
            ) : activity.duration === 'weekend' ? (
              <p>Weekend Trip</p>
            ) : (
              <p>3 days +</p>
            )}
            <a href={activity.infos}>Find out more</a>
          </section>
        );
      })}
    </CardWrapper>
  );
}
