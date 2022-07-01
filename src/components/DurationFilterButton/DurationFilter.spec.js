import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import DurationFilter from './DurationFilter';

describe('Duration Filter', () => {
  it('should render first DurationFilter correctly', () => {
    render(<DurationFilter />);

    const durationFilter = screen.getByLabelText('Day Trip');
    expect(durationFilter).toBeInTheDocument();
  });
  it('should render second, third and fourth DurationFilter correctly', () => {
    render(<DurationFilter />);

    const durationFilter2 = screen.getByLabelText('Weekend');
    const durationFilter3 = screen.getByLabelText('3 Days +');
    const durationFilter4 = screen.getByLabelText('All');
    const radio1 = screen.getByRole('radio', {name: /day trip/i});
    const radio2 = screen.getByRole('radio', {name: /weekend/i});
    const radio3 = screen.getByRole('radio', {name: /3 days +/i});
    const radio4 = screen.getByRole('radio', {name: /all/i});
    expect(durationFilter2).toBeInTheDocument();
    expect(durationFilter3).toBeInTheDocument();
    expect(durationFilter4).toBeInTheDocument();
    expect(radio1).toBeInTheDocument();
    expect(radio2).toBeInTheDocument();
    expect(radio3).toBeInTheDocument();
    expect(radio4).toBeInTheDocument();
  });

  it('checks first radio button on click', async () => {
    const callback = jest.fn();
    render(<DurationFilter onFilterReset={callback} onFilterDurationValue={callback} />);

    const user = userEvent.setup();
    const radio1 = screen.getByRole('radio', {name: /day trip/i});
    await user.click(radio1);
    expect(radio1).toBeChecked();
  });
  it('checks second radio button on click', async () => {
    const callback = jest.fn();
    render(<DurationFilter onFilterReset={callback} onFilterDurationValue={callback} />);

    const user = userEvent.setup();
    const radio2 = screen.getByRole('radio', {name: /weekend/i});
    await user.click(radio2);
    expect(radio2).toBeChecked();
  });
  it('checks third radio button on click', async () => {
    const callback = jest.fn();
    render(<DurationFilter onFilterReset={callback} onFilterDurationValue={callback} />);

    const user = userEvent.setup();
    const radio3 = screen.getByRole('radio', {name: /3 days +/i});
    await user.click(radio3);
    expect(radio3).toBeChecked();
  });
  it('checks fourth radio button on click', async () => {
    const callback = jest.fn();
    render(<DurationFilter onFilterReset={callback} onFilterDurationReset={callback} />);

    const user = userEvent.setup();
    const radio4 = screen.getByRole('radio', {name: /all/i});
    await user.click(radio4);
    expect(radio4).toBeChecked();
  });

  it('calls filterRest function on click', async () => {
    const callback = jest.fn();
    render(<DurationFilter onFilterDurationReset={callback} onFilterDurationValue={callback} />);

    const user = userEvent.setup();
    await user.click(screen.getByRole('radio', {name: /all/i}));
    expect(callback).toHaveBeenCalled();
  });
});
