import styled from 'styled-components';

import ActivityCards from '../components/ActivityCard/ActivityCards';
import DurationFilter from '../components/DurationFilterButton/DurationFilter';
import Header from '../components/Header/Header';
import TypeFilter from '../components/TypeFilterButton/TypeFilter';
import useActivities from '../hooks/useActivities';

export default function ActivityPage() {
  const {
    filterDurationReset,
    filterTypeReset,
    typeValue,
    durationValue,
    filteredActivities,
    toggleFavorites,
    showModalConfirmation,
    deleteActivity,
    showModalConfirmationHandler,
    closeModalConfirmationHandler,
  } = useActivities();
  return (
    <Main>
      <Header />
      <FilterWrapper>
        <DurationFilter onFilterDurationReset={filterDurationReset} onFilterDurationValue={durationValue} />
        <TypeFilter onFilterTypeReset={filterTypeReset} onFilterTypeValue={typeValue} />
      </FilterWrapper>
      <ActivityCards
        activities={filteredActivities}
        onToggleFavorites={toggleFavorites}
        onCloseConfirmationModal={closeModalConfirmationHandler}
        onShowConfirmationModal={showModalConfirmationHandler}
        onDeleteActivity={deleteActivity}
        showModalConfirmation={showModalConfirmation}
      />
    </Main>
  );
}

const Main = styled.main`
  display: grid;
  height: 100vh;
  align-content: start;
  @media (min-width: 600px) {
    grid-template-columns: 0.1fr 0.8fr 2.1fr;
  }
`;
const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--bgcolor);
  padding: 10px 10px 10px 10px;
  border-radius: 10px;
  @media (min-width: 650px) {
    display: flex;
    flex: wrap;
    flex-direction: column;
    width: 25vw;
    overflow-y: auto;
    padding-bottom: 20px;
  }
`;
