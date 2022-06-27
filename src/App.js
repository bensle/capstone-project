import styled from 'styled-components';

import ActivityCard from './components/ActivityCard/ActivityCard';
import DurationFilter from './components/DurationFilterButton/DurationFilter';

export default function ActivityApp() {
  return (
    <Appcontainer>
      <DurationFilter />
      <ActivityCard />
    </Appcontainer>
  );
}
const Appcontainer = styled.div`
  display: grid;
  height: 100vh;
`;
