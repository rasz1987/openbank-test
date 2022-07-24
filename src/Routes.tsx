import { RoutesType } from './interfaces';
import Instructions from './pages/instructions/Instructions';
import PasswordWizard from './pages/passwordWizard/PasswordWizard';

const routes: RoutesType = [
  {
    url: '/instructions',
    component: <Instructions />
  },
  {
    url: '/password-wizard',
    component: <PasswordWizard />
  }
];

export default routes;