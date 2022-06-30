import React from 'react';
import { Container, Text } from 'renderer/components/atoms';
import { IListClientesItemProps } from './IListClientesItem';

const ListClientesItem = ({ data }: IListClientesItemProps) => {
  return (
    <Container minHeight="20px" gap="10px">
      <Text styles={{ fontSize: '14px' }}>{data.CLIENTE}</Text>
      <Text>{data.FECHA}</Text>
      <Text>{data.FREC_PAGO}</Text>
      <Text>{data.PRECIO_TOTAL}</Text>
      <Text>{data.SALDO_REST}</Text>
    </Container>
  );
};

export default ListClientesItem;
