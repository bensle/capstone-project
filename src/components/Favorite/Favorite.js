import {MdWbSunny} from 'react-icons/md';
import {MdDeleteForever} from 'react-icons/md';

import {SpanAdd, FavButtonDelete} from '../ActivityCard/ActivityCardStyle';
import Backdrop from '../ComfirmationModal/Backdrop';
import ConfirmationModal from '../ComfirmationModal/ConfirmationModal';

import {FavDiv, FavButton, Section} from './FavoriteStyle';

export default function Favorite({
  name,
  location,
  duration,
  type,
  infos,
  id,
  onToggleFavorites,
  onDelete,
  onShowConfirmationModal,
  onCloseConfirmationModal,
  showModalConfirmation,
}) {
  return (
    <Section>
      <FavDiv>
        <FavButton onClick={() => onToggleFavorites(id)}>
          <MdWbSunny />
        </FavButton>
        <FavButtonDelete aria-label="Delete Activity" onClick={() => onShowConfirmationModal(id)}>
          <SpanAdd>
            <MdDeleteForever />
          </SpanAdd>
        </FavButtonDelete>
      </FavDiv>
      <h2>{name}</h2>
      <h3>{location}</h3>
      {/* eslint-disable-next-line */}
      <ul role="list">
        {duration === 'short' ? <li>Day trip</li> : duration === 'weekend' ? <li>Weekend Trip</li> : <li>3 Days +</li>}
        <li>{type}</li>
      </ul>
      <a href={infos}>Find out more</a>
      {showModalConfirmation.show && <Backdrop onClick={onCloseConfirmationModal} />}
      {showModalConfirmation.show && <ConfirmationModal onClose={onCloseConfirmationModal} onDelete={onDelete} />}
    </Section>
  );
}
