import { useState, useEffect } from 'react';
import { Container, Text, Loader, Button } from 'renderer/components/atoms';
import { Title } from 'renderer/components/molecules';
import { useParams } from 'react-router-dom';
import getCliente from 'services/api_service/clientes/getCliente';
import { useNavigate } from 'react-router-dom';
import { ERROR_COLOR } from 'contants';
import { ListPagosVentaItem } from 'renderer/components/organisms';

const Client = () => {
  const [cliente, setCliente] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>('');
  const { cliente_id = '' } = useParams();
  const navigate = useNavigate();

  const handleGetCliente = async (clienteId: number) => {
    try {
      setLoading(true);
      const clienteData = await getCliente(clienteId);
      setCliente(clienteData);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetCliente(parseInt(cliente_id));
  }, []);

  if (loading) {
    return <Loader isLoading={true} />;
  }

  if (error) {
    return <Container>Error</Container>;
  }

  return (
    <Container
      flexDirection="column"
      paddingHorizontal="30px"
      paddingVertical="45px"
      gap="15px"
      width="100%"
      backgroundColor="transparent"
      overflowY="scroll"
    >
      <Button
        height="30px"
        width="60px"
        justifyContent="center"
        alignItems="center"
        borderRadius="5px"
        borderColor={ERROR_COLOR}
        borderWidth="1px"
        onClick={() => navigate(-1)}
      >
        Volver
      </Button>
      <Title fontSize="30px">Información del cliente</Title>
      <Container
        flexDirection="column"
        gap="6px"
        paddingHorizontal="20px"
        paddingVertical="25px"
        borderRadius="5px"
        boxShadow="3px 3px 6px 0px rgb(0 0 0 / 10%)"
      >
        <Text
          styles={{ fontSize: '20px', fontWeight: '600' }}
        >{`Cliente: ${cliente.CLIENTE?.NOMBRE}`}</Text>
        <Text>{`Domicilio: ${cliente.CLIENTE?.DIRECCION}`}</Text>
        <Text>{`Límite crédito: $${cliente.CLIENTE?.LIMITE_CREDITO}`}</Text>
        <Text>{`Teléfono: ${cliente.CLIENTE?.TELEFONO}`}</Text>
        <Text>{`Zona: ${cliente.CLIENTE?.ZONA}`}</Text>
        <Text>{`Cobrador: ${cliente.CLIENTE?.COBRADOR}`}</Text>
        <Text>{`Estatus: ${cliente.CLIENTE?.ESTATUS}`}</Text>
        <Text>{`Número de ventas: ${cliente?.VENTAS.length}`}</Text>
      </Container>

      <Title fontSize="25px">Ventas</Title>
      {cliente.VENTAS.map((venta: any) => (
        <ListPagosVentaItem
          venta={venta.VENTA}
          // historial={venta.HISTORIAL}
          historial={venta.HISTORIAL_POR_MES}
          key={venta.DOCTO_CC_ID}
        />
      ))}
    </Container>
  );
};

export default Client;
