import {
  FC,
  useState,
  useCallback
} from 'react';
import { useTranslation } from 'react-i18next';
import styles from './PasswordWizard.styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stepper from '../../components/Stepper';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';

const PasswordWizard: FC = () => {
  const { t } = useTranslation();
  const classes = styles();
  const stepComponent = [<Step1 />, <Step2 />, <Step3 />];
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleStep = useCallback((next: boolean = true) => {
    if (next) {
      activeStep < 3 && setActiveStep((prev) => prev + 1);
      return;
    }
    activeStep > 0 && setActiveStep((prev) => prev - 1);
  }, [activeStep]);

  return (
    <Grid container className={classes.content} >
      <Grid item xs={2}>
        <Stepper
          activeStep={activeStep}
          steps={[1, 2, 3]}
        />
      </Grid>

      <Grid item xs={12}>
        {stepComponent[activeStep]}
      </Grid>

      <div>
        <Button
          disabled={activeStep === 0}
          onClick={() => handleStep(false)}
        >
          {t('back')}
        </Button>
        <Button
          disabled={activeStep === 2}
          onClick={() => handleStep()}
        >
          {t('next')}
        </Button>
      </div>
    </Grid>
  )
};

export default PasswordWizard;