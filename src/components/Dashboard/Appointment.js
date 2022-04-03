import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
// import Timeline from '@mui/lab/Timeline';
// import TimelineItem from '@mui/lab/TimelineItem';
// import TimelineSeparator from '@mui/lab/TimelineSeparator';
// import TimelineConnector from '@mui/lab/TimelineConnector';
// import TimelineContent from '@mui/lab/TimelineContent';
// import TimelineDot from '@mui/lab/TimelineDot';
const Appointment = () => {
    const useStyle = makeStyles({
        changeButton: {
            height: "40px",
            width: "220px",
            background: "white",
            padding: "6px 10px",
            color: "#0D53FC",
            fontWeight: "700",
        },
    });
    useEffect(() => {
        fetch("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails")
            .then((res) => res.json())
            .then((data) => setDoctor(data));
    }, []);
    useEffect(() => {
        fetch("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details")
            .then((res) => res.json())
            .then((data) => setAppointment(data));
    }, []);

    const [changeAppointment, setChangeAppointment] = useState("upcoming");
    const [doctor, setDoctor] = useState([]);
    const [appointment, setAppointment] = useState([]);
    const { changeButton } = useStyle();
    return (
        <>
            <Box
                sx={{
                    background: "#FFFDFD",
                    height: "370px",
                    width: "920px",
                    borderRadius: "6px",
                    margin: "0 auto",
                    padding: "20px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        height: "60px",
                        width: "80%",
                        background: "#F2F5F9 ",
                        padding: "15px",
                        justifyContent: "space-between",
                        marginLeft: "9px",
                    }}
                >
                    <Typography
                        sx={{ textAlign: "center" }}
                        className={changeAppointment == "upcoming" ? changeButton : ""}
                        onClick={() => setChangeAppointment("upcoming")}
                    >
                        Upcoming Appointment
                    </Typography>
                    <Typography
                        className={changeAppointment == "post" ? changeButton : ""}
                        sx={{ textAlign: "center" }}
                        onClick={() => setChangeAppointment("post")}
                    >
                        Post Appointment
                    </Typography>
                    <Typography
                        className={changeAppointment == "records" ? changeButton : ""}
                        sx={{ textAlign: "center" }}
                        onClick={() => setChangeAppointment("records")}
                    >
                        Medical Records
                    </Typography>
                </Box>
                <Box
                    sx={{
                        background: "#F2F5F9 ",
                        width: "90%",
                        margin: "10px",
                        padding: "30px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Typography sx={{ height: "30px", width: "200px" }}>
                            Root Canal Treatment
                        </Typography>
                        <Box
                            sx={{
                                width: "280px",
                                background: "white",
                                padding: "10px 30px",
                                color: "gray",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <ExpandLessIcon sx={{ marginLeft: "0.6rem" }} />
                            <Typography>Show Previous Treatment</Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            height: "1px",
                            width: "95%",
                            background: "rgba(0,0,0,.2)",
                            marginTop: "30px",
                            marginBottom: "30px",
                        }}
                    ></Box>
                    {/* Appointment schedule */}

                    {changeAppointment == "upcoming" && (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                background: "white",
                                padding: "15px",
                                justifyContent: "space-evenly",
                            }}
                        >
                            <Box>
                                <Typography variant="h4">26 Nov'19</Typography>
                                <Typography>09.00-10.00</Typography>
                            </Box>
                            <Box
                                sx={{
                                    height: "30px",
                                    width: "2px",
                                    background: "rgba(0,0,0,.2)",
                                }}
                            ></Box>
                            <Box>
                                <Typography>Treatment:</Typography>
                                <Typography>Open Access</Typography>
                            </Box>
                            <Box
                                sx={{
                                    height: "30px",
                                    width: "2px",
                                    background: "rgba(0,0,0,.2)",
                                }}
                            ></Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Box sx={{ marginRight: "19px" }}>
                                    <Typography>Dentist:</Typography>
                                    <Typography>{doctor[0]?.name}</Typography>
                                </Box>
                                <Box sx={{ marginRight: "19px" }}>
                                    <Typography>Nurse:</Typography>
                                    <Typography>Jessicamila</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        marginRight: "19px",
                                        color: "#2262FC",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <StickyNote2Icon sx={{ marginLeft: "0.5rem" }} />
                                    <Typography>Note</Typography>
                                </Box>
                            </Box>
                        </Box>
                    )}
                    {changeAppointment == "post" && (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                background: "white",
                                padding: "15px",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box>
                                <Typography variant="h4">26 Nov'19</Typography>
                                <Typography>09.00-10.00</Typography>
                            </Box>
                            <Box
                                sx={{
                                    height: "30px",
                                    width: "2px",
                                    background: "rgba(0,0,0,.2)",
                                }}
                            ></Box>
                            <Box>
                                <Typography>Treatment:</Typography>
                                <Typography>Open Access</Typography>
                            </Box>
                            <Box
                                sx={{
                                    height: "30px",
                                    width: "2px",
                                    background: "rgba(0,0,0,.2)",
                                }}
                            ></Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Box sx={{ marginRight: "19px" }}>
                                    <Typography>Dentist:</Typography>
                                    <Typography>{doctor[0]?.name}</Typography>
                                </Box>
                                <Box sx={{ marginRight: "19px" }}>
                                    <Typography>Nurse:</Typography>
                                    <Typography>Jessicamila</Typography>
                                </Box>

                                <Box
                                    sx={{
                                        marginRight: "19px",
                                        color: "#2262FC",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <StickyNote2Icon sx={{ marginLeft: "0.5rem" }} />
                                    <Typography>Note</Typography>
                                </Box>
                            </Box>
                        </Box>
                    )}
                    {changeAppointment == "records" && (
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                background: "white",
                                padding: "15px",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box>
                                <Typography variant="h4">26 Nov'19</Typography>
                                <Typography>09.00-10.00</Typography>
                            </Box>
                            <Box
                                sx={{
                                    height: "30px",
                                    width: "2px",
                                    background: "rgba(0,0,0,.2)",
                                }}
                            ></Box>
                            <Box>
                                <Typography>Treatment:</Typography>
                                <Typography>Open Access</Typography>
                            </Box>
                            <Box
                                sx={{
                                    height: "30px",
                                    width: "2px",
                                    background: "rgba(0,0,0,.2)",
                                }}
                            ></Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Box sx={{ marginRight: "19px" }}>
                                    <Typography>Dentist:</Typography>
                                    <Typography>{doctor[0]?.name}</Typography>
                                </Box>
                                <Box sx={{ marginRight: "19px" }}>
                                    <Typography>Nurse:</Typography>
                                    <Typography>Jessicamila</Typography>
                                </Box>

                                <Box
                                    sx={{
                                        marginRight: "19px",
                                        color: "#2262FC",
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <StickyNote2Icon sx={{ marginLeft: "0.5rem" }} />
                                    <Typography>Note</Typography>
                                </Box>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
        </>
    );
};


export default Appointment;