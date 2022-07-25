import {
  Dispatch,
  SetStateAction
} from 'react';
export interface Step3Prop {
  success?: boolean;
}

export type ColorsType = {
  primary: string;
  secondary: string;
  terciary: string;
  white: string;
  black: string;
}

export type RoutesType = {
  url: string;
  component: JSX.Element;
}[];

export type ResponseType = {
  status: 200 | 401;
}

export interface SubmitFormProp {
  (
    pass: string,
    repass: string,
    optionalQuestion?: string
  ): Promise<{ status: 200 | 401 }>
}

export interface StepperProp {
  activeStep: number;
  steps: number[];
}

export interface StepperContextProp {
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>
}