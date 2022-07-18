import styled from 'styled-components';

import ActivityCards from '../components/ActivityCard/ActivityCards';
import DurationFilter from '../components/DurationFilterButton/DurationFilter';
import Header from '../components/Header/Header';
import TypeFilter from '../components/TypeFilterButton/TypeFilter';

export default function ActivityPage({
  onFilterDurationValue,
  onFilterDurationReset,
  onFilterTypeValue,
  onFilterTypeReset,
  showModalConfirmation,
  onDeleteActivity,
  onShowConfirmationModal,
  onCloseConfirmationModal,
  onToggleFavorites,
  activities,
}) {
  return (
    <Main>
      <Header />
      <FilterWrapper>
        <DurationFilter onFilterDurationReset={onFilterDurationReset} onFilterDurationValue={onFilterDurationValue} />
        <TypeFilter onFilterTypeReset={onFilterTypeReset} onFilterTypeValue={onFilterTypeValue} />
      </FilterWrapper>
      <ActivityCards
        activities={activities}
        onToggleFavorites={onToggleFavorites}
        onCloseConfirmationModal={onCloseConfirmationModal}
        onShowConfirmationModal={onShowConfirmationModal}
        onDeleteActivity={onDeleteActivity}
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
