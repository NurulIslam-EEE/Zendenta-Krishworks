import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PatientList from './PatientList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders, faCommentDots, faCalendarDays, faSackDollar } from '@fortawesome/free-solid-svg-icons'

const drawerWidth = 240;

function DashboardHome(props) {
    const [patient, setPatient] = useState([])
    useEffect(() => {
        fetch('https://619f39821ac52a0017ba467e.mockapi.io/patientDetails')
            .then(res => res.json())
            .then(data => setPatient(data))

    }, [])
    console.log(patient)


    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Box>Zendenta</Box>
            <Toolbar />

            <List>

                <ListItem button >
                    <ListItemIcon>

                        <FontAwesomeIcon icon={faCalendarDays} />
                    </ListItemIcon>
                    <ListItemText primary='Overview' />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>

                        <FontAwesomeIcon icon={faCalendarDays} />
                    </ListItemIcon>
                    <ListItemText primary='Calender' />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>

                        <PersonOutlineOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary='Patient List' />
                </ListItem>

                <ListItem button >
                    <ListItemIcon>

                        <FontAwesomeIcon icon={faCommentDots} />
                    </ListItemIcon>
                    <ListItemText primary='Messages' />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>

                        <FontAwesomeIcon icon={faSackDollar} />
                    </ListItemIcon>
                    <ListItemText primary='Payment Information' />
                </ListItem>
                <ListItem button >
                    <ListItemIcon>

                        <FontAwesomeIcon icon={faSliders} />
                    </ListItemIcon>
                    <ListItemText primary='Setting' />
                </ListItem>

            </List>


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const useStyle = makeStyles({
        navContainer: {
            background: "#F2F5F9 !important",
            // borderBottom: "1px solid black !important",
            boxShadow: "0 0 0 0 !important"
        }
    })
    const {
        navContainer
    } = useStyle();
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                className={navContainer}
                position="fixed"
                sx={{
                    width: { xl: `calc(100% - ${drawerWidth}px)` },
                    ml: { xl: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ borderBottom: '1px solid black' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'block', md: 'block', lg: 'block', xl: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <PersonOutlineOutlinedIcon sx={{ color: '#0D53FC' }} /> Diane Cooper
                    </Typography>
                </Toolbar>
                <Box sx={{ borderBottom: '1px solid black', color: '#0D53FC', height: '60px' }}>

                    Patient List <ArrowForwardIosIcon /> {patient[0]?.name}

                </Box>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { xl: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block', lg: 'block', xl: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'none', md: 'none', xl: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>

            </Box>

            <Box

                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Box sx={{ height: '100px', marginTop: '100px' }}>
                    <PatientList patient={patient} />
                </Box>


            </Box>
        </Box>
    );
}

DashboardHome.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashboardHome;
