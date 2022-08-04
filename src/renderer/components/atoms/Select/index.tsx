import React from 'react';
import SelectBase from 'react-select';
import { ISelect } from './ISelect';

const Select = ({ options, setValue }: ISelect) => {
  return (
    <SelectBase
      options={options}
      formatOptionLabel={(option: any) => option.COBRADOR}
      // defaultInputValue={options[0].COBRADOR}
      isSearchable={false}
      placeholder="Seleccione una ruta"
      onChange={(option: any) => {
        setValue(option.COBRADOR_ID);
        // console.log(option);
      }}
      styles={{
        container: (base: any) => ({
          ...base,
          width: '100%',
          maxWidth: '800px',
        }),
      }}
    />
  );
};

export default Select;
