import { Avatar, Card, CardContent, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function About() {
  return (
    <Grid container mt={15}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Stack direction={"row"} spacing={2}>
          <Typography
            variant="h4"
            fontFamily={"Roboto"}
            color="text.secondary"
            sx={{ textDecoration: "underline" }}
          >
            About Me
          </Typography>
          <Avatar sx={{bgcolor:'primary.light'}}> PS </Avatar>
        </Stack>
        <Typography variant="body1" color="text.secondary" pt={2}>
          A Dynamic cybersecurity astute professional with 4 years of experience
          in Information technologies, services, experience in Network Security
          and Architecture seeking opportunities in the cybersecurity domain.
          Demonstrated excellent client support, teamwork, incident & change
          management. A communicative and outgoing professional who specializes
          in information security projects, implementation of frameworks,
          leading security awareness training, and managing teams. Employs
          technological solutions and personnel training to harden both people
          and machines against malicious actors. Good with tools such as
          Wireshark, Burp Suite, Rapid 7, Nessus, Nmap, and Kali Linux. Strong
          conceptual understanding of various industry standards such as
          NIST-800-53, ISO 27001, ISO 31000, and PCI DSS.
        </Typography>
        <Stack direction={"row"} spacing={2}>
        <Typography
          pt={2}
          variant="h4"
          fontFamily={"Roboto"}
          color="text.secondary"
          sx={{ textDecoration: "underline" }}
        >
          Career 
        </Typography>
        <Typography pt={3}>💼</Typography>
        </Stack>
        <Card variant="outlined" style={{ backgroundColor: "#05386b",borderRadius:'16px'}}>
          <CardContent >
            <Grid container>
              <Grid item xs={3}>
                <Avatar src="mobia.jpeg" alt="Parth Soni" spacing={1}></Avatar>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" fontFamily={"Roboto"} color="white">
                  {" "}
                  Mobia Company<br />
                  Field systems Analyst 
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" fontFamily={"Roboto"} color="white">
                  {" "}
                  December 2022 – Present
                </Typography>
              </Grid>
            </Grid>

            
          </CardContent>
        </Card>    
        <br/>

        <Card pt={2} variant="outlined" style={{ backgroundColor: "#05386b",borderRadius:'16px'}}>
          <CardContent>
            <Grid container>
              <Grid item xs={3}>
                <Avatar src="mufg.jpeg" alt="Parth Soni" spacing={1}></Avatar>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" fontFamily={"Roboto"} color="white">
                  {" "}
                  MUFG Investor Services <br />
                  IT Associate
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" fontFamily={"Roboto"} color="white">
                  {" "}
                  November 2021- November 2022
                </Typography>
              </Grid>
            </Grid>


          </CardContent>
        </Card>
        <br/>
        <Card variant="outlined" style={{ backgroundColor: "#05386b",borderRadius:'16px'}}>
          <CardContent >
            <Grid container>
              <Grid item xs={3}>
                <Avatar src="rbc.jpeg" alt="Parth Soni" spacing={1}></Avatar>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" fontFamily={"Roboto"} color="white">
                  {" "}
                  Royal Bank Of Canada <br />
                  Service Desk Analyst 
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" fontFamily={"Roboto"} color="white">
                  {" "}
                  September 2020 – November 2021
                </Typography>
              </Grid>
            </Grid>

            
          </CardContent>
        </Card>

        
        <Stack direction={"row"} spacing={2}>
        <Typography
          pt={2}
          variant="h4"
          fontFamily={"Roboto"}
          color="text.secondary"
          sx={{ textDecoration: "underline" }}
        >
          Education 
        </Typography>
        <Typography pt={3}>📚</Typography>
        </Stack>

        <Card variant="outlined" style={{ backgroundColor: "#05386b",borderRadius:'16px'}}>
          <CardContent >
            <Grid container>
              <Grid item xs={3}>
                <Avatar src="mohawk.jpeg" alt="Parth Soni" spacing={1}></Avatar>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" fontFamily={"Roboto"} color="white">
                  {" "}
                  Mohawk College, Hamilton, ON <br />
                  Computer System Technology- Network Systems 
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" fontFamily={"Roboto"} color="white">
                  {" "}
                  January 2017 – December 2018
                </Typography>
              </Grid>
            </Grid>

            
          </CardContent>
        </Card>

        <Stack direction={"row"} spacing={2}>
        <Typography
          pt={2}
          variant="h4"
          fontFamily={"Roboto"}
          color="text.secondary"
          sx={{ textDecoration: "underline" }}
        >
          Ceritificates 
        </Typography>
        <Typography pt={3}>😍</Typography>
        </Stack>

        <Card variant="outlined" style={{ backgroundColor: "#05386b",borderRadius:'16px'}}>
          <CardContent >
            <Grid container>
              <Grid item xs={3}>
                <Avatar src="micro.jpeg" alt="Parth Soni" spacing={1}></Avatar>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" fontFamily={"Roboto"} color="white">
                  {" "}
                  Microsoft office <br />
                  Azure Fundamentals – AZ900 <br/>
                  SC - 300 <br/>
                  SC - 200 <br/>
                  Intune
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" fontFamily={"Roboto"} color="white">
                  {" "}
                  No Expiry
                </Typography>
              </Grid>
            </Grid>

            
          </CardContent>
        </Card>


        <Card variant="outlined" style={{ backgroundColor: "#05386b",borderRadius:'16px'}}>
          <CardContent >
            <Grid container>
              <Grid item xs={3}>
                <Avatar src="fortinet.jpeg" alt="Parth Soni" spacing={1}></Avatar>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" fontFamily={"Roboto"} color="white">
                  {" "}
                  Fortinet <br />
                  NSE 1,2,3 <br/>
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" fontFamily={"Roboto"} color="white">
                  {" "}
                  No Expiry
                </Typography>
              </Grid>
            </Grid>

            
          </CardContent>
        </Card>
        <Card variant="outlined" style={{ backgroundColor: "#05386b",borderRadius:'16px'}}>
          <CardContent >
            <Grid container>
              <Grid item xs={3}>
                <Avatar src="qulis.jpeg" alt="Parth Soni" spacing={1}></Avatar>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" fontFamily={"Roboto"} color="white">
                  {" "}
                  QUALYS <br />
                  Vulnerability Management
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" fontFamily={"Roboto"} color="white">
                  {" "}
                  No Expiry
                </Typography>
              </Grid>
            </Grid>

            
          </CardContent>
        </Card>
        <Card variant="outlined" style={{ backgroundColor: "#05386b",borderRadius:'16px'}}>
          <CardContent >
            <Grid container>
              <Grid item xs={3}>
                <Avatar src="aws.jpeg" alt="Parth Soni" spacing={1}></Avatar>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" fontFamily={"Roboto"} color="white">
                  {" "}
                  AWS <br />
                  ESSENTIAL  
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" fontFamily={"Roboto"} color="white">
                  {" "}
                  No Expiry
                </Typography>
              </Grid>
            </Grid>

            
          </CardContent>
        </Card>

        <Card variant="outlined" style={{ backgroundColor: "#05386b",borderRadius:'16px'}}>
          <CardContent >
            <Grid container>
              <Grid item xs={3}>
                <Avatar src="cyber.jpeg" alt="Parth Soni" spacing={1}></Avatar>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" fontFamily={"Roboto"} color="white">
                  {" "}
                  Cyber Ark<br />
                  Trustee - Privilege Access Management  
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body1" fontFamily={"Roboto"} color="white">
                  {" "}
                  No Expiry
                </Typography>
              </Grid>
            </Grid>

            
          </CardContent>
        </Card>


      </Grid>
      <Grid item xs={2}></Grid>s
    </Grid>
  );
}
