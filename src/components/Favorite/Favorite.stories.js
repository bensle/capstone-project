import Favorite from './Favorite';

const Template = args => <Favorite {...args} />;

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
  title: 'Component/FavoriteCard',
  component: 'Favorite',
  argTypes: {onToggleFavorites: {action: 'clicked'}},
};
export default story;