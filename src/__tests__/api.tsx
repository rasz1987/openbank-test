import {
  RESPONSE_KO,
  RESPONSE_OK,
  PRUEBA_KO
} from '../constants/globalConstants'
import { submitForm } from '../services/api';
import { colors } from '../constants/colors';

jest.setTimeout(20000);

test('should return status 200', async () => {
  await submitForm('myPass', 'myPass', 'Question')
    .then(res => {
      expect(res.status).toBe(RESPONSE_OK.status)
    });
});

test('should return status 401', async () => {
  await submitForm(PRUEBA_KO, PRUEBA_KO, 'Question').catch(error => {
    expect(error.status).toBe(RESPONSE_KO.status);
  })
});

test('should retrun colors', () => {
  expect(colors).toMatchSnapshot();
});