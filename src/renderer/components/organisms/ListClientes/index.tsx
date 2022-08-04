import { useState } from 'react';
import { IListClientes } from './IListClientes';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

import 'ag-grid-enterprise';
import Client from 'renderer/components/pages/Client';
import ModalCustom from 'renderer/components/atoms/Modal';
import { AG_GRID_ESPAÑOL } from 'contants/agGridEspañol';

const ListClientes = ({ ventas }: IListClientes) => {
  const [clienteIdModal, setClienteIdModal] = useState<number>();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const statusBar = {
    statusPanels: [{ statusPanel: 'agAggregationComponent' }],
  };
  const cellStyles = (params: any) => {
    const { value } = params;
    if (value < 10) {
      return { backgroundColor: '#ff0000' };
    } else if (value < 25) {
      return { backgroundColor: '#ff7700' };
    } else if (value < 50) {
      return { backgroundColor: '#ffcc00' };
    } else if (value < 75) {
      return { backgroundColor: '#ffff00' };
    } else {
      return { backgroundColor: '#00ff00' };
    }
  };
  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: '-webkit-fill-available',
        width: '-webkit-fill-available',
      }}
    >
      <AgGridReact
        rowData={ventas}
        animateRows={true}
        rowGroupPanelShow={'always'}
        localeText={AG_GRID_ESPAÑOL}
        sideBar={{
          toolPanels: [
            {
              id: 'columns',
              labelDefault: 'Columnas',
              labelKey: 'columns',
              iconKey: 'columns',
              toolPanel: 'agColumnsToolPanel',
              minWidth: 200,
              maxWidth: 400,
              width: 225,
            },
            {
              id: 'filters',
              labelDefault: 'Filtros',
              labelKey: 'filters',
              iconKey: 'filter',
              toolPanel: 'agFiltersToolPanel',
              minWidth: 200,
              maxWidth: 400,
              width: 250,
            },
          ],
          position: 'right',
          defaultToolPanel: '',
        }}
        statusBar={statusBar}
        enableRangeSelection={true}
        defaultColDef={{
          sortable: true,
          filter: 'agMultiColumnFilter',
          enableRowGroup: true,
          floatingFilter: true,
          resizable: true,
        }}
        columnDefs={[
          {
            headerName: 'FOLIO',
            field: 'FOLIO',
            width: 120,
            pinned: 'left',
          },
          {
            headerName: 'RUTA',
            field: 'RUTA',
            width: 80,
            pinned: 'left',
          },
          {
            headerName: 'CLIENTE',
            field: 'CLIENTE',
            pinned: 'left',
            width: 250,
            onCellDoubleClicked(event) {
              // navigate('/client/' + clienteId);
              const clienteId = event.data.CLIENTE_ID;
              setClienteIdModal(clienteId);
              setIsOpenModal(true);
            },
            // cellRenderer: (event: any) => {},
          },
          {
            headerName: 'DOMICILIO',
            field: 'DOMICILIO',
            width: 250,
          },
          {
            headerName: 'LOCALIDAD',
            field: 'LOCALIDAD',
            width: 250,
          },
          {
            headerName: 'FECHA',
            width: 120,
            field: 'FECHA',
            // filter: 'agDateColumnFilter',
            cellRenderer: (p: any) => dayjs(p.value).format('DD/MM/YYYY'),
            // filterParams: {
            // operator: (filterLocalDateAtMidnight: any, cellValue: any) => {
            //   const dateAsString = cellValue;
            //   console.log(cellValue);
            //   if (dateAsString === undefined) {
            //     return -1;
            //   }
            //   const dateParts = dateAsString.split('/');
            //   const year = Number(dateParts[2]);
            //   const month = Number(dateParts[1]) - 1;
            //   const day = Number(dateParts[0]);
            //   const cellDate = new Date(year, month, day);
            //   if (filterLocalDateAtMidnight === cellDate) {
            //     return 0;
            //   }
            //   if (cellDate < filterLocalDateAtMidnight) {
            //     return -1;
            //   }
            //   if (cellDate > filterLocalDateAtMidnight) {
            //     return 1;
            //   }
            // },
            // },
          },
          {
            headerName: 'PRECIO_TOTAL',
            width: 150,
            field: 'PRECIO_TOTAL',
            filterParams: {
              filters: [
                {
                  filter: 'agNumberColumnFilter',
                },
                { filter: 'agSetColumnFilter' },
              ],
            },
          },
          {
            headerName: 'ENGANCHE',
            width: 150,
            field: 'ENGANCHE',
            filterParams: {
              filters: [
                {
                  filter: 'agNumberColumnFilter',
                },
                { filter: 'agSetColumnFilter' },
              ],
            },
          },
          {
            headerName: 'PARCIALIDAD',
            field: 'PARCIALIDAD',
            width: 120,
            filterParams: {
              filters: [
                {
                  filter: 'agNumberColumnFilter',
                },
                { filter: 'agSetColumnFilter' },
              ],
            },
          },
          {
            headerName: 'FREC_PAGO',
            field: 'FREC_PAGO',
            width: 150,
          },
          {
            headerName: 'VENDEDORES',
            field: 'VENDEDORES',
            width: 250,
          },
          // {
          // headerName: 'PAGO PROMEDIO',
          // field: 'IMPORTE_PAGO_PROMEDIO',
          // },
          {
            headerName: 'SALDO_REST',
            width: 150,
            field: 'SALDO_REST',
            filterParams: {
              filters: [
                {
                  filter: 'agNumberColumnFilter',
                },
                { filter: 'agSetColumnFilter' },
              ],
            },
          },
          {
            headerName: 'PORCENTAJE PAGADO',
            field: 'PORCETAJE_PAGADO',
            width: 150,
            cellStyle: cellStyles,
            filterParams: {
              filters: [
                {
                  filter: 'agNumberColumnFilter',
                },
                { filter: 'agSetColumnFilter' },
              ],
            },
          },
          {
            headerName: 'PAGOS ATRASADOS',
            width: 150,
            field: 'NUM_PLAZOS_ATRASADOS_BY_SALDO',
            filterParams: {
              filters: [
                {
                  filter: 'agNumberColumnFilter',
                },
                { filter: 'agSetColumnFilter' },
              ],
            },
            cellStyle: (params: any) => {
              const { value } = params;
              if (value >= 20) {
                return { backgroundColor: '#ff0000' };
              } else if (value >= 10) {
                return { backgroundColor: '#ff7700' };
              } else if (value >= 5) {
                return { backgroundColor: '#ffcc00' };
              } else if (value > 0) {
                return { backgroundColor: '#ffff00' };
              } else {
                return { backgroundColor: '#00ff00' };
              }
            },
          },
          {
            headerName: 'TIEMPO TRASCURRIDO',
            width: 150,
            field: 'TIEMPO_TRANSCURRIDO',
          },
          {
            headerName: 'FECHA ULTIMO PAGO',
            width: 150,
            field: 'FECHA_ULT_PAGO',
            cellRenderer: (p: any) => dayjs(p.value).format('DD/MM/YYYY'),
          },
        ]}
        // columnDefs={columnDefs}
      />
      <ModalCustom
        isOpen={isOpenModal}
        closeModal={() => setIsOpenModal(false)}
      >
        <Client clienteId={clienteIdModal !== undefined ? clienteIdModal : 0} />
      </ModalCustom>
    </div>
  );
};

export default ListClientes;
