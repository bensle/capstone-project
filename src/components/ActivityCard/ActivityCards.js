import {useState} from 'react';
import styled from 'styled-components';

import Backdrop from '../ModalInput/Backdrop';
import ModalInput from '../ModalInput/ModalInput';

import ActivityCard from './ActivityCard';
import WrapperDiv from './WrapperDivStyle';

export default function ActivityCards({activities}) {
  const [showModal, setShowModal] = useState();

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
        {activities.map(({id, name, location, duration, type, infos}) => (
          <ActivityCard key={id} name={name} location={location} duration={duration} type={type} infos={infos} />
        ))}
      </WrapperDiv>
      <button onClick={showModalHandler}>Add Activity</button>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && <ModalInput onClose={closeModalHandler} />}
    </WrapperDiv>
  );
}

const Heading = styled.h2`
  margin: 0;
  font-size: 1.25rem;
`;
