import routes from '../Routes';
import Instructions from '../pages/instructions/Instructions';
import PasswordWizard from '../pages/passwordWizard/PasswordWizard';

test('Return equeal', () => {
  expect(routes).toEqual([
    {
      component: <Instructions />,
      url: "/instructions"
    },
    {
      component: <PasswordWizard />,
      url: "/password-wizard"
    }
  ]);
});