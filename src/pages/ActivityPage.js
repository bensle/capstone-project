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
  onShowConfirmationModal,
  onCloseConfirmationModal,
  onToggleFavorites,
  activities,
}) {
  return (
    <>
      <DurationFilter onFilterDurationReset={onFilterDurationReset} onFilterDurationValue={onFilterDurationValue} />
      <TypeFilter onFilterTypeReset={onFilterTypeReset} onFilterTypeValue={onFilterTypeValue} />
      <ActivityCards
        activities={activities}
        onToggleFavorites={onToggleFavorites}
        onCloseConfirmationModal={onCloseConfirmationModal}
        onShowConfirmationModal={onShowConfirmationModal}
        onDeleteActivity={onDeleteActivity}
        showModalConfirmation={showModalConfirmation}
      />
    </>
  );
}
