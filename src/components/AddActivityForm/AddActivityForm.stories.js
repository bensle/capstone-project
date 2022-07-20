import {withRouter} from 'storybook-addon-react-router-v6';

import AddActivityForm from './AddActivityForm';

export default {
  title: 'Component/Form',
  component: AddActivityForm,
  decorators: [withRouter],
};

const template = args => <AddActivityForm {...args} />;

export const AddForm = template.bind({});
