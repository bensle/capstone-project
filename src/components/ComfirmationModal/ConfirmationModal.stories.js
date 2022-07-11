import ConfirmationModal from './ConfirmationModal';
export default {
  title: 'Component/Modal',
  component: ConfirmationModal,
};

const template = args => <ConfirmationModal {...args} />;

export const DeleteConfirmation = template.bind({});
