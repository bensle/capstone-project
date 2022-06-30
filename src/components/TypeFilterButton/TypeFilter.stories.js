import TypeFilter from './TypeFilter';
export default {
  title: 'Component/Filter',
  component: TypeFilter,
  argTypes: {onFilterType: {action: 'click'}, onFilterTypeReset: {action: 'click'}},
};

const template = args => <TypeFilter {...args} />;

export const Type = template.bind({});
