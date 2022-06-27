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
            <ul role="list">
              <li>{activity.location}</li>
              {activity.duration === 'short' ? (
                <li>Day trip</li>
              ) : activity.duration === 'weekend' ? (
                <li>Weekend Trip</li>
              ) : (
                <li>3 days +</li>
              )}
              <li>{activity.type}</li>
              <li>
                <a href={activity.infos}>Find out more</a>
              </li>
            </ul>
          </section>
        );
      })}
    </CardWrapper>
  );
}
