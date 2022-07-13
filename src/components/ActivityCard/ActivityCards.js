import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

import Backdrop from '../ModalInput/Backdrop';
import ModalInput from '../ModalInput/ModalInput';

import ActivityCard from './ActivityCard';
import WrapperDiv from './WrapperDivStyle';

export default function ActivityCards({
  activities,
  onSetActivities,
  onToggleFavorites,
  onCloseConfirmationModal,
  onShowConfirmationHandler,
  onDeleteActivity,
  showModalConfirmation,
  onNavigate,
}) {
  const [showModal, setShowModal] = useState();
  const [formInput, setFormInput] = useState({id: '', name: '', location: '', duration: '', type: '', infos: ''});
  // const [showModalConfirmation, setShowModalConfirmation] = useState({show: false, id: null});

  //----- Data from Input -----
  const handleChange = event => {
    setFormInput({...formInput, [event.target.name]: event.target.value});
  };
  //----- Submithandler (add all input as object to state and closes modal after submit) -----
  const handleSubmit = event => {
    event.preventDefault();
    const newInfos =
      formInput.infos.indexOf('https://') !== 0
        ? (formInput.infos = 'https://' + formInput.infos.trim().toLowerCase())
        : formInput.infos.trim().toLowerCase();
    onSetActivities(current => [
      ...current,
      {
        id: nanoid(),
        name: formInput.name.trim(),
        location: formInput.location.trim().replace(/[^a-z]/gi, ' '),
        duration: formInput.duration,
        type: formInput.type,
        infos: newInfos,
        isFavorite: false,
      },
    ]);
    closeModalHandler();
  };
  //----- handle Input Modal show and hide -----------------------------------------------------------------------------------------

  function showModalHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
  }

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
      <div>
        <button onClick={showModalHandler}>Add Activity</button>
        <button onClick={() => onNavigate('favorites')}>Favorites</button>
        <button onClick={() => onNavigate('map')}>Map</button>
      </div>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && (
        <ModalInput onClose={closeModalHandler} onHandleChange={handleChange} onHandleSubmit={handleSubmit} />
      )}
    </WrapperDiv>
  );
}

const Heading = styled.h2`
  margin: 0;
  font-size: 1.25rem;
`;
