import { API } from '../connection';

const getClientes = (text: string) => {
  return new Promise<any[]>(async (resolve, reject) => {
    try {
      const response = await API.get('/clientes/search?text=' + text);
      resolve(response?.data.body);
    } catch (error) {
      reject(error);
    }
  });
};

export default getClientes;
