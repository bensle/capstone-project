import {render, screen} from '@testing-library/react';

import db from '../../lib/activityDB';

import ActivityCard from './ActivityCard';

describe('ActivityCard', () => {
  it('should render props correctly', () => {
    const singleEvent = db[0];
    render(<ActivityCard event={singleEvent} />);
    expect(screen.getByText(singleEvent.name)).toBeInTheDocument();
    expect(screen.getByText(singleEvent.location)).toBeInTheDocument();
    expect(singleEvent.infos).toBeDefined();
    expect(singleEvent.duration).toBeDefined();
    expect(singleEvent.type).toBeDefined();
  });
});
