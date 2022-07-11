import {ButtonConfirmation, ButtonCancel, CancelDiv} from './ConfirmationModal.style';
export default function ConfirmationModal({onClose, onDelete}) {
  return (
    <CancelDiv>
      Do you really want to delete this Activity?
      <ButtonCancel onClick={onClose}>Cancel</ButtonCancel>
      <ButtonConfirmation onClick={onDelete}>Delete</ButtonConfirmation>
    </CancelDiv>
  );
}
