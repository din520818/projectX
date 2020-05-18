import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
    root: {
      width: 1000,
    }
  });

export default function FreeAction() {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = React.useState({
        columns: [
          { title: 'Item', field: 'item' },
          { title: 'Quantity', field: 'quantity' },
          { title: 'Discount(%)', field: 'discount' },
          {
            title: 'Price',
            field: 'price',
          },
        ],
        data: [
        ],
      });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
    const classes = useStyles()
    return (
        <div className={classes.root}>
      <MaterialTable
        title="Invoice"
        columns={[
          { title: 'InvoiceNo', field: 'invoiceNo' },
          { title: 'Date', field: 'date' },
          { title: 'Client Name', field: 'clientName'},
          {
            title: 'Amount (Rs.)',
            field: 'amount',
          },
        ]}
        data={[
          { invoiceNo: '1234', date: '2/18/2020', clientName: 'Safal Bastola', amount:'1,025' },
          { invoiceNo: '1235', date: '3/18/2020', clientName: 'Dinesh Bhusal', amount: '2,346' },
        ]}        
        actions={[
          {
            icon: 'add',
            tooltip: 'Add User',
            isFreeAction: true,
            onClick: (event) => handleClickOpen()
          }
        ]}
      />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Invoice</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="invoiceNo"
            label="InvoiceNo"
          />
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label="Date"
            type="date"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="placeOfSupply"
            label="Place of Supply"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="contactNo"
            label="contactNo"
          />
          <TextField
            autoFocus
            margin="dense"
            id="clientName"
            label="Client Name"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="address"
            label="Address"
          />
          <TextField
            autoFocus
            margin="dense"
            id="shippingCost"
            label="Shipping Cost (Rs)"
          />
          <MaterialTable
            title="Items"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: (newData) =>
                new Promise((resolve) => {
                    setTimeout(() => {
                    resolve();
                    setState((prevState) => {
                        const data = [...prevState.data];
                        data.push(newData);
                        return { ...prevState, data };
                    });
                    }, 600);
                }),
                onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                    setTimeout(() => {
                    resolve();
                    if (oldData) {
                        setState((prevState) => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return { ...prevState, data };
                        });
                    }
                    }, 600);
                }),
                onRowDelete: (oldData) =>
                new Promise((resolve) => {
                    setTimeout(() => {
                    resolve();
                    setState((prevState) => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(oldData), 1);
                        return { ...prevState, data };
                    });
                    }, 600);
                }),
            }}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
      </div>
    )
  }
