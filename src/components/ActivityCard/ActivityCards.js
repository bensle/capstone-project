import ActivityCard from './ActivityCard';
import {WrapperDiv} from './WrapperDivStyle';

export default function ActivityCards({
  activities,
  onToggleFavorites,
  onCloseConfirmationModal,
  onShowConfirmationModal,
  onDeleteActivity,
  showModalConfirmation,
}) {
  return (
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
          onShowConfirmationModal={() => onShowConfirmationModal(id)}
          onCloseConfirmationModal={onCloseConfirmationModal}
          showModalConfirmation={showModalConfirmation}
        />
      ))}
    </WrapperDiv>
  );
}
