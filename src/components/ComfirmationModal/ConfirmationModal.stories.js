import ConfirmationModal from './ConfirmationModal';
export default {
  title: 'Component/Modal',
  component: ConfirmationModal,
};

const template = args => <ConfirmationModal showModalConfirmation {...args} />;

export const DeleteConfirmation = template.bind();
DeleteConfirmation.args = {
  name: 'Freudenberg',
};
