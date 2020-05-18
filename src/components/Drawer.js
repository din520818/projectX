import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function AppDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    menu: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* {['Sales', 'Purchase'].map((text, index) => ( */}
          <ListItem button component={Link} to='/sales' key='sales'>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary='sales' />
          </ListItem>
          <ListItem button component={Link} to='/purchases' key='purchases'>
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary='purchases' />
          </ListItem>
          <ListItem button component={Link} to='/inventory' key='inventory'>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary='Inventory' />
          </ListItem>
        {/* ))} */}
      </List>
      <Divider />
      <List>
        {['Reports'].map((text, index) => (
          <Link to='/reports'>
          <ListItem button key={text}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['ListItemIcon'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)} edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

