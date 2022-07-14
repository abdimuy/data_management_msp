import { PRIMARY_COLOR } from 'contants';
import { useState } from 'react';
import {
  Button,
  Container,
  Input,
  Loader,
  Text,
} from 'renderer/components/atoms';
import { Title } from 'renderer/components/molecules';
import getClientes from 'services/api_service/clientes/getClientes';
import { useNavigate } from 'react-router-dom';

const SearchClient = () => {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const navigate = useNavigate();

  const handleInputChange = (e: any) => {
    const {
      target: { value: VALUE },
    } = e;
    setSearch(VALUE);

    // handleGetClientePorText();
  };

  const handleGetClientePorText = async () => {
    try {
      setLoading(true);
      const clientes = await getClientes(search);
      setClients(clientes);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  const handleOpenClient = (clienteId: number) => {
    navigate('/client/' + clienteId);
  };

  const handleEnter = (e: any) => {
    const { code } = e;
    if (code === 'Enter') handleGetClientePorText();
  };

  return (
    <Container
      width="-webkit-fill-available"
      gap="30px"
      paddingHorizontal="10px"
      flexDirection="column"
      paddingVertical="15px"
      backgroundColor="trasparent"
    >
      <Title fontSize="30px">Buscar cliente</Title>
      <Container gap="10px" backgroundColor="transparent">
        <Input
          width="-webkit-fill-available"
          height="35px"
          paddingHorizontal="10px"
          placeholder="Buscar por nombre o domicío"
          borderRadius="5px"
          value={search}
          // onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => handleEnter(e)}
        />
        <Button
          height="35px"
          paddingHorizontal="5px"
          paddingVertical="8px"
          width="150px"
          justifyContent="center"
          backgroundColor={PRIMARY_COLOR}
          borderRadius="5px"
          onClick={handleGetClientePorText}
        >
          <Text styles={{ color: 'white' }}>Buscar</Text>
        </Button>
      </Container>
      {loading ? (
        <Loader isLoading />
      ) : (
        <Container
          overflowY="overlay"
          flexDirection="column"
          gap="5px"
          backgroundColor="transparent"
        >
          {clients.map((client: any) => (
            <Container
              justifyContent="flex-start"
              height="60px"
              borderRadius="5px"
              paddingHorizontal="5px"
              paddingVertical="8px"
              boxShadow="3px 3px 6px 0px rgb(0 0 0 / 10%)"
              onClick={() => handleOpenClient(client.CLIENTE_ID)}
            >
              <Text styles={{ fontSize: '14px', width: '30%' }}>
                {client.NOMBRE}
              </Text>
              <Text styles={{ fontSize: '14px', width: '40%' }}>
                {client.DIRECCION}
              </Text>
              {/* <Text styles={{ fontSize: '14px', width: '10%' }}>
                {'$' + client.LIMITE_CREDITO}
              </Text> */}
              <Text styles={{ fontSize: '14px', width: '20%' }}>
                {client.COBRADOR}
              </Text>
              <Text
                styles={{
                  fontSize: '14px',
                  width: '10%',
                  textAlign: 'center',
                }}
              >
                {client.ESTATUS}
              </Text>
            </Container>
          ))}
        </Container>
      )}
    </Container>
  );
};

export default SearchClient;
