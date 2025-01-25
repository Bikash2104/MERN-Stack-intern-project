// import * as React from 'react';
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ClickAwayListener from '@mui/material/ClickAwayListener';
// import Grow from '@mui/material/Grow';
// import Paper from '@mui/material/Paper';
// import Popper from '@mui/material/Popper';
// import MenuItem from '@mui/material/MenuItem';
// import MenuList from '@mui/material/MenuList';

// const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

// export default function SplitButton() {
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef(null);
//   const [selectedIndex, setSelectedIndex] = React.useState(1);

//   const handleClick = () => {
//     console.info(`You clicked ${options[selectedIndex]}`);
//   };

//   const handleMenuItemClick = (event, index) => {
//     setSelectedIndex(index);
//     setOpen(false);
//   };

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event) => {
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//       return;
//     }

//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <ButtonGroup
//         variant="contained"
//         ref={anchorRef}
//         aria-label="Button group with a nested menu"
//       >
//         <Button  onClick={handleClick}>{options[selectedIndex]}</Button>
//         <Button
//           size="small"
//           aria-controls={open ? 'split-button-menu' : undefined}
//           aria-expanded={open ? 'true' : undefined}
//           aria-label="select merge strategy"
//           aria-haspopup="menu"
//           onClick={handleToggle}
//         >
//           <ArrowDropDownIcon />
//         </Button>
//       </ButtonGroup>
//       <Popper
//         sx={{ zIndex: 1 }}
//         open={open}
//         anchorEl={anchorRef.current}
//         role={undefined}
//         transition
//         disablePortal
//       >
//         {({ TransitionProps, placement }) => (
//           <Grow
//             {...TransitionProps}
//             style={{
//               transformOrigin:
//                 placement === 'bottom' ? 'center top' : 'center bottom',
//             }}
//           >
//             <Paper>
//               <ClickAwayListener onClickAway={handleClose}>
//                 <MenuList id="split-button-menu" autoFocusItem>
//                   {options.map((option, index) => (
//                     <MenuItem
//                       key={option}
//                       disabled={index === 2}
//                       selected={index === selectedIndex}
//                       onClick={(event) => handleMenuItemClick(event, index)}
//                     >
//                       {option}
//                     </MenuItem>
//                   ))}
//                 </MenuList>
//               </ClickAwayListener>
//             </Paper>
//           </Grow>
//         )}
//       </Popper>
//     </React.Fragment>
//   );
// }


// import * as React from 'react';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Button from '@mui/material/Button';

// export default function DisableElevation() {
//   return (
//     <ButtonGroup
//       disableElevation
//       variant="contained"
//       aria-label="Disabled button group"
//     >
//       <Button>One</Button>
//       <Button>Two</Button>
//     </ButtonGroup>
//   );
// }



// import * as React from 'react';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Button from '@mui/material/Button';
// import SaveIcon from '@mui/icons-material/Save';

// export default function LoadingButtonGroup() {
//   return (
//     <ButtonGroup variant="outlined" aria-label="Loading button group">
//       <Button>Submit</Button>
//       <Button>Fetch data</Button>
//       <Button loading loadingPosition="start" startIcon={<SaveIcon />}>
//         Save
//       </Button>
//     </ButtonGroup>
//   );
// }


import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function LoadingButtonGroup() {
  return (
    <div>
      <Checkbox {...label} disableRipple={true} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox
      disableRipple={true}
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </div>
  );
}
