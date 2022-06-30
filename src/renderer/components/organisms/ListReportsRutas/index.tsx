import { useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { IListReportsRutasProps } from './IListReportsRutas';

const ListReportsRutas = ({ reports }: IListReportsRutasProps) => {
  const defaultColDef = useMemo(() => {
    return {
      minWidth: 100,
      resizable: true,
      sortable: true,
      filter: true,
      enableRowGroup: true,
      floatingFilter: true,
    };
  }, []);
  const columnDefs = [
    { headerName: 'RUTA', field: 'COBRADOR', width: 250 },
    { headerName: 'SEMANA', field: 'SEMANA', width: 100 },
    { headerName: 'CTAS COBRADAS', field: 'NUM_CTAS_COB', width: 150 },
    { headerName: 'TOTAL CUENTAS', field: 'NUMERO_CTAS', width: 150 },
    { headerName: 'TOTAL COBRADO', field: 'TOTAL_COBRADO', width: 150 },
    { headerName: '% COBRO', field: 'PORCENTAJE_COBRO', width: 120 },
    {
      headerName: 'COBRO PARCIALMENTE',
      field: 'PORCENTAJE_COBRO_PARCIALIDAD',
      width: 150,
    },
    {
      field: 'HISTORIAL',
      headerName: 'ULTIMAS 10 SEMANAS',
      cellRenderer: 'agSparklineCellRenderer',
      flex: 1,
      minWidth: 300,
      cellRendererParams: {
        sparklineOptions: {
          xKey: 'SEMANA',
          yKey: 'TOTAL_COBRADO',
          type: 'area',
          marker: {
            formatter: markerFormatter,
            enabled: true,
          },
          // fill: PRIMARY_COLOR,
          // stroke: PRIMARY_COLOR,
          // highlightStyle: {
          //   fill: 'orange',
          // },
          fill: 'rgba(216, 204, 235, 0.3)',
          line: {
            stroke: 'rgb(119,77,185)',
          },
          highlightStyle: {
            fill: 'rgb(143,185,77)',
          },
          axis: {
            stroke: 'rgb(204, 204, 235)',
          },
          paddingInner: 0.3,
          paddingOuter: 0.1,
        },
      },
    },
  ];

  const statusBar = {
    statusPanels: [{ statusPanel: 'agAggregationComponent' }],
  };

  return (
    <div
      className="ag-theme-alpine"
      style={{ height: '-webkit-fill-available' }}
    >
      <AgGridReact
        defaultColDef={defaultColDef}
        rowData={reports}
        columnDefs={columnDefs}
        statusBar={statusBar}
        animateRows={true}
        enableRangeSelection={true}
        rowGroupPanelShow={'always'}
        rowHeight={50}
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
      />
    </div>
  );
};

interface params {
  min: number;
  max: number;
}
const markerFormatter = (params: params) => {
  const { min, max } = params;

  return {
    size: min || max ? 5 : 3,
    fill: min ? '#ee6666' : max ? '#3ba272' : 'skyBlue',
    stroke: min ? '#ee6666' : max ? '#3ba272' : 'skyBlue',
  };
};

export default ListReportsRutas;
