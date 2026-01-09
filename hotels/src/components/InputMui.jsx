import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function InputMui({ placeholder, value, onChange=() => {}, required = false, helperText = "", errorc = false, label = "", startIcon = null, endIcon = null, type = "text" }) {
  return (
    <TextField
      type={type} 
      variant="outlined"
      placeholder={placeholder}
      name={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      style={{ margin: "0 1vw" }}
      size='small'
      helperText={helperText}
      error={errorc}
      label={label}
      slotProps={{
          input: {
            startAdornment: startIcon && (
              <InputAdornment position="start">
                {startIcon}
              </InputAdornment>
            ),
            endAdornment: endIcon && (
              <InputAdornment position="end">
                {endIcon}
              </InputAdornment>
              
            ),
          },
        }}
    />
  );
}

export default InputMui;
