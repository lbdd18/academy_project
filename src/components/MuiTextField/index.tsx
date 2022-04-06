import { TextFieldProps, TextField } from '@mui/material';

const MuiTextField = (props: TextFieldProps) => {
    return(
        <TextField variant="outlined" {...props} />
    )
}

export default MuiTextField;