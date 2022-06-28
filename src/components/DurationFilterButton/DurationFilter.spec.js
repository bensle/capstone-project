import {render, screen} from '@testing-library/react';

import DurationFilter from './DurationFilter';

describe('Duration Filter', () => {
  it('should render first DurationFilter correctly', () => {
    render(<DurationFilter />);

    const durationFilter = screen.getByLabelText('Day Trip');
    expect(durationFilter).toBeInTheDocument();
  });
  it('should render second, third and fourth DurationFilter correctly', () => {
    render(<DurationFilter />);

    const durationFilter2 = screen.getByLabelText('Weekend');
    const durationFilter3 = screen.getByLabelText('3 Days +');
    const durationFilter4 = screen.getByLabelText('All');
    expect(durationFilter2).toBeInTheDocument();
    expect(durationFilter3).toBeInTheDocument();
    expect(durationFilter4).toBeInTheDocument();
  });
});
