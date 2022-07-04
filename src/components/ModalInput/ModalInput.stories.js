import ModalInput from './ModalInput';
export default {
  title: 'Component/Input',
  component: ModalInput,
  argTypes: {onFilterDurationValue: {action: 'click'}, onFilterDurationReset: {action: 'click'}},
};

const template = args => <ModalInput {...args} />;

export const Duration = template.bind({});
