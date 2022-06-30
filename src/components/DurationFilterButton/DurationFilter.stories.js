import DurationFilter from './DurationFilter';
export default {
  title: 'Component/Filter',
  component: DurationFilter,
  argTypes: {onFilterDuration: {action: 'click'}, onFilterDurationReset: {action: 'click'}},
};

const template = args => <DurationFilter {...args} />;

export const Duration = template.bind({});
