import { API } from '../connection';

const getRutas = () => {
  return new Promise<any[]>((resolve, reject) => {
    API.get('/rutas')
      .then((res) => {
        resolve(res.data?.body);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default getRutas;
