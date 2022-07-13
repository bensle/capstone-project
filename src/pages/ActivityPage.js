import ActivityCards from '../components/ActivityCard/ActivityCards';
import DurationFilter from '../components/DurationFilterButton/DurationFilter';
import TypeFilter from '../components/TypeFilterButton/TypeFilter';

export default function ActivityPage({
  onFilterDurationValue,
  onFilterDurationReset,
  onFilterTypeValue,
  onFilterTypeReset,
  showModalConfirmation,
  onDeleteActivity,
  onShowConfirmationHandler,
  onCloseConfirmationModal,
  onToggleFavorites,
  onSetActivities,
  activities,
}) {
  return (
    <>
      <DurationFilter onFilterDurationReset={onFilterDurationReset} onFilterDurationValue={onFilterDurationValue} />
      <TypeFilter onFilterTypeReset={onFilterTypeReset} onFilterTypeValue={onFilterTypeValue} />
      <ActivityCards
        activities={activities}
        onSetActivities={onSetActivities}
        onToggleFavorites={onToggleFavorites}
        onCloseConfirmationModal={onCloseConfirmationModal}
        onShowConfirmationHandler={onShowConfirmationHandler}
        onDeleteActivity={onDeleteActivity}
        showModalConfirmation={showModalConfirmation}
      />
    </>
  );
}