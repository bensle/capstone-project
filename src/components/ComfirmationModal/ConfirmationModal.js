import * as Style from './ConfirmationModal.style';
export default function ConfirmationModal({onClose, onDelete}) {
  return (
    <Style.CancelDiv>
      <Style.Heading>
        Do you really want to <Style.Span>delete</Style.Span> this Activity?
      </Style.Heading>
      <Style.ButtonCancel onClick={onClose}>Cancel</Style.ButtonCancel>
      <Style.ButtonConfirmation onClick={onDelete}>Delete</Style.ButtonConfirmation>
    </Style.CancelDiv>
  );
}
