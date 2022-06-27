import DurationFilter from './DurationFilter';
export default {
  title: 'Component/Filter/Duration',
  component: DurationFilter,

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
export const Default = () => <DurationFilter></DurationFilter>;
