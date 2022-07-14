import { useState } from 'react';
import { Container, Text, Button } from 'renderer/components/atoms';
import dayjs from 'dayjs';
import { PRIMARY_COLOR } from 'contants';

const ListPagosVentaItem = ({
  venta,
  historial,
}: {
  venta: any;
  historial: any;
}) => {
  const [showHistory, setShowHistory] = useState(false);
  console.log({ historial });
  return (
    <Container
      flexDirection="column"
      backgroundColor="transparent"
      gap="10px"
      alignItems="center"
    >
      <Container
        flexDirection="row"
        gap="10px"
        paddingHorizontal="20px"
        paddingVertical="25px"
        width="-webkit-fill-available"
        borderRadius="5px"
        justifyContent="space-between"
        boxShadow="3px 3px 6px 0px rgb(0 0 0 / 10%)"
      >
        <Container flexDirection="column" gap="6px">
          <Text>{`Folio: ${venta?.FOLIO}`}</Text>
          <Text>{`Fecha de compra: ${dayjs(venta?.FECHA).format(
            'DD/MM/YYYY'
          )}`}</Text>
          <Text>{`Concepto: ${venta?.CONCEPTO}`}</Text>
          <Text>{`Vendedores: ${venta?.VENDEDOR_1}, ${venta?.VENDEDOR_2}, ${venta?.VENDEDOR_3}`}</Text>
          <Text>{`Forma de pago: ${venta?.FORMA_DE_PAGO}`}</Text>
          <Text>{`Parcialidad: $${venta?.PARCIALIDAD}`}</Text>
          <Text>{`Tiempo a corto plazo (meses): ${venta?.TIEMPO_A_CORTO_PLAZOMESES}`}</Text>
          <Text>{`Monto a corto plazo: $${venta?.MONTO_A_CORTO_PLAZO}`}</Text>
          <Text
            styles={{ fontSize: '20px', fontWeight: '600' }}
          >{`Saldo: $${venta?.SALDO_REST}`}</Text>
        </Container>
        <Container flexDirection="column" gap="8px">
          <Text styles={{ textAlign: 'right', fontWeight: '600' }}>
            ARTICULOS
          </Text>
          {venta.PRODUCTOS.map((producto: any) => (
            <Container gap="15px">
              <Text>{producto.CANTIDAD}</Text>
              <Text>{producto.ARTICULO}</Text>
              <Text>{'$' + producto.PRECIO_UNITARIO_IMPTO}</Text>
            </Container>
          ))}
          <Text
            styles={{ textAlign: 'right' }}
          >{`Total de la compra: $${venta?.CANTIDAD}`}</Text>
          <Text
            styles={{ textAlign: 'right' }}
          >{`Enganche: $${venta?.ENGANCHE}`}</Text>
        </Container>
      </Container>
      <Button
        backgroundColor="transparent"
        onClick={() => setShowHistory((isShow) => !isShow)}
      >
        {!showHistory
          ? 'Mostrar historial de pagos'
          : 'Ocultar historial de pagos'}
      </Button>
      {showHistory && (
        <Container
          flexDirection="column"
          gap="15px"
          width="-webkit-fill-available"
          borderRadius="5px"
          paddingHorizontal="15px"
          paddingVertical="20px"
          boxShadow="3px 3px 6px 0px rgb(0 0 0 / 10%)"
        >
          {Object.keys(historial).map((mesItem: any) => {
            const mes = historial[mesItem];
            return (
              <Container
                flexDirection="column"
                // gap="5px"
                paddingVertical="5px"
                backgroundColor={PRIMARY_COLOR + '22'}
                borderRadius="5px"
              >
                {mes.map((pago: any) => (
                  <Container
                    paddingHorizontal="8px"
                    paddingVertical="7px"
                    width="-webkit-fill-available"
                    gap="10px"
                    borderRadius="5px"
                    backgroundColor="transparent"
                  >
                    <Text styles={{ fontSize: '14px', width: '10%' }}>
                      {pago.FOLIO}
                    </Text>
                    <Text styles={{ fontSize: '14px', width: '25%' }}>
                      {pago.CONCEPTO}
                    </Text>
                    <Text styles={{ fontSize: '14px', width: '35%' }}>
                      {pago.DESCRIPCION}
                    </Text>
                    <Text styles={{ fontSize: '14px', width: '20%' }}>
                      {dayjs(pago.FECHA).format('DD/MM/YYYY')}
                    </Text>
                    <Text
                      styles={{ fontSize: '14px', width: '10%' }}
                    >{`$${pago.CANTIDAD}`}</Text>
                  </Container>
                ))}
              </Container>
            );
          })}
        </Container>
      )}
    </Container>
  );
};

export default ListPagosVentaItem;
