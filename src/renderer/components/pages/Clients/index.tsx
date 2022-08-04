import { useState, useEffect } from 'react';
import { Button, Container, Loader, Select, Text } from '../../atoms';
import { Title } from 'renderer/components/molecules';
import getClientes from 'services/api_service/clientes/getClientes';
import ListClientes from 'renderer/components/organisms/ListClientes';
import getVentasPorRuta from 'services/api_service/clientes/getVentasPorRuta';
import getRutas from 'services/api_service/rutas/getRutas';
import { useNavigate } from 'react-router-dom';
import { PRIMARY_COLOR } from 'contants';

const Clients = () => {
  const [clientes, setClientes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [rutas, setRutas] = useState<any[]>([]);
  const [rutaSelected, setRutaSelected] = useState();
  const navigate = useNavigate();

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
      responseRutas;
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
    handleGetData(0);
    // getVentas(11294);
  }, []);

  useEffect(() => {
    if (rutaSelected !== undefined) {
      console.log(rutaSelected);
      handleGetVentas(rutaSelected);
    }
  }, [rutaSelected]);

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
        <Container gap="10px" backgroundColor="transparent" width="60%">
          <Button
            backgroundColor={PRIMARY_COLOR}
            onClick={() => navigate('/buscar_cliente')}
            borderRadius="5px"
            justifyContent="center"
            width="180px"
            alignItems="center"
          >
            <Text styles={{ color: 'white', textAlign: 'center' }}>
              Buscar cliente
            </Text>
          </Button>
          <Select
            options={[
              { COBRADOR: 'TODAS LAS RUTAS', COBRADOR_ID: 0 },
              ...rutas,
            ]}
            setValue={setRutaSelected}
          />
        </Container>
      </Container>
      {loading ? (
        <Loader isLoading={loading} />
      ) : (
        <ListClientes ventas={clientes} />
      )}
    </Container>
  );
};

export default Clients;
