import { API } from '../connection';

const getReportesRuta = () => {
  return new Promise<any[]>((resolve, reject) => {
    API.get('/reports_ruta')
      .then((reportes) => {
        resolve(reportes.data.body);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export default getReportesRuta;
