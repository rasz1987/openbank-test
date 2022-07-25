import { FC } from 'react';
import { StepperProp } from '../interfaces';
import BaseStepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';

const Stepper: FC<StepperProp> = ({
  activeStep,
  steps
}) => {
  return (
    <>
      <BaseStepper
        nonLinear
        activeStep={activeStep}
      >
        {
          steps.map((ele) => (
            <Step key={ele} >
              <StepButton />
            </Step>
          ))
        }
      </BaseStepper>
    </>
  )
};

export default Stepper;