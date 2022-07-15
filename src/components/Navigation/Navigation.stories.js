import {withRouter} from 'storybook-addon-react-router-v6';

import Navigation from './Navigation';
export default {
  title: 'Component/Navigation',
  component: Navigation,
  decorators: [withRouter],
};

const template = args => <Navigation {...args} />;

export const Sidebar = template.bind({});
