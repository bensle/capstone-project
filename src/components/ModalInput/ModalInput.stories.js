import ModalInput from './ModalInput';
export default {
  title: 'Component/Input',
  component: ModalInput,
};

const template = args => <ModalInput {...args} />;

export const Duration = template.bind({});
