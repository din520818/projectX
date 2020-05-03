import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Table from 'material-table';

const useStyles = makeStyles((theme) => ({
    input: {
      '& > *': {
        marginBottom: theme.spacing(2),
        width: '50ch'
      },
    },
    root: {
        margin: theme.spacing(2),
    }
  }));
  
export default function SidePanel() {
const classes = useStyles();

return (
    <div className={classes.root}>
        <form className={classes.input} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Enter bar code" variant="outlined" />
        </form>
        <Table
          columns={[
            { title: "Adı", field: "name" },
            { title: "Soyadı", field: "surname" },
            { title: "Doğum Yılı", field: "birthYear", type: "numeric" },
            {
              title: "Doğum Yeri",
              field: "birthCity"
            }
          ]}
          data={[
            { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 }
          ]}
          title="Demo Title"
        />
    </div>
);
}