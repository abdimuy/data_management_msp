import { API } from '../connection';

const getCliente = (clienteId: number) => {
  return new Promise((resolve, reject) => {
    API.get('/ventas/' + clienteId)
      .then((response) => {
        resolve(response.data?.body);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default getCliente;
