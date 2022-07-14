import AddActivityForm from './AddActivityForm';
export default {
  title: 'Component/Form',
  component: AddActivityForm,
};

const template = args => <AddActivityForm {...args} />;

export const AddForm = template.bind({});
