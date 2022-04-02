import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import user from '../../img/user2.jpg';

const PatientList = ({ patient }) => {

    return (
        <div>
            <Grid container spacing={2}>
                <Grid item lg={4} xl={3}>
                    <Box sx={{ height: '370px', width: '300px', background: '#FFFDFD', padding: '40px 20px', margin: '0 auto' }}>
                        <Box sx={{ borderRadius: '50%', overflow: 'hidden', height: '100px', width: '100px', margin: '0 auto' }}>

                            <img src={user} height='100px' width='100px' alt='' />


                        </Box>

                        <Typography variant='h4' sx={{ textAlign: 'center' }}>{patient[0]?.name}</Typography>
                        <Typography variant='p' sx={{ textAlign: 'center' }}>Diane.cooper@example.com</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Box>

                                <Typography sx={{ color: 'black', fontSize: '30px', fontWeight: '900', textAlign: 'center' }}>{patient[0]?.Past} </Typography>
                                <Typography sx={{ color: 'black' }}> Past</Typography>
                            </Box>

                            <Box sx={{ height: '60px', width: '1px', background: 'black' }}></Box>
                            <Box>
                                <Typography sx={{ color: 'black', fontSize: '30px', fontWeight: '900', textAlign: 'center' }}>{patient[0]?.Upcoming} </Typography>
                                <Typography sx={{ color: 'black' }}>Upcoming</Typography>
                            </Box>

                        </Box>

                        <Typography sx={{ padding: '10px 40px', textAlign: 'center', border: '1px solid rgba(0,0,0,.3)', background: 'white', marginTop: '10px' }}>Send Message</Typography>
                    </Box>
                </Grid>
                <Grid item lg={8} xl={6}>
                    <Box sx={{ background: '#FFFDFD', padding: '20px 20px 40px 20px', height: '370px', margin: '0 auto' }}>
                        <Grid container spacing={2}>
                            <Grid item lg={4}>
                                <Box sx={{ padding: '20px 15px 0px 20px' }}>
                                    <Typography >Gender: </Typography>
                                    <Typography >{patient[0]?.Gender}</Typography>
                                    <Box sx={{ height: '1px', marginTop: '15px', width: '80%', background: 'rgba(0,0,0,.2)' }}></Box>
                                </Box>



                            </Grid>
                            <Grid item lg={4}>
                                <Box sx={{ padding: '20px 15px' }}>
                                    <Typography >Birthday: </Typography>
                                    <Typography > {patient[0]?.Birthday}</Typography>
                                    <Box sx={{ height: '1px', marginTop: '15px', width: '80%', background: 'rgba(0,0,0,.2)' }}></Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4}>
                                <Box sx={{ padding: '20px 15px' }}>
                                    <Typography >Phone Number:</Typography>
                                    <Typography >{patient[0]?.Birthday}</Typography>
                                    <Box sx={{ height: '1px', marginTop: '15px', width: '80%', background: 'rgba(0,0,0,.2)' }}></Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4}>
                                <Box sx={{ padding: '20px 15px' }}>
                                    <Typography >Street Address</Typography>
                                    <Typography >{patient[0]?.Birthday}</Typography>
                                    <Box sx={{ height: '1px', marginTop: '15px', width: '80%', background: 'rgba(0,0,0,.2)' }}></Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4}>
                                <Box sx={{ padding: '20px 15px' }}>
                                    <Typography >City: </Typography>
                                    <Typography > {patient[0]?.name}</Typography>
                                    <Box sx={{ height: '1px', marginTop: '15px', width: '80%', background: 'rgba(0,0,0,.2)' }}></Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4}>
                                <Box sx={{ padding: '20px 15px' }}>
                                    <Typography >Zip Code: </Typography>
                                    <Typography > {patient[0]?.name}</Typography>
                                    <Box sx={{ height: '1px', marginTop: '15px', width: '80%', background: 'rgba(0,0,0,.2)' }}></Box>
                                </Box>
                            </Grid>
                            <Grid item lg={4}>
                                <Box sx={{ padding: '20px 15px' }}>
                                    <Typography >Member Status:</Typography>
                                    <Typography > {patient[0]?.name}</Typography>
                                    <Box sx={{ height: '1px', marginTop: '15px', width: '80%', background: 'rgba(0,0,0,.2)' }}></Box>
                                </Box>
                            </Grid>

                            <Grid item lg={4}>
                                <Box sx={{ padding: '20px 15px' }}>
                                    <Typography >Registered Date: </Typography>
                                    <Typography >{patient[0]?.name}</Typography>
                                    <Box sx={{ height: '1px', marginTop: '15px', width: '80%', background: 'rgba(0,0,0,.2)' }}></Box>
                                </Box>
                            </Grid>



                        </Grid>
                    </Box>
                </Grid>
                <Grid item lg={3} xl={3}>
                    <Box sx={{ background: '#FFFDFD', height: '370px', width: '300px', margin: '0 auto' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '20px ' }}>
                            <Typography >Notes </Typography>
                            <Typography sx={{ color: '#0D53FC', fontWeight: '900' }} >See All</Typography>
                        </Box>
                        <Box sx={{ background: '#F2F5F9', height: '200px', width: '270px', textAlign: 'center', margin: '0 auto', position: 'relative', padding: '20px' }}>
                            <Typography sx={{ textAlign: 'left' }}>-This patient is lorem ipsum dolor sit amet</Typography>
                            <Typography sx={{ textAlign: 'left' }}>-lorem ipsum dolor sit amet</Typography>
                            <Typography sx={{ textAlign: 'left' }}>- Has alergic history with Cataflam</Typography>
                            <Typography sx={{ height: '40px', width: '120px', background: '#0D53FC', color: 'white', paddingTop: '8px', borderRadius: '5px', position: 'absolute', bottom: '15px', right: '15px' }}>Save Note</Typography>
                        </Box>
                    </Box>


                </Grid>
                <Grid item lg={9} xl={9}>
                    <Box sx={{ background: '#FFFDFD', height: '370px', width: '900px', margin: '0 auto' }}>
                        <Box sx={{ display: 'flex', height: '50px', width: '100%' }}>
                            <Typography sx={{ height: '50px', width: '200px' }}>Upcoming Appointment</Typography>
                            <Typography sx={{ height: '50px', width: '200px' }}>Post</Typography>
                            <Typography sx={{ height: '50px', width: '200px' }}>Medical  </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={3} xl={3}>
                    <Box sx={{ background: '#FFFDFD', height: '370px', width: '300px', margin: '0 auto' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '20px ' }}>
                            <Typography >Files/Documents </Typography>
                            <Typography sx={{ color: '#0D53FC', fontWeight: '900' }} >Add Files</Typography>
                        </Box>
                    </Box>
                </Grid>




            </Grid>
        </div>
    );
};

export default PatientList;