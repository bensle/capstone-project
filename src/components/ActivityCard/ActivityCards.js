import styled from 'styled-components';

import ActivityCard from './ActivityCard';
import WrapperDiv from './WrapperDivStyle';

export default function ActivityCards({
  activities,
  onToggleFavorites,
  onCloseConfirmationModal,
  onShowConfirmationHandler,
  onDeleteActivity,
  showModalConfirmation,
}) {
  return (
    <WrapperDiv>
      <Heading>Activities</Heading>
      <WrapperDiv>
        {activities.map(({id, name, location, duration, type, infos, isFavorite}) => (
          <ActivityCard
            isFavorite={isFavorite}
            id={id}
            key={id}
            name={name}
            location={location}
            duration={duration}
            type={type}
            infos={infos}
            onToggleFavorites={onToggleFavorites}
            onDelete={() => onDeleteActivity(id)}
            onShowConfirmationModal={() => onShowConfirmationHandler(id)}
            onCloseConfirmationModal={onCloseConfirmationModal}
            showModalConfirmation={showModalConfirmation}
          />
        ))}
      </WrapperDiv>
    </WrapperDiv>
  );
}

const Heading = styled.h2`
  margin: 0;
  font-size: 1.25rem;
`;
