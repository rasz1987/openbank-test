import { render } from '@testing-library/react';
import PasswordWizzard from '../pages/passwordWizard/PasswordWizard';

test('Should redner <PasswordWizzard /> without crash', async () => {
  const wrapper = render(<PasswordWizzard />);

  expect(wrapper).toBeTruthy();
});