// import {nanoid} from 'nanoid';
// import {useState} from 'react';
import styled from 'styled-components';

// import Backdrop from '../ModalInput/Backdrop';
// import ModalInput from '../ModalInput/ModalInput';

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
}) {
  // const [showModal, setShowModal] = useState();

  // const [showModalConfirmation, setShowModalConfirmation] = useState({show: false, id: null});

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
      {/* {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && (
        <ModalInput onClose={closeModalHandler} onHandleChange={handleChange} onHandleSubmit={handleSubmit} />
      )} */}
    </WrapperDiv>
  );
}

const Heading = styled.h2`
  margin: 0;
  font-size: 1.25rem;
`;
