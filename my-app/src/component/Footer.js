import { BottomNavigation, ButtonGroup, Grid, Stack, Typography} from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
export default function Footer() {
  return (
        <Grid container>
        <Grid item xs={3}>
        <Typography variant="h5" fontFamily={"Roboto"} color="#FFEBB7">
            2023 @Parth Soni
         </Typography>
        </Grid>
        <Grid item xs={7}></Grid>
        <Grid item xs={2}>
        <BottomNavigation sx={{position:'absolute',bgcolor:'#227C70',direction:'reverse'}}>
           <Stack>
            <ButtonGroup>
            <button variant="contained" onClick={()=>{window.open('https://www.linkedin.com/in/parthsoni512/','_blank')}} ><LinkedInIcon/></button>
            <button variant="contained" onClick={()=>{window.open('https://www.linkedin.com/in/parthsoni512/','_blank')}}> <FacebookIcon/></button>
            <button variant="contained" onClick={()=>{window.open('https://www.instagram.com/','_blank')}}><InstagramIcon/></button>
            <button variant="contained"><EmailIcon/></button>
            </ButtonGroup>
           
           </Stack>
           
        </BottomNavigation>
        </Grid>
        </Grid>
  )
}
