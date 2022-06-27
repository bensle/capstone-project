import {render, screen} from '@testing-library/react';

import ActivityCard from './ActivityCard';

describe('ActivityCard', () => {
  it('should render name and location correctly', () => {
    const name = 'Freudenberg';
    const location = 'Siegerland';

    render(<ActivityCard name={name} location={location} d />);

    const aName = screen.getByText(name);
    const loc = screen.getByText(location);

    expect(aName).toBeInTheDocument();
    expect(loc).toBeInTheDocument();
  });
});
