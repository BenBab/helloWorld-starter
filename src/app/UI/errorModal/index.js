import React, { useState } from 'react'

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";


function ErrorModal({ error }) {
    const [open, setOpen] = useState(error !== null);

    
      const handleClose = () => {
        setOpen(false);
      };


    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
            fullWidth={true}
         >
            <DialogTitle id="form-dialog-title">Oh no! An error occured</DialogTitle>
            <DialogContent>
            <DialogContentText>Please refresh and try again</DialogContentText>
            <br />
            <br />
              {error.toString()}
            </DialogContent>
        </Dialog>
    )
}

export default ErrorModal
