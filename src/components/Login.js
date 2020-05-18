import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import {Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Redirect } from 'react-router-dom';

export default function Login() {
    const [username, setName] = useState('');
    const [password, setPass] = useState('');
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    
    const setUsername = event => {
        setName(event.target.value)
    }
  
    const setPassword = event => {
        setPass(event.target.value)
    }
  
    const signIn = () => {
      if (username === "admin" && password === "password") {
        setMessage("You have successfully Logged In!")
        setOpen(true)
      } else {
        setOpen(true)
        setMessage("Incorrect")
      }
    }
  
    const handleClose = () => {
      setOpen(false)
    };
    return (
    <div className="form">
        <header className="App-header">
          <div className="Login">
            <TextField
              variant="standard"
              placeholder="Username"
              margin="normal"
              required
              onChange={setUsername}
              value={username}
            />
            <TextField
              variant="standard"
              placeholder="Password"
              margin="normal"
              required
              type="password"
              onChange={setPassword}
              value={password}
            />

            <div className="Button">
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  signIn();
                }}
              >
                Log In
              </Button>
            </div>
          </div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Sign In</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {message}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Okay
              </Button>
            </DialogActions>
          </Dialog>
        </header>
      </div>
    );
  }