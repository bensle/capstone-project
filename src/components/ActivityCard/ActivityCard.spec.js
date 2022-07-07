import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ActivityCard from './ActivityCard';

describe('ActivityCard', () => {
  it('should render correctly', () => {
    const name = 'Freudenberg';
    const location = 'Siegerland';
    const duration = '3 Days +';
    const type = 'culture';
    const infos = 'Find out more';
    const id = 1;
    const favorite = [1, 2, 3];

    render(
      <ActivityCard
        name={name}
        location={location}
        curation={duration}
        type={type}
        infos={infos}
        id={id}
        favorite={favorite}
      >
        {(name, location, duration, type, infos)}
      </ActivityCard>
    );
    const eventName = screen.getByText(name);
    const eventLocation = screen.getByText(location);
    const eventDuration = screen.getByText(duration);
    const eventType = screen.getByText(type);
    const eventInfos = screen.getByText(infos);
    const favoriteButton = screen.getByRole('button');
    expect(eventName).toBeInTheDocument();
    expect(eventLocation).toBeInTheDocument();
    expect(eventDuration).toBeInTheDocument();
    expect(eventType).toBeInTheDocument();
    expect(eventInfos).toBeInTheDocument();
    expect(favoriteButton).toBeInTheDocument();
  });

  it('calls onAddFavorite on click', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();
    const id = 1;
    const favorite = [1, 2, 3];
    render(<ActivityCard onAddFavorite={callback} favorite={favorite} id={id} />);

    const favoriteButton = screen.getByRole('button');
    await user.click(favoriteButton);
    expect(callback).toHaveBeenCalled();
  });
});
