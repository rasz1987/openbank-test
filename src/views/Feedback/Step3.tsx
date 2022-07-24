import { FC } from 'react';
import { Step3Prop } from '../../interfaces';
import successImg from './success.png';
import errorImg from './error.png'

const Step3: FC<Step3Prop> = ({
  success = true
}) => {
  return <img src={success ? successImg : errorImg} alt="My alt" />
};

export default Step3;