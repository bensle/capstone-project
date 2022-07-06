import {nanoid} from 'nanoid';
import {useState} from 'react';
import styled from 'styled-components';

import Backdrop from '../ModalInput/Backdrop';
import ModalInput from '../ModalInput/ModalInput';

import ActivityCard from './ActivityCard';
import WrapperDiv from './WrapperDivStyle';

export default function ActivityCards({activities, onSetActivities, favorite, onSetFavorite, ishidden, onSetIsHidden}) {
  const [showModal, setShowModal] = useState();
  const [formInput, setFormInput] = useState({id: '', name: '', location: '', duration: '', type: '', infos: ''});

  //----- Handling Favorites -----
  const addToFavorite = id => {
    if (!favorite.includes(id)) onSetFavorite(favorite.concat(id));
    onSetIsHidden(!ishidden);
  };

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
        name: formInput.name.trim().replace(/[^a-z]/gi, ' '),
        location: formInput.location.trim().replace(/[^a-z]/gi, ' '),
        duration: formInput.duration,
        type: formInput.type,
        infos: newInfos,
      },
    ]);
    closeModalHandler();
  };
  //----- Show & Hide Input Modal -----
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
          <ActivityCard
            id={id}
            key={id}
            name={name}
            location={location}
            duration={duration}
            type={type}
            infos={infos}
            onAddFavorite={addToFavorite}
          />
        ))}
      </WrapperDiv>
      <button onClick={showModalHandler}>Add Activity</button>
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
