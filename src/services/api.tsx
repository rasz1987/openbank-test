import {
	PRUEBA_KO,
	RESPONSE_OK,
	RESPONSE_KO
} from '../constants/globalConstants';
import { SubmitFormProp } from '../interfaces';

export const submitForm: SubmitFormProp = (pass, repass, optionalQuestion) =>
	new Promise((resolve, reject) =>
		setTimeout(() =>
			pass !== PRUEBA_KO
				? resolve(RESPONSE_OK)
				: reject(RESPONSE_KO)
			, 3000)
	)
