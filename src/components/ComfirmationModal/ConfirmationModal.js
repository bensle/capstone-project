import * as Style from './ConfirmationModal.style';
export default function ConfirmationModal({onClose, onDelete, showModalConfirmation}) {
  return (
    <Style.CancelDiv>
      <Style.Heading>
        Do you really want to
        <Style.Span> delete </Style.Span>
        <Style.DelP> {showModalConfirmation.name} ?</Style.DelP>
      </Style.Heading>
      <Style.ButtonCancel onClick={onClose}>Cancel</Style.ButtonCancel>
      <Style.ButtonConfirmation onClick={onDelete}>Delete</Style.ButtonConfirmation>
    </Style.CancelDiv>
  );
}
