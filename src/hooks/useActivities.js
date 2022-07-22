import {useState} from 'react';

import db from '../services/activityDB';

import useLocalStorage from './useLocalStorage';

export default function useActivities() {
  const [activities, setActivities] = useLocalStorage('activities', db);
  const [typeFilterValue, setTypeFiltervalue] = useState('all');
  const [durationFilterValue, setDurationFilterValue] = useState('all');
  const [showModalConfirmation, setShowModalConfirmation] = useState({show: false, id: null, name: ''});

  //----- Filter (Duration & Type) -----------------------------------------------------------------------------------------
  const filteredActivities = activities.filter(data => {
    return (
      (durationFilterValue === 'all' && typeFilterValue === 'all') ||
      ((data.duration === durationFilterValue || durationFilterValue === 'all') &&
        (data.type === typeFilterValue || typeFilterValue === 'all'))
    );
  });
  const filterDurationReset = () => {
    setDurationFilterValue('all');
  };
  const filterTypeReset = () => {
    setTypeFiltervalue('all');
  };
  const durationValue = value => {
    setDurationFilterValue(value);
  };
  const typeValue = value => {
    setTypeFiltervalue(value);
  };
  //----- Toggle Favorites & set to state/localstorage -----------------------------------------------------------------------------------------
  const toggleFavorites = id => {
    const index = activities.findIndex(activity => activity.id === id);
    const newFavorite = activities.find(activity => activity.id === id);
    const tempFavorites = [
      ...activities.slice(0, index),
      {...newFavorite, isFavorite: !newFavorite.isFavorite},
      ...activities.slice(index + 1),
    ];
    setActivities(tempFavorites);
  };

  //----- handle delete Activities & confirmation Modal -----------------------------------------------------------------------------------------

  function deleteActivity(id) {
    if (showModalConfirmation.show && showModalConfirmation.id) {
      const newActivities = activities.filter(acti => acti.id !== showModalConfirmation.id);
      setActivities(newActivities);
      setShowModalConfirmation({
        show: false,
        id: null,
      });
    }
  }
  const showModalConfirmationHandler = id => {
    const newDelete = activities.find(activity => activity.id === id);
    setShowModalConfirmation({show: true, id: id, name: newDelete.name});
  };
  const closeModalConfirmationHandler = () => {
    setShowModalConfirmation({show: false, id: null, name: ''});
  };

  function setActivityHandler(value) {
    setActivities(current => [...current, value]);
  }

  return {
    activities,
    setActivities,
    filteredActivities,
    filterDurationReset,
    filterTypeReset,
    typeValue,
    durationValue,
    toggleFavorites,
    deleteActivity,
    showModalConfirmationHandler,
    closeModalConfirmationHandler,
    setActivityHandler,
    showModalConfirmation,
  };
}
