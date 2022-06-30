import { IListClientes } from './IListClientes';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import dayjs from 'dayjs';

import 'ag-grid-enterprise';

const ListClientes = ({ ventas }: IListClientes) => {
  // const columnDefs = [
  //   { fields: 'CLIENTE', headerName: 'CLIENTE', width: 200 },
  //   { fields: 'FECHA', headerName: 'Fecha', width: 200 },
  //   { fields: 'FREC_PAGO', headerName: 'Frecuencia de Pago', width: 200 },
  //   { fields: 'PRECIO_TOTAL', headerName: 'Precio Total', width: 200 },
  //   { fields: 'SALDO_REST', headerName: 'Saldo Restante', width: 200 },
  // ];

  const statusBar = {
    statusPanels: [{ statusPanel: 'agAggregationComponent' }],
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
          filter: true,
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
            headerName: 'CLIENTE',
            field: 'CLIENTE',
            pinned: 'left',
            width: 250,
          },
          {
            headerName: 'DOMICILIO',
            field: 'DOMICILIO',
            width: 250,
          },
          {
            headerName: 'FECHA',
            width: 120,
            field: 'FECHA',
            cellRenderer: (p: any) => dayjs(p.value).format('DD/MM/YYYY'),
          },
          {
            headerName: 'PRECIO_TOTAL',
            width: 150,
            field: 'PRECIO_TOTAL',
          },
          {
            headerName: 'ENGANCHE',
            width: 150,
            field: 'ENGANCHE',
          },
          {
            headerName: 'PARCIALIDAD',
            field: 'PARCIALIDAD',
            width: 120,
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
          {
            // headerName: 'PAGO PROMEDIO',
            // field: 'IMPORTE_PAGO_PROMEDIO',
          },
          {
            headerName: 'SALDO_REST',
            width: 150,
            field: 'SALDO_REST',
          },
          {
            headerName: 'PORCENTAJE PAGADO',
            field: 'PORCETAJE_PAGADO',
            width: 150,
            cellStyle: (params: any) => {
              const { value } = params;
              if (value < 10) {
                return { backgroundColor: '#ff0000', color: 'white' };
              } else if (value < 25) {
                return { backgroundColor: '#ff7700', color: 'white' };
              } else if (value < 50) {
                return { backgroundColor: '#ffcc00' };
              } else if (value < 75) {
                return { backgroundColor: '#ffff00' };
              } else {
                return { backgroundColor: '#00ff00' };
              }
            },
          },
          // {
          //   headerName: 'PAGOS ATRASADOS',
          //   width: 150,
          //   field: 'NUM_PLAZOS_ATRASADO',
          // },
          {
            headerName: 'PAGOS ATRASADOS',
            width: 150,
            field: 'NUM_PLAZOS_ATRASADOS_BY_SALDO',
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
    </div>
  );
};

export default ListClientes;
