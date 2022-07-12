import ModalInput from './ModalInput';
export default {
  title: 'Component/Modal',
  component: ModalInput,
};

const template = args => <ModalInput {...args} />;

export const FormInput = template.bind({});
