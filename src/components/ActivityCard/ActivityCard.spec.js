import {render, screen} from '@testing-library/react';

import ActivityCard from './ActivityCard';

describe('ActivityCard', () => {
  it('should render correctly', () => {
    const name = 'Freudenberg';
    const location = 'Siegerland';
    const duration = '3 Days +';
    const type = 'culture';
    const infos = 'Find out more';
    render(
      <ActivityCard name={name} location={location} curation={duration} type={type} infos={infos}>
        {(name, location, duration, type, infos)}
      </ActivityCard>
    );
    const eventName = screen.getByText(name);
    const eventLocation = screen.getByText(location);
    const eventDuration = screen.getByText(duration);
    const eventType = screen.getByText(type);
    const eventInfos = screen.getByText(infos);
    expect(eventName).toBeInTheDocument();
    expect(eventLocation).toBeInTheDocument();
    expect(eventDuration).toBeInTheDocument();
    expect(eventType).toBeInTheDocument();
    expect(eventInfos).toBeInTheDocument();
  });
});
