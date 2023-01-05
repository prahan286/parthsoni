import React from 'react';
// import { Component} from 'react';
import { useState } from 'react';
import { TextField ,Grid,Card, CardContent, Typography, Button} from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import {send} from 'emailjs-com';



export default function Contact() {
    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      name:'',
    //      subject:'',
    //      email:'',
    //      msg:'',
    //   }
    // }

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        reply_to: '',
        message: '',
    });

    const handleChange = (e) =>{
           setToSend({ ...toSend,[e.target.name]:e.target.value}) 
    };


    // handleNameChange = (event) =>{
    //     this.setState({
    //         name: event.target.value
    //     })
    // }

    // handleSubjectChnage = (event) =>{
    //     this.setState({
    //         subject: event.target.value
    //     })
    // }

    // handleEmailChnage = (event) =>{
    //     this.setState({
    //         email: event.target.value
    //     })
    // }

    // handleMsgChange = (event) =>{
    //     this.setState({
    //         msg: event.target.value
    //     })
    // }

    const handleSubmit = (event) =>{
        // alert (`${this.state.name} ${this.state.email}  ${this.state.subject} ${this.state.msg}` )
        event.preventDefault();
        send(
            'service_mc766ss',
            'template_ek1vmcn',
            toSend,
            '5cr8fQVTvyubWVWF-'
        ).then((response) =>{
            console.log('Success',response.status,response.text);
        })
    }
      return (
    <div>
      <Grid container my={20}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
            <form onSubmit={handleSubmit}>
            <Card sx={{backgroundColor:'#05386b',border:'solid'}}>
            <Typography color="#ffffff" variant='h5' fontFamily="Roboto" pl={2} pt={2}>Let's get in touch. Leave me message <MessageIcon/></Typography>
                <CardContent>
                    <TextField label='Name' type="text" name = 'from_name' value={toSend.from_name} onChange={handleChange} variant='outlined' required/>
                </CardContent>
                <CardContent>
                    <TextField label='Subject' name='to_name' type="text" value={toSend.to_name} onChange={handleChange}  variant='outlined' required/>
                </CardContent>
                <CardContent>
                    <TextField label='Email' name='reply_to' value={toSend.reply_to} onChange={handleChange} type='email' variant='outlined' required/>
                </CardContent>
                <CardContent>
                    <TextField label='Message' type="text" name= 'message' value={toSend.message} onChange={handleChange} variant='outlined' helperText='Please leave brief message' required/>
                </CardContent>
                <CardContent>
                <Button type='submit' variant='contained' size='large'  > Submit</Button>
                </CardContent>
                
            </Card>
            </form>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  )
}

//export default Contact