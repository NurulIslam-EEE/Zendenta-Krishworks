import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Avatar } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
    faGaugeSimple,
    faSliders,
    faCommentDots,
    faCalendarDays,
    faSackDollar,
    faCircleInfo,
    faPenToSquare,
    faPrint,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../img/logo.png";
import user from "../../img/user2.jpg";


const Search = styled("div")(({ theme }) => ({
    position: "relative",
    border: "1px solid gray",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

const drawerWidth = 240;

function DashboardHome(props) {
    const [patient, setPatient] = useState([]);
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
            .then((res) => res.json())
            .then((data) => setPatient(data));
    }, []);
    useEffect(() => {
        fetch("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails")
            .then((res) => res.json())
            .then((data) => setDoctor(data));
    }, []);
    console.log(doctor);

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const useStyle = makeStyles({
        dashLink: {
            display: "flex",
            alignItems: "center",
            color: "#2D3B4C !important",
            fontWeight: "700!important",
            textDecoration: "none",
            fontSize: "15px !important",
        },
        activeColor: {
            display: "flex",
            alignItems: "center",
            color: "white",
            fontWeight: "400 !important",
            textDecoration: "none",
            fontSize: "15px !important",
            backgroundColor: "#0D53FC !important",
            width: "100% !important",
        },
        removeBorder: {
            padding: "0 !important",
            marginTop: "1rem !important",
        },
        navContainer: {
            background: "#F2F5F9 !important",
            // borderBottom: "1px solid black !important",
            boxShadow: "0 0 0 0 !important",
        },
        iconColor: {
            color: "white !important",
        },
        iconInactive: {
            color: "gray !important",
        },
        editIcon: {
            marginRight: "0.4rem !important"
        }
    });

    const {
        dashLink,
        navContainer,
        activeColor,
        removeBorder,
        iconColor,
        iconInactive,
        editIcon
    } = useStyle();

    const { pathname } = useLocation();
    console.log(pathname);
    const drawer = (
        <div>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "start",
                    marginTop: "1.5rem",
                    marginBottom: "1rem",
                }}
            >
                <img
                    src={logo}
                    width="80px"
                    height="80px"
                    alt="patientImage"
                ></img>
                <Box>
                    <Typography variant="h5" sx={{ color: "#2D3B4C", fontWeight: "600" }}>
                        Zendenta
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "gray" }}>
                        Cobut gigi tanpa sakit
                    </Typography>
                </Box>
            </Box>

            <List>
                <ListItem button className={removeBorder}>
                    <Link
                        to="/overview"
                        className={pathname === "/overview" ? activeColor : dashLink}
                    >
                        <ListItemIcon
                            sx={{ paddingLeft: "0.9rem" }}
                            className={pathname === "/overview" ? iconColor : iconInactive}
                        >
                            <FontAwesomeIcon icon={faGaugeSimple} />
                        </ListItemIcon>
                        <ListItemText primary="Overview" />
                    </Link>
                </ListItem>
                <ListItem button className={removeBorder}>
                    <Link
                        to="/calendar"
                        className={pathname === "/calendar" ? activeColor : dashLink}
                    >
                        <ListItemIcon
                            sx={{ paddingLeft: "0.9rem" }}
                            className={pathname === "/calendar" ? iconColor : iconInactive}
                        >
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </ListItemIcon>
                        <ListItemText primary="Calender" />
                    </Link>
                </ListItem>
                <ListItem button className={removeBorder}>
                    <Link
                        to="/"
                        className={pathname === "/" ? activeColor : dashLink}
                    >
                        <ListItemIcon
                            sx={{ paddingLeft: "0.6rem" }}
                            className={pathname === "/" ? iconColor : iconInactive}
                        >
                            <PersonOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Patient List" />
                    </Link>
                </ListItem>

                <ListItem button className={removeBorder}>
                    <Link
                        to="/messages"
                        className={pathname === "/messages" ? activeColor : dashLink}
                    >
                        <ListItemIcon
                            sx={{ paddingLeft: "0.9rem" }}
                            className={pathname === "/messages" ? iconColor : iconInactive}
                        >
                            <FontAwesomeIcon icon={faCommentDots} />
                        </ListItemIcon>
                        <ListItemText primary="Messages" />
                    </Link>
                </ListItem>
                <ListItem button className={removeBorder}>
                    <Link
                        to="/paymentInfo"
                        className={pathname === "/paymentInfo" ? activeColor : dashLink}
                    >
                        <ListItemIcon
                            sx={{ paddingLeft: "0.9rem" }}
                            className={pathname === "/paymentInfo" ? iconColor : iconInactive}
                        >
                            <FontAwesomeIcon icon={faSackDollar} />
                        </ListItemIcon>
                        <ListItemText primary="Payment Information" />
                    </Link>
                </ListItem>
                <ListItem button className={removeBorder}>
                    <Link
                        to="/settings"
                        className={pathname === "/settings" ? activeColor : dashLink}
                    >
                        <ListItemIcon
                            sx={{ paddingLeft: "0.9rem" }}
                            className={pathname === "/settings" ? iconColor : iconInactive}
                        >
                            <FontAwesomeIcon icon={faSliders} />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </Link>
                </ListItem>

                <Box sx={{ marginTop: "12rem !important" }}>
                    <ListItem
                        sx={{ borderBottom: "1px solid #d3ddea", }}
                        className={removeBorder}
                    >
                        <ListItemIcon sx={{ paddingLeft: "0.9rem" }}>
                            <FontAwesomeIcon icon={faCircleInfo} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: "gray" }} primary="Help ?" />
                    </ListItem>
                    <ListItem>
                        <Box
                            sx={{
                                marginTop: "1rem",
                                display: "flex",
                                alignItems: "end",
                                textAlign: "start",
                            }}
                        >
                            <Avatar src={user} alt="" />
                            <Box sx={{ marginLeft: "0.8rem !important" }}>
                                <Typography
                                    sx={{ fontSize: "1rem", color: "#2D3B4C", fontWeight: "600" }}
                                >
                                    {doctor[0]?.name}
                                </Typography>
                                <Typography sx={{ fontSize: "0.8rem", color: "gray" }}>
                                    {doctor[0]?.specification}
                                </Typography>
                            </Box>
                            <ExpandMoreIcon sx={{ marginLeft: "2rem !important" }} />
                        </Box>
                    </ListItem>
                </Box>
            </List>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                className={navContainer}
                position="fixed"
                sx={{
                    width: { xl: `calc(100% - ${drawerWidth}px)` },
                    ml: { xl: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ borderBottom: "1px solid #d3ddea" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            mr: 2,
                            display: { sm: "block", lg: "block", md: "block", xl: "none" },
                        }}
                    >
                        <MenuIcon sx={{ color: "black !important" }} />
                    </IconButton>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <PersonOutlineOutlinedIcon
                            sx={{ color: "#0D53FC", fontSize: "2rem" }}
                        />
                        <Typography
                            variant="h5"
                            sx={{ color: "#2D3B4C", fontWeight: "600", marginLeft: "0.3rem" }}
                        >
                            Diane Cooper
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                            marginLeft: "auto",
                        }}
                    >
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon sx={{ color: "gray" }} />
                            </SearchIconWrapper>
                            <StyledInputBase
                                sx={{ color: "gray", fontWeight: "bold" }}
                                placeholder="Search"
                                inputProps={{ "aria-label": "search" }}
                            />
                        </Search>

                        <AddCircleIcon
                            sx={{
                                color: "#0D53FC !important",
                                fontSize: "2.5rem",
                                marginLeft: "0.9rem",
                            }}
                        />
                        <CircleNotificationsIcon
                            sx={{
                                color: "gray !important",
                                fontSize: "2.5rem",
                                marginLeft: "0.5rem",
                            }}
                        />
                    </Box>
                </Toolbar>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        textAlign: "center",
                        borderBottom: "1px solid #d3ddea",
                        height: "60px",
                        paddingLeft: "24px",
                    }}
                >
                    <Typography variant="h6" sx={{ color: "#0D53FC !important" }}>
                        Patient List
                    </Typography>{" "}
                    <ArrowForwardIosIcon sx={{ color: "gray", marginLeft: "1rem" }} />{" "}
                    <Typography
                        variant="h6"
                        sx={{ color: "gray !important", marginLeft: "0.6rem" }}
                    >
                        {patient[0]?.name}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                            marginLeft: "auto",
                            paddingRight: "24px",
                        }}
                    >
                        <Box
                            sx={{
                                height: "30px",
                                width: "50px",
                                background: "white",
                                color: "gray",
                                paddingTop: "5px",
                                borderRadius: "3px",
                                bottom: "15px",
                                right: "15px",
                                fontSize: "0.9rem",
                                fontWeight: "600",
                                marginRight: "1rem",
                            }}
                        >
                            <FontAwesomeIcon icon={faPrint} />
                        </Box>
                        <Box
                            sx={{
                                height: "30px",
                                width: "120px",
                                background: "white",
                                color: "gray",
                                paddingTop: "5px",
                                borderRadius: "3px",
                                bottom: "15px",
                                right: "15px",
                                fontSize: "0.9rem",
                                fontWeight: "600",
                            }}
                        >
                            <FontAwesomeIcon className={editIcon} icon={faPenToSquare} />
                            <span>Edit Patient</span>
                        </Box>
                    </Box>
                </Box>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { xl: drawerWidth }, flexShrink: { xl: 0 } }}
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
                        display: { xs: "block", sm: "block", lg: "block", xl: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "none", lg: "none", xl: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                <Box sx={{ height: "100px", marginTop: "80px" }}>
                    {/* <PatientList patient={patient} /> */}
                    <Outlet />
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