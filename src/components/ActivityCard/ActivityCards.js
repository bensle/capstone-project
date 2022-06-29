import styled from 'styled-components';

import ActivityCard from './ActivityCard';
import WrapperDiv from './WrapperDivStyle';

export default function ActivityCards({activities}) {
  return (
    <>
      <Heading>Activities</Heading>
      <WrapperDiv>
        {activities.map(({id, name, location, duration, type, infos}) => (
          <ActivityCard key={id} name={name} location={location} duration={duration} type={type} infos={infos} />
        ))}
      </WrapperDiv>
    </>
  );
}

const Heading = styled.h2`
  margin: 0;
  font-size: 1.25rem;
`;
