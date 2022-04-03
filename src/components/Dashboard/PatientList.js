import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Typography, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import user from "../../img/user2.jpg";
import ArticleIcon from "@mui/icons-material/Article";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Appointment from './Appointment';
const PatientList = () => {

    const [patient, setPatient] = useState([]);
    const [files, setFiles] = useState([]);
    useEffect(() => {
        fetch("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
            .then((res) => res.json())
            .then((data) => setPatient(data));
    }, []);

    useEffect(() => {
        fetch("https://619f39821ac52a0017ba467e.mockapi.io/Files")
            .then((res) => res.json())
            .then((data) => setFiles(data));
    }, []);
    console.log(files);

    return (
        <div>
            {/* <DashboardHome/> */}
            <Grid container spacing={2}>
                <Grid item lg={3} xl={3}>
                    <Box
                        sx={{
                            height: "370px",
                            width: "300px",
                            background: "#FFFDFD",
                            borderRadius: "6px",
                            padding: "40px 20px",
                            margin: "0 auto",
                        }}
                    >
                        <Box
                            sx={{
                                borderRadius: "50%",
                                overflow: "hidden",
                                height: "100px",
                                width: "100px",
                                margin: "0 auto",
                            }}
                        >
                            <img src={user} height="100px" width="100px" alt="" />
                        </Box>

                        <Typography
                            variant="h5"
                            mt={2}
                            sx={{ textAlign: "center", color: "#2D3B4C", fontWeight: "600" }}
                        >
                            {patient[0]?.name}
                        </Typography>
                        <Typography sx={{ textAlign: "center", color: "gray" }}>
                            diane.cooper@example.com
                        </Typography>
                        <Box
                            mt={2}
                            sx={{ display: "flex", justifyContent: "space-around" }}
                        >
                            <Box>
                                <Typography
                                    sx={{
                                        color: "black",
                                        fontSize: "20px",
                                        fontWeight: "900",
                                        textAlign: "center",
                                    }}
                                >
                                    {patient[0]?.Past}{" "}
                                </Typography>
                                <Typography sx={{ color: "gray" }}> Past</Typography>
                            </Box>

                            <Box
                                sx={{
                                    height: "50px",
                                    width: "1px",
                                    background: "gray",
                                    marginLeft: "2rem",
                                }}
                            ></Box>
                            <Box>
                                <Typography
                                    sx={{
                                        color: "black",
                                        fontSize: "20px",
                                        fontWeight: "900",
                                        textAlign: "center",
                                    }}
                                >
                                    {patient[0]?.Upcoming}
                                </Typography>
                                <Typography sx={{ color: "gray" }}>Upcoming</Typography>
                            </Box>
                        </Box>

                        <Typography
                            sx={{
                                padding: "10px 40px",
                                textAlign: "center",
                                border: "1px solid rgba(0,0,0,.3)",
                                background: "white",
                                marginTop: "10px",
                                color: "#2D3B4C",
                                fontWeight: "600",
                                borderRadius: "3px",
                            }}
                        >
                            Send Message
                        </Typography>
                    </Box>
                </Grid>
                {/* patient detail section */}
                <Grid item lg={9} xl={6}>
                    <Box
                        sx={{
                            background: "#FFFDFD",
                            borderRadius: "6px",
                            padding: "20px 20px 40px 20px",
                            height: "370px",
                            margin: "0 auto",
                        }}
                    >
                        <Grid container spacing={2}>
                            <Grid item lg={4}>
                                <Box sx={{ padding: "20px 15px 0px 20px" }}>
                                    <Typography sx={{ color: "gray", fontWeight: "600" }}>
                                        Gender:{" "}
                                    </Typography>
                                    <Typography>{patient[0]?.Gender}</Typography>
                                    <Box
                                        sx={{
                                            height: "1px",
                                            marginTop: "15px",
                                            width: "80%",
                                            background: "rgba(0,0,0,.2)",
                                        }}
                                    ></Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4}>
                                <Box sx={{ padding: "20px 15px" }}>
                                    <Typography sx={{ color: "gray", fontWeight: "600" }}>
                                        Birthday:{" "}
                                    </Typography>
                                    <Typography> {patient[0]?.Birthday}</Typography>
                                    <Box
                                        sx={{
                                            height: "1px",
                                            marginTop: "15px",
                                            width: "80%",
                                            background: "rgba(0,0,0,.2)",
                                        }}
                                    ></Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4}>
                                <Box sx={{ padding: "20px 15px" }}>
                                    <Typography sx={{ color: "gray", fontWeight: "600" }}>
                                        Phone Number:
                                    </Typography>
                                    <Typography>{patient[0]?.Birthday}</Typography>
                                    <Box
                                        sx={{
                                            height: "1px",
                                            marginTop: "15px",
                                            width: "80%",
                                            background: "rgba(0,0,0,.2)",
                                        }}
                                    ></Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4}>
                                <Box sx={{ padding: "20px 15px" }}>
                                    <Typography sx={{ color: "gray", fontWeight: "600" }}>
                                        Street Address
                                    </Typography>
                                    <Typography>{patient[0]?.Birthday}</Typography>
                                    <Box
                                        sx={{
                                            height: "1px",
                                            marginTop: "15px",
                                            width: "80%",
                                            background: "rgba(0,0,0,.2)",
                                        }}
                                    ></Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4}>
                                <Box sx={{ padding: "20px 15px" }}>
                                    <Typography sx={{ color: "gray", fontWeight: "600" }}>
                                        City:
                                    </Typography>
                                    <Typography> {patient[0]?.name}</Typography>
                                    <Box
                                        sx={{
                                            height: "1px",
                                            marginTop: "15px",
                                            width: "80%",
                                            background: "rgba(0,0,0,.2)",
                                        }}
                                    ></Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4}>
                                <Box sx={{ padding: "20px 15px" }}>
                                    <Typography sx={{ color: "gray", fontWeight: "600" }}>
                                        Zip Code:
                                    </Typography>
                                    <Typography> {patient[0]?.name}</Typography>
                                    <Box
                                        sx={{
                                            height: "1px",
                                            marginTop: "15px",
                                            width: "80%",
                                            background: "rgba(0,0,0,.2)",
                                        }}
                                    ></Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4}>
                                <Box sx={{ padding: "20px 15px" }}>
                                    <Typography sx={{ color: "gray", fontWeight: "600" }}>
                                        Member Status:
                                    </Typography>
                                    <Typography> {patient[0]?.name}</Typography>
                                    <Box
                                        sx={{
                                            height: "1px",
                                            marginTop: "15px",
                                            width: "80%",
                                            background: "rgba(0,0,0,.2)",
                                        }}
                                    ></Box>
                                </Box>
                            </Grid>

                            <Grid item lg={4}>
                                <Box sx={{ padding: "20px 15px" }}>
                                    <Typography sx={{ color: "gray", fontWeight: "600" }}>
                                        Registered Date:
                                    </Typography>
                                    <Typography>{patient[0]?.name}</Typography>
                                    <Box
                                        sx={{
                                            height: "1px",
                                            marginTop: "15px",
                                            width: "80%",
                                            background: "rgba(0,0,0,.2)",
                                        }}
                                    ></Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
                {/* Notes section start */}
                <Grid item lg={3} xl={3}>
                    <Box
                        sx={{
                            background: "#FFFDFD",
                            height: "370px",
                            width: "300px",
                            margin: "0 auto",
                            borderRadius: "6px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "20px ",
                                margin: "0 auto",
                            }}
                        >
                            <Typography sx={{ color: "#2D3B4C", fontWeight: "900" }}>
                                Notes
                            </Typography>
                            <Typography sx={{ color: "#0D53FC", fontWeight: "900" }}>
                                See All
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                background: "#F2F5F9",
                                height: "200px",
                                width: "270px",
                                textAlign: "center",
                                margin: "0 auto",
                                position: "relative",
                                padding: "20px",
                            }}
                        >
                            <Typography sx={{ textAlign: "left", fontSize: "0.9rem" }}>
                                -This patient is lorem ipsum dolor sit amet
                            </Typography>
                            <Typography sx={{ textAlign: "left", fontSize: "0.9rem" }}>
                                -lorem ipsum dolor sit amet
                            </Typography>
                            <Typography sx={{ textAlign: "left", fontSize: "0.9rem" }}>
                                - Has alergic history with Cataflam
                            </Typography>
                            <Typography
                                sx={{
                                    height: "40px",
                                    width: "120px",
                                    background: "#0D53FC",
                                    color: "white",
                                    paddingTop: "8px",
                                    borderRadius: "5px",
                                    position: "absolute",
                                    bottom: "15px",
                                    right: "15px",
                                }}
                            >
                                Save Note
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                textAlign: "left",
                                fontSize: "0.9rem",
                                padding: "20px 20px 0px",
                            }}
                        >
                            Lorem ipsum dolor sit amet
                        </Typography>
                        <Box
                            sx={{
                                padding: "10px 20px",
                                borderRadius: "13px !important",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                margin: "0 auto",
                                color: "gray",
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <PersonOutlineOutlinedIcon sx={{ color: "#0D53FC" }} />
                                <Typography
                                    sx={{
                                        color: "gray",
                                        marginLeft: "0.2rem",
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    Drg. Mega Nanade
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{ textAlign: "end", color: "gray", fontSize: "0.9rem" }}
                                >
                                    20 Nov 19
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                {/* notes section end */}
                {/* appointment section start */}
                <Grid item lg={9} xl={9}>
                    <Appointment></Appointment>
                </Grid>
                {/* appointment section end */}
                {/* file documents start */}
                <Grid item lg={3} xl={3}>
                    <Box
                        sx={{
                            background: "#FFFDFD",
                            height: "370px",
                            width: "300px",
                            margin: "0 auto",
                            borderRadius: "6px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "20px ",
                            }}
                        >
                            <Typography sx={{ color: "#2D3B4C", fontWeight: "600" }}>
                                Files/Documents
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: "#0D53FC",
                                }}
                            >
                                <UploadFileIcon sx={{ marginRight: "0.2rem" }} />
                                <Typography sx={{ fontWeight: "900" }}>Add Files</Typography>
                            </Box>
                        </Box>

                        {files.slice(1, 5).map((file) => (
                            <Box sx={{ padding: "10px 20px 0px" }}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        boxShadow: "1px 5px 10px #EEECEC !important",
                                        borderRadius: "13px !important",
                                        display: "flex",

                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        margin: "0 auto",
                                        color: "gray",
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center" }}>
                                        <ArticleIcon />
                                        <Typography sx={{ marginLeft: "0.3rem" }}>
                                            {file.name}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ textAlign: "end" }}>0.123kb</Typography>{" "}
                                    </Box>
                                </Paper>
                            </Box>
                        ))}
                    </Box>
                </Grid>
                {/* file documents end */}
            </Grid>
        </div>
    );
};

export default PatientList;