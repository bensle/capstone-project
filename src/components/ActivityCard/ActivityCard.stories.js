import ActivityCard from './ActivityCard';

const Template = args => <ActivityCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Freudenberg',
  location: 'Siegerland',
  duration: 'Day Trip',
  type: 'culture',
  infos: 'link',
  isFavorite: true,
};

const story = {
  title: 'Component/ActivityCard',
  component: 'ActivityCard',
  argTypes: {onToggleFavorites: {action: 'clicked'}},
};

export default story;
