import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        />
        <TextField
        //   id="outlined-number"
          label="Number"
          type="number"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" slotProps={{
            inputLabel:{
                shrink:true,
            },
        }} />
        <TextField
        //   id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          variant="filled"
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          variant="filled"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          variant="standard"
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          variant="standard"
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
      </div>
    </Box>
  );
}





// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function ValidationTextFields() {
//   return (
//     <Box
//       component="form"
//       sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           error
//           id="outlined-error"
//           label="Error"
//           defaultValue="Hello World"
//         />
//         <TextField
//           error
//           id="outlined-error-helper-text"
//           label="Error"
//           defaultValue="Hello World"
//           helperText="Incorrect entry."
//         />
//       </div>
//       <div>
//         <TextField
//           error
//           id="filled-error"
//           label="Error"
//           defaultValue="Hello World"
//           variant="filled"
//         />
//         <TextField
//           error
//           id="filled-error-helper-text"
//           label="Error"
//           defaultValue="Hello World"
//           helperText="Incorrect entry."
//           variant="filled"
//         />
//       </div>
//       <div>
//         <TextField
//           error
//           id="standard-error"
//           label="Error"
//           defaultValue="Hello World"
//           variant="standard"
//         />
//         <TextField
//           error
//           id="standard-error-helper-text"
//           label="Error"
//           defaultValue="Hello World"
//           helperText="Incorrect entry."
//           variant="standard"
//         />
//       </div>
//     </Box>
//   );
// }
