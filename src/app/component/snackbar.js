import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={20} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars(props) {
  const { setMsgData, msgData } = props;
  let {
    open = false,
    autoHideDuration = 4000,
    severity = 'success',
    message = 'This is a test message',
  } = msgData;
  const onClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setMsgData({ ...msgData, open: false });
  };
  return (
    <Stack spacing={6} sx={{ width: '200%' }}>
      <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: "center" }} autoHideDuration={autoHideDuration} onClose={onClose}>
        <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}