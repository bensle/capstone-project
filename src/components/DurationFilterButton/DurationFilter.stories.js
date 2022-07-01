import DurationFilter from './DurationFilter';
export default {
  title: 'Component/Filter',
  component: DurationFilter,
  argTypes: {onFilterDurationValue: {action: 'click'}, onFilterDurationReset: {action: 'click'}},
};

const template = args => <DurationFilter {...args} />;

export const Duration = template.bind({});
