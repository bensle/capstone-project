import DurationFilter from './DurationFilter';
export default {
  title: 'Component/Filter',
  component: DurationFilter,
  argTypes: {setActivities: {action: 'click'}},
};

const template = args => <DurationFilter {...args} />;

export const Default = template.bind({});
