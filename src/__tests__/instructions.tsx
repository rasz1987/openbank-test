import { render } from '@testing-library/react';
import Instrunctions from '../pages/instructions/Instructions';
import Step3 from '../pages/instructions/views/Feedback/Step3';
import Step2 from '../pages/instructions/views/Form/Step2';
import Step1 from '../pages/instructions/views/ProductInformation/Step1';

test('should render <Instrubctions /> without crash', async () => {
  const wrapper = render(<Instrunctions />);

  expect(wrapper).toMatchSnapshot();
});

test('should <Step3 /> without crash', async () => {
  const wrapper = render(<Step3 />);

  expect(wrapper).toMatchSnapshot();
});

test('should <Step2 /> without crash', async () => {
  const wrapper = render(<Step2 />);

  expect(wrapper).toMatchSnapshot();
});

test('should render <Step1 /> without crash', async () => {
  const wrapper = render(<Step1 />);

  expect(wrapper).toMatchSnapshot();
});