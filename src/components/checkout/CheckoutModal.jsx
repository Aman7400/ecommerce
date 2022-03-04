import * as React from "react";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function CheckoutModal({ open, setCheckout }) {
  const [checkoutPass, setCheckoutPass] = React.useState(false);

  const handleClose = () => {
    setCheckout(false);
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        {checkoutPass ? (
          <>
            <DialogTitle>Your Cart</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                SOmething
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} autoFocus>
                Checkout
              </Button>
            </DialogActions>
          </>
        ) : (
          <>
            <DialogTitle>Your Cart is empty</DialogTitle>
            <Button onClick={handleClose}>Shop</Button>
          </>
        )}
      </Dialog>
    </div>
  );
}
