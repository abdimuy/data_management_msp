import { API } from '../connection';

const getVentasPorRuta = (rutaId: number) => {
  return new Promise<any[]>((resolve, reject) => {
    API.get('/ventas/ruta/' + rutaId)
      .then((response) => {
        resolve(response.data.body);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default getVentasPorRuta;
