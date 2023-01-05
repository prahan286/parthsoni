import React from 'react'
import {Typography,Grid,Box,Paper,Stack} from "@mui/material";

import {Masonry} from '@mui/lab';

const heights = [150,50,90,70,110,150,130,80,50,90,100,150,30,50,80];
const tech = ['Application Security','Hardware Security','Data Loss Prevention','Cloud Security and Governance','SOC Management',
'Incident Management','Compliance and Audit','Network Security','Identity and Access Management','Nessus','Firewall ','Nessus',
'Risk Assessment','Cybersecurity ','Strong communicative ']

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={8} py={15}>
        <Typography color="#FFEBB7" fontFamily={'Roboto'} fontSize={30}>
          My name is,
        </Typography>
        <Typography  color="#FFEBB7" fontSize={80} fontFamily={'Roboto'} fontWeight={'bold'}>
                PARTH SONI <img src="./waving-hand.png" alt="hand" />
        </Typography>

        <Typography  color="#FFEBB7" fontSize={80} fontFamily={'Roboto'} fontWeight={'bold'}>
                I'm a Sr. System Analyst.
        </Typography>

        <Typography color="#FFEBB7" fontFamily="Roboto" variant='subtitle1'>
      Cyber security aspirant, specialized in Cloud administration with 5 years of experience in small to large size organization
      . A communicative and outgoing professional who specializes in information security projects, implementation of frameworks, leading security awareness training, and managing teams
      </Typography>

      <Stack direction={"row"} spacing={2}>
        <Typography
          pt={2}
          variant="h4"
          fontFamily={"Roboto"}
          color="#FFEBB7"
          sx={{ textDecoration: "underline" }}
        >
          Skills 
        </Typography>
        <Typography pt={3}>🦾</Typography>
        </Stack>
      
      <Box sx={{width:900,height:400}} mt={2}>
           <Masonry columns={4} spacing={1}>
            {
                heights.map((height,index)=>(
                  <Paper key={index} sx={{bgcolor:'#05386b',color:'#FFEBB7',display:'flex',justifyContent:'center',alignItems:'center',height,border:'1px solid'}}>
                  {tech[index]}
                  </Paper>
                ))
            }
          </Masonry>
      </Box> 
      </Grid>

     
     
    </Grid>
  
      
  
  )
}
