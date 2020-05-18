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
      marginLeft: 100,
      width: 1000,
    }
  });

export default function FreeAction() {
    const [open, setOpen] = React.useState(false)
    const [detailsOpen, setDetailsOpen] = React.useState(false)


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickDetailsOpen = () => {
    setDetailsOpen(true);
  };

  const handleDetailsClose = () => {
    setDetailsOpen(false);
  };
  
  
    const classes = useStyles()
    return (
        <div className={classes.root}>
      <MaterialTable
        title="Inventory"
        columns={[
          { title: 'Item Id', field: 'itemId' },
          { title: 'Item', field: 'item' },
          { title: 'Category', field: 'category' },
          { title: 'Stock', field: 'stock' },
          {
            title: 'Price',
            field: 'price',
          },
          { title: 'Discount(%)', field: 'discount' },
          
        ]}
        data={[
          { itemId: '1234', item: 'Cake', stock: 21, category: 'Foods', price: 226, discount: 0 },
          { itemId: '4588', item: 'Icecream', stock: 45, category: 'Foods', price: 65, discount: 5 },
        ]}        
        actions={[
          {
            icon: 'add',
            tooltip: 'Add Item',
            isFreeAction: true,
            onClick: (event) => handleClickOpen()
          }
        ]}
        onRowClick={(event, rowData) => handleClickDetailsOpen()}
      />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="itemId"
            label="Item Id"
          />
          <TextField
            autoFocus
            margin="dense"
            id="barCode"
            label="Barcode"
            maxWidth="500px"
          />
          <TextField
            autoFocus
            margin="dense"
            id="item"
            label="Item"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="stock"
            label="Stock"
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Category"
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Price"
          />
          <TextField
            autoFocus
            margin="dense"
            id="discount"
            label="Discount"
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
      <Dialog open={detailsOpen} onClose={handleDetailsClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Item Details</DialogTitle>
        <DialogContent>
          <h6>Item Id: 1234</h6>
          <h6>Barcode: 15648451</h6>
          <h6>Item: Cake</h6>
          <h6>Stock: 21</h6>
          <h6>Category: Foods</h6>
          <h6>Price: 226</h6>
          <h6>Discount: 0</h6>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Delete
          </Button>
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
