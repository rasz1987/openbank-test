import { render } from '@testing-library/react';
import App from '../App';

console.warn = jest.fn();

test('should render <App /> without crash', async () => {
  const wrapper = render(<App />);

  expect(wrapper).toMatchSnapshot();
})