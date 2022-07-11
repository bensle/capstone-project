import ActivityCard from './ActivityCard';

const Template = args => <ActivityCard {...args} />;

export const Card = Template.bind({});
Card.args = {
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
  argTypes: {
    onToggleFavorites: {action: 'click'},
    showModalConfirmation: {action: 'click'},
  },
};

export default story;
