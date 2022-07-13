import AddActivityForm from './AddActivityForm';
export default {
  title: 'Component/Modal',
  component: AddActivityForm,
};

const template = args => <AddActivityForm {...args} />;

export const FormInput = template.bind({});
