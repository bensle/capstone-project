import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Favorite from './Favorite';

describe('Favorite', () => {
  it('should render correctly', () => {
    const name = 'Freudenberg';
    const location = 'Siegerland';
    const infos = 'More Infos';
    const id = 1;

    render(
      <Favorite name={name} location={location} infos={infos} id={id} showModalConfirmation={{show: true, id}}>
        {(name, location, infos)}
      </Favorite>
    );
    const eventName = screen.getByText(name);
    const eventLocation = screen.getByText(location);
    const eventInfos = screen.getByText(infos);
    const favoriteButton = screen.getByRole('button', {name: 'Delete Activity'});
    expect(eventName).toBeInTheDocument();
    expect(eventLocation).toBeInTheDocument();
    expect(eventInfos).toBeInTheDocument();
    expect(favoriteButton).toBeInTheDocument();
  });

  it('calls onToggleFavorites on click', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();
    const id = 1;
    render(<Favorite onToggleFavorites={callback} id={id} showModalConfirmation={{show: true, id}} />);
    const favoriteButton = screen.getByRole('button', {name: 'Added to Favorites'});
    await user.click(favoriteButton);
    expect(callback).toHaveBeenCalledWith(id);
  });
});
