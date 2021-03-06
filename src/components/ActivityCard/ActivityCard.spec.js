import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ActivityCard from './ActivityCard';

describe('ActivityCard', () => {
  it('should render correctly', () => {
    const name = 'Freudenberg';
    const location = 'Siegerland';
    const infos = 'More Infos';
    const id = 1;

    render(
      <ActivityCard
        name={name}
        location={location}
        infos={infos}
        id={id}
        isFavorite={true}
        showModalConfirmation={{show: true, id}}
      >
        {(name, location, infos)}
      </ActivityCard>
    );
    const eventName = screen.getByText(name);
    const eventLocation = screen.getByText(location);
    const eventInfos = screen.getByText(infos);
    const favoriteButton = screen.getByRole('button', {name: 'Added to Favorites'});
    expect(eventName).toBeInTheDocument();
    expect(eventLocation).toBeInTheDocument();
    expect(eventInfos).toBeInTheDocument();
    expect(favoriteButton).toBeInTheDocument();
  });

  it('calls onToggleFavorite on click', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();
    const id = 1;
    const favorite = [1, 2, 3];
    render(
      <ActivityCard showModalConfirmation={{show: true, id}} onToggleFavorites={callback} favorite={favorite} id={id} />
    );

    const favoriteButton = screen.getByRole('button', {name: 'Add to Favorites'});
    await user.click(favoriteButton);
    expect(callback).toHaveBeenCalledWith(id);
  });
});
