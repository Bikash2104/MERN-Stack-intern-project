import * as React from 'react';
import { Icon } from "@iconify/react/dist/iconify.js";
import Grid from "@mui/material/Grid2"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: "5px",
    backgroundColor: alpha(theme.palette.common.black, 0.05),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '27ch',
            // height: "2ch"

        },
    },
}));

export default function Navbar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'
                sx={{
                    width: '100%',
                    height: '53px',
                    backgroundColor: 'white',
                    color: 'black',
                    display: "flex",
                    justifyContent: "center",

                }}
            >
                <Toolbar>
                
                    <Grid container spacing={4} sx={{
                        justifyContent: "space-around",
                        alignItems: "center", 
                        height: "100%"       
                    }} >
                        <Grid item xs={3} sx={{ display: "flex", alignItems: "center" }}>

                            <IconButton size="large" sx={{ marginLeft: "70px", marginRight: "-29px" }} color="inherit" aria-label="open drawer" >
                                <Icon icon="devicon:linkedin" width="35" height="35" />
                            </IconButton>
                            <Search sx={{ marginRight: "130px" }}>
                                <SearchIconWrapper>
                                    <Icon icon="material-symbols:search-rounded" width="22" height="22" style={{ color: '#292727' }} />
                                </SearchIconWrapper>
                                <StyledInputBase sx={{ fontSize: "15px" }} placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
                            </Search>

                        </Grid>

                        <Grid item xs={6} sx={{ display: "flex", justifyItems: "end", alignItems: "center" }}  >

                            <Tabs sx={{
                                height: "100%", // Match AppBar height
                                '& .MuiTab-root': {
                                    minHeight: "52px",
                                    textTransform: "capitalize",
                                },
                            }}
                                value={value} onChange={handleChange}>

                                <Tab value={0} sx={{ fontSize: "10px", padding: "0px", minWidth: "80px" }} icon={<Icon icon="mdi:home" width="24" height="24" />} label="Home" />
                                <Tab value={1} sx={{ fontSize: "10px", padding: "0px", minWidth: "70px", }} icon={<Icon icon="gravity-ui:persons" width="25" height="24" />} label="My Network" />
                                <Tab value={2} sx={{ fontSize: "10px", padding: "0px", minWidth: "70px" }} icon={<Icon icon="bxs:shopping-bags" width="24" height="24" />} label="Jobs" />
                                <Tab value={3} sx={{ fontSize: "10px", padding: "0px", minWidth: "70px" }} icon={<Icon icon="jam:messages-f" width="28" height="24" />} label="Messages" />
                                <Tab value={4} sx={{ fontSize: "10px", padding: "0px", minWidth: "85px" }} icon={<Icon icon="mdi:notifications" width="24" height="24" />} label="Notifications" />
                                <Tab value={5} sx={{ fontSize: "10px", padding: "0px", minWidth: "50px" }} icon={<Icon icon="ic:sharp-account-circle" width="30" height="24" />} label="Me" />
                            </Tabs>
                        </Grid>
                        <Grid item xs={3} sx={{ display: "flex", justifyItems: "start", alignItems: "center" }}>
                            <Box sx={{ textAlign: "center" }} >
                                <Typography sx={{ fontSize: "11px" }} component="div"><Icon icon="mdi:dots-grid" width="28" height="28" style={{ color: " #292727" }} /></Typography>
                                <Typography sx={{ fontSize: "11px", color: "gray", }} component="div">For Business</Typography>
                            </Box>
                            <Typography sx={{ fontSize: "12px", color: "gray", marginLeft: "10px" }} component="span">Try Premium for &#x20B9; 0</Typography>
                        </Grid>

                    </Grid>

                </Toolbar>
            </AppBar>
        </Box>
    );
}