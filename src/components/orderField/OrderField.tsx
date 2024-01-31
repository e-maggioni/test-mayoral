'use client';

import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';

const OrderFieldStyled = styled(Select)({
    width: '100%',
    marginBottom: '1.5rem',
    fontFamily: '__Maven_Pro_a269ef',
    '& *': { fontFamily: '__Maven_Pro_a269ef' },
    '&  fieldset.MuiOutlinedInput-notchedOutline, &.Mui-focused fieldset.MuiOutlinedInput-notchedOutline': { 
        borderColor: ' rgba(204, 204, 204, 0.8)',
        borderWidth: ' 2px ',
        borderRadius: '8px',
     },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: ' rgba(127, 163, 211, 0.8)',
        borderWidth: ' 2px ',
     },
     "@media (min-width: 576px)": {
        width: '11rem',
     }
});

const options = [
  'Precio mayor',
  'Precio menor',
];

const OrderField = () => {
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

    return(
      <OrderFieldStyled
            displayEmpty
            value={personName}
            onChange={(e:any) => handleChange(e)}
            input={<OutlinedInput />}
            size='small'
            renderValue={(selected:any) => {
                console.log("----> selected:",selected);
                console.log("----> selected.length:",selected.length);
                if (selected.length === 0 || selected[0] == '' ) { return <>Ordenar por</>; }
                return selected.join(', ');
            }}
            inputProps={{ 'aria-label': 'Without label' }}
       >
            <MenuItem selected value="">Ordenar por</MenuItem>
            {options.map((option) => <MenuItem key={option} value={option} >{option}</MenuItem> )}
       </OrderFieldStyled>
    );
}

export default OrderField;

