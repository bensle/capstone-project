import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ConfirmationModal from './ConfirmationModal';

describe('Confirmation Modal', () => {
  it('renders correctly', () => {
    render(<ConfirmationModal showModalConfirmation />);
    screen.getByText('Do you really want to', {exact: false});
    screen.getByRole('button', {name: 'Cancel'});
    screen.getByRole('button', {name: 'Delete'});
  });

  it('calls onDelete on click', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();
    const name = 'Freudenberg';
    const callbackCon = jest.fn(name);
    render(<ConfirmationModal onDelete={callback} showModalConfirmation={callbackCon} />);
    const button = screen.getByRole('button', {name: 'Delete'});
    await user.click(button);
    expect(callback).toHaveBeenCalled();
  });
  it('calls onClose on click', async () => {
    const user = userEvent.setup();
    const callback = jest.fn();
    const callback1 = jest.fn();
    render(<ConfirmationModal onClose={callback} onDelete={callback1} showModalConfirmation />);
    const button = screen.getByRole('button', {name: 'Cancel'});
    await user.click(button);
    expect(callback).toHaveBeenCalled();
  });
});
