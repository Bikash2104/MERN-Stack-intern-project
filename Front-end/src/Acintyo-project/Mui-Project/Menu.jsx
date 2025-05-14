import { Menu, MenuItem, Button } from '@mui/material';
import React from 'react';
import './Menu.css';

export default function MenuContainer(){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // classes={{
        //     paper: 'flex-menu',
        //   }}
        sx={{
            '& .MuiMenu-paper': {
              display: 'flex',
              flexDirection: 'row',
            },
            '& .MuiMenuItem-root': {
              flex: 1,
              textAlign: 'center',
            },
          }}
      >
        <MenuItem onClick={handleClose}>Menu Item 1</MenuItem>
        <MenuItem onClick={handleClose}>Menu Item 2</MenuItem>
        <MenuItem onClick={handleClose}>Menu Item 3</MenuItem>
      </Menu>
    </div>
  );
};
