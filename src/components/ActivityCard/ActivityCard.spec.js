import {render, screen} from '@testing-library/react';

import db from '../../lib/activityDB';

import ActivityCard from './ActivityCard';

describe('ActivityCard', () => {
  it('should render correctly', () => {
    const singleEvent = db[0];
    render(<ActivityCard activities={[db]} event={singleEvent} />);
    expect(screen.getByText(singleEvent.name)).toBeInTheDocument();
    expect(screen.getByText(singleEvent.location)).toBeInTheDocument();
    expect(singleEvent.infos).toBeDefined();
    expect(singleEvent.duration).toBeDefined();
    expect(singleEvent.type).toBeDefined();
  });
});
