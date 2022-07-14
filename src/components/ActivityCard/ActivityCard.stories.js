import ActivityCard from './ActivityCard';

const Template = args => <ActivityCard {...args} />;

export const Card = Template.bind({});
Card.args = {
  name: 'Freudenberg',
  location: 'Siegerland',
  duration: 'short',
  type: 'culture',
  infos: 'https://test.de',
  isFavorite: false,
};

const story = {
  title: 'Component/ActivityCard',
  component: 'ActivityCard',
  argTypes: {
    onToggleFavorites: {action: '!click'},
    showModalConfirmation: {action: 'click'},
    onDelete: {action: 'click'},
    onShowConfirmationModal: {action: 'click'},
  },
};

export default story;
