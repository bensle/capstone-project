import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import AddActivityForm from './AddActivityForm';

describe('AddActivityForm', () => {
  it('is an accessible form', () => {
    render(<AddActivityForm />);

    screen.getByRole('form');
    screen.getByLabelText('Add your Activity');
    screen.getByRole('button', {name: 'Add Activity'});
  });

  it('calls handleSubmit on submit', async () => {
    const user = userEvent.setup();
    const callbackSetActivities = jest.fn();

    render(<AddActivityForm onSetActivities={callbackSetActivities} />);

    const input1 = screen.getByLabelText('Name of your activity');
    const input2 = screen.getByLabelText('Location of your activity');
    const select1 = screen.getByLabelText('Duration of your Activity?');
    const select2 = screen.getByLabelText('Type of your Activity?');
    const infos = screen.getByLabelText('Add an URL for more Infos');
    const button = screen.getByRole('button', {name: 'Add Activity'});
    await user.type(input1, 'Fallschirmspringen');
    await user.type(input2, 'Oberberg');
    await user.selectOptions(select1, 'weekend');
    await user.selectOptions(select2, 'culture');
    await user.type(infos, 'test.de');
    await user.click(button);
    expect(callbackSetActivities).toHaveBeenCalled();
  });
});
