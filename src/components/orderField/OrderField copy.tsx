'use client';

import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';

const OrderFieldStyled = styled(Select)({
    width: '100%',
    marginBottom: '1.3rem',
    '& .MuiInputBase-root fieldset.MuiOutlinedInput-notchedOutline': { 
        borderColor: ' rgba(204, 204, 204, 0.8)',
        borderWidth: ' 2px ',
        borderRadius: '8px',
       },
      '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': { 
        borderColor: ' rgba(127, 163, 211, 0.8)',
        borderWidth: ' 2px ',
       },
});

const OrderField = () => {
    const [age, setAge] = useState<string | number>('');
    const [open, setOpen] = useState(false);

    const handleChange = (event: SelectChangeEvent<typeof age>) => {
      setAge(event.target.value);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const handleOpen = () => {
      setOpen(true);
    };

    return(
        <OrderFieldStyled
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            label="Age"
            onChange={handleChange}
            input={<OutlinedInput />}
            placeholder='order'
            size= "small"
            // renderValue={(selected:number) => {
            //     return console.log("----> selected:", selected);
            // //   if (selected.length === 0) {
            // //     return <em>Placeholder</em>;
            // //   }
            // //   return selected.join(', ');
            // }}
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            </OrderFieldStyled>
    );
}

export default OrderField;

