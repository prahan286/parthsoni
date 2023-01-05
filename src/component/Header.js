import React from "react";
import { AppBar, Toolbar, Stack, Button, Avatar, Grid, Typography,IconButton} from "@mui/material";
import EngineeringIcon from '@mui/icons-material/Engineering';
import {Link} from 'react-router-dom';
export default function Header() {
  return (
    <AppBar style={{backgroundColor:'#05386b'}}>
      <Grid container>
        <Grid item xs={2}>
        </Grid>
        <Grid item xs={7} py={2}>
          <Toolbar>
            <Avatar src="ps.jpeg" alt="Parth Soni" spacing={1}></Avatar>
            {/* <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                <EngineeringIcon/>
            </IconButton> */}
            <Stack direction="row" display="inline" spacing={2} pl={2}>
              <Link to="/" underline='none'><Button variant='contained' size= 'large'> Home </Button></Link>
              <Link to="/about" underline='none'><Button variant='text' size= 'large'  sx={{'&:hover':{backgroundColor:'#ffffff'}}}> About Me</Button></Link>
              <Link to="/contact" underline='none'><Button variant='text' size= 'large' sx={{'&:hover':{backgroundColor:'#ffffff'}}}> Contact</Button></Link>
            </Stack>
          </Toolbar>
        </Grid>
        <Grid item xs={3} py={3}>
          <Stack direction="raw" display="inline" spacing={1}>
            <IconButton size='xlarge' color='inherit' aria-label='logo' >
              <Avatar sx={{bgcolor:'#000000'}}>
                <EngineeringIcon/>
                </Avatar>
            </IconButton>
          <Typography variant="title" size="large">
            Sr. System Analyst
          </Typography>
          </Stack>
        </Grid>
      </Grid>
    </AppBar>
  );
}
