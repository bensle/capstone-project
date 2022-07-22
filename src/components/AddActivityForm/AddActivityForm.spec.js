import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

import AddActivityForm from './AddActivityForm';

describe('AddActivityForm', () => {
  it('is an accessible form', () => {
    render(<AddActivityForm />, {wrapper: BrowserRouter});

    screen.getByRole('form');
    screen.getByLabelText('Add your Activity');
    screen.getByRole('button', {name: 'Add Activity'});
  });

  it('renders three Inputfields, two selects and one submitbutton', () => {
    render(
      <BrowserRouter>
        <AddActivityForm />
      </BrowserRouter>
    );

    const input1 = screen.getByLabelText('Name of your activity');
    const input2 = screen.getByLabelText('Location of your activity');
    const infos = screen.getByLabelText('Add an URL for more Infos', {exact: false});
    const select1 = screen.getByLabelText('Duration of your Activity?');
    const select2 = screen.getByLabelText('Type of your Activity?');
    const button = screen.getByRole('button', {name: 'Add Activity'});
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(infos).toBeInTheDocument();
    expect(select1).toBeInTheDocument();
    expect(select2).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
