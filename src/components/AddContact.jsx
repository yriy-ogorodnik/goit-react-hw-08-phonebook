import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';

import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';

export default function AddContact() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add new contact
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: 'transparent',
          },
        }}
      >
        <ContactForm handleClose={handleClose} />
      </Dialog>
    </>
  );
}
