import Favorite from './Favorite';

const Template = args => <Favorite {...args} />;

export const Card = Template.bind({});
Card.args = {
  name: 'Freudenberg',
  location: 'Siegerland',
  duration: 'short',
  type: 'culture',
  infos: 'https://test.de',
  isFavorite: true,
};

const story = {
  title: 'Component/FavoriteCard',
  component: 'Favorite',
  argTypes: {
    onToggleFavorites: {action: 'clicked'},
    onDelete: {action: 'click'},
    onShowConfirmationModal: {action: 'click'},
    showModalConfirmation: {action: 'click'},
  },
};
export default story;
