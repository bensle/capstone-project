import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import TypeFilter from './TypeFilter';

describe('Typefilter', () => {
  it('should render first TypeFilter correctly', () => {
    render(<TypeFilter />);

    const typefilter = screen.getByLabelText('All');
    expect(typefilter).toBeInTheDocument();
  });

  it('should render all remaining Typefilter correctly', () => {
    render(<TypeFilter />);

    const typefilter2 = screen.getByLabelText('culture');
    const typefilter3 = screen.getByLabelText('nature');
    const typefilter4 = screen.getByLabelText('sport');
    const typefilter5 = screen.getByLabelText('recovery');
    const typefilter6 = screen.getByLabelText('challenge');

    const radio2 = screen.getByRole('radio', {name: /culture/i});
    const radio3 = screen.getByRole('radio', {name: /nature/i});
    const radio4 = screen.getByRole('radio', {name: /sport/i});
    const radio5 = screen.getByRole('radio', {name: /recovery/i});
    const radio6 = screen.getByRole('radio', {name: /challenge/i});

    expect(typefilter2).toBeInTheDocument();
    expect(typefilter3).toBeInTheDocument();
    expect(typefilter4).toBeInTheDocument();
    expect(typefilter5).toBeInTheDocument();
    expect(typefilter6).toBeInTheDocument();

    expect(radio2).toBeInTheDocument();
    expect(radio3).toBeInTheDocument();
    expect(radio4).toBeInTheDocument();
    expect(radio5).toBeInTheDocument();
    expect(radio6).toBeInTheDocument();
  });

  it('checks first radio button on click', async () => {
    const callback = jest.fn();
    render(<TypeFilter onFilterTypeReset={callback} onFilterTypeValue={callback} />);

    const user = userEvent.setup();
    const radio1 = screen.getByLabelText('All');
    await user.click(radio1);
    expect(radio1).toBeChecked();
  });
  it('checks second radio button on click', async () => {
    const callback = jest.fn();
    render(<TypeFilter onFilterReset={callback} onFilterTypeValue={callback} />);

    const user = userEvent.setup();
    const radio2 = screen.getByRole('radio', {name: /culture/i});
    await user.click(radio2);
    expect(radio2).toBeChecked();
  });
  it('checks third radio button on click', async () => {
    const callback = jest.fn();
    render(<TypeFilter onFilterReset={callback} onFilterTypeValue={callback} />);

    const user = userEvent.setup();
    const radio3 = screen.getByRole('radio', {name: /nature/i});
    await user.click(radio3);
    expect(radio3).toBeChecked();
  });
  it('checks fourth radio button on click', async () => {
    const callback = jest.fn();
    render(<TypeFilter onFilterReset={callback} onFilterTypeValue={callback} />);

    const user = userEvent.setup();
    const radio4 = screen.getByRole('radio', {name: /sport/i});
    await user.click(radio4);
    expect(radio4).toBeChecked();
  });
  it('checks fifth radio button on click', async () => {
    const callback = jest.fn();
    render(<TypeFilter onFilterReset={callback} onFilterTypeValue={callback} />);

    const user = userEvent.setup();
    const radio4 = screen.getByRole('radio', {name: /recovery/i});
    await user.click(radio4);
    expect(radio4).toBeChecked();
  });
  it('checks sixth radio button on click', async () => {
    const callback = jest.fn();
    render(<TypeFilter onFilterReset={callback} onFilterTypeValue={callback} />);

    const user = userEvent.setup();
    const radio4 = screen.getByRole('radio', {name: /challenge/i});
    await user.click(radio4);
    expect(radio4).toBeChecked();
  });

  it('calls filterReset function on click', async () => {
    const callback = jest.fn();
    render(<TypeFilter onFilterTypeReset={callback} onFilterDurationValue={callback} />);

    const user = userEvent.setup();
    await user.click(screen.getByLabelText('All'));
    expect(callback).toHaveBeenCalled();
  });
});
