import { Button, props } from './Button';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('If Button Component is working properly', () => {
  test('if label rendered correctly', () => {
    const ButtonnProps: props = {
      text: 'submit',
      type: 'submit'
    };

    render(<Button {...ButtonnProps} />);
    const element = screen.getByTestId('button-test');

    expect(element).toHaveTextContent('submit');
    expect(element).toHaveAttribute('type', 'submit');
  });
  test('onClick is triggered', () => {
    const onClick = jest.fn();
    const ButtonnProps: props = {
      text: 'submit',
      type: 'submit',
      onClick
    };

    const renderElement = render(<Button {...ButtonnProps} />);
    const element = screen.getByTestId('button-test');

    expect(renderElement).toMatchSnapshot();

    fireEvent.click(element);
    expect(onClick).toBeCalled();
  });
});
