import ActivityCard from './ActivityCard';

export default {
  title: 'Component/ActivityCard',
  component: ActivityCard,

  decorators: [
    Story => {
      return (
        <div style={{padding: '1em', maxWidth: '300px'}}>
          <Story />
        </div>
      );
    },
  ],
};
export const Default = () => <ActivityCard></ActivityCard>;
