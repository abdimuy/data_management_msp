import { useState, useEffect } from 'react';
import { Container, Loader, Select } from '../../atoms';
import { Title } from 'renderer/components/molecules';
import getClientes from 'services/api_service/clientes/getClientes';
import ListClientes from 'renderer/components/organisms/ListClientes';
import getVentasPorRuta from 'services/api_service/clientes/getVentasPorRuta';
import getRutas from 'services/api_service/rutas/getRutas';

const Clients = () => {
  const [clientes, setClientes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [rutas, setRutas] = useState<any[]>([]);
  const [rutaSelected, setRutaSelected] = useState();

  const handleGetClientes = async (search: string) => {
    try {
      setLoading(true);
      const response = await getClientes(search);
      setClientes(response);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const handleGetData = async (rutaId: number) => {
    try {
      setLoading(true);
      const [responseRutas, responseVentas] = await Promise.all([
        getRutas(),
        getVentasPorRuta(rutaId),
      ]);
      console.log(responseRutas);
      setRutas(responseRutas);
      setClientes(responseVentas);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const handleGetVentas = async (rutaId: number) => {
    try {
      setLoading(true);
      const response = await getVentasPorRuta(rutaId);
      setClientes(response);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    // handleGetClientes(search);
    handleGetData(11294);
    // getVentas(11294);
  }, []);

  useEffect(() => {
    if (rutaSelected) {
      handleGetVentas(rutaSelected);
    }
  }, [rutaSelected]);

  if (loading) {
    return <Loader isLoading={loading} />;
  }

  return (
    <Container
      paddingHorizontal="15px"
      paddingVertical="15px"
      borderRadius="5px"
      height="-webkit-fill-available"
      maxWidth="-webkit-fill-available"
      width="-webkit-fill-available"
      backgroundColor="trasparent"
      justifyContent="center"
      flexDirection="column"
      gap="20px"
    >
      <Container backgroundColor="transparent" justifyContent="space-between">
        <Title fontSize="30px">Clientes</Title>
        <Select options={rutas} setValue={setRutaSelected} />
      </Container>
      <ListClientes ventas={clientes} />
    </Container>
  );
};

export default Clients;
