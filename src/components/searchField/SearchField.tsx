'use client';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';

const SearchFieldStyled = styled(TextField)({
    width: '100%',
    marginBottom: '1.3rem',    
    '& .MuiOutlinedInput-root': {
        fontFamily: '__Maven_Pro_a269ef',
    },
    '& .MuiInputBase-root fieldset.MuiOutlinedInput-notchedOutline': {
        borderColor: ' rgba(204, 204, 204, 0.8)',
        borderWidth: ' 2px ',
        borderRadius: '8px',
    },
    '& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: ' rgba(127, 163, 211, 0.8)',
        borderWidth: ' 2px ',
    },
    "@media (min-width: 576px)": {
        flex: '1',
        marginRight: '0.6rem',
        maxWidth: '23rem',
    }
});

const SearchField = () => {
    return(
        <SearchFieldStyled
            size="small"
            variant="outlined"
            placeholder='Buscar'
            onFocus={e => {e.target.select();}}
            InputProps={{
                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
            }}
        />
  );
}

export default SearchField;

