import React from 'react';
import {Container,Typography,Button,Paper,Box,TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


const useStyle = makeStyles(theme=>({
    root:{
        width:"80vw",
        height:"80vh",
        background:"#fff",
        marginTop:"50px",
        padding:"30px"

    },
    btn:{
        background:"rgb(77, 89, 253)",
        color:"black",
        marginLeft:"40%"
    }
}))

const Contact = () => {
    const classes = useStyle();
    return (
        <Container data-aos="zoom-in" className={classes.root}>
            <Paper component={Box} width="40%" mx="auto" p={4}>
                <Typography variant="h4">Contact with us</Typography>
                <Box component="form" mt={2}>
               <TextField 
               fullWidth 
               placeholder="Enter your first name"
               margin="normal"
               variant="outlined"
               color="primary"
               label=" firstName"
               
               ></TextField>
                <TextField 
               fullWidth 
               placeholder="Enter your last name"
               margin="normal"
               variant="outlined"
               color="primary"
               label=" Last Name"
               
               ></TextField>
                <TextField 
               fullWidth 
               placeholder="Enter your Email name"
               margin="normal"
               variant="outlined"
               color="primary"
               label=" Email"
               
               ></TextField>
                <TextField 
               fullWidth 
               placeholder="Enter your Phone number"
               margin="normal"
               variant="outlined"
               color="primary"
               label="Phone No"
               
               ></TextField>
                <TextField 
               fullWidth 
               placeholder="Message"
               margin="normal"
               variant="outlined"
               color="primary"
               label=" Message"
               multiline
               rows={4}
               
               ></TextField>
                </Box>
                <Button  className={classes.btn} >Submit</Button>
            </Paper>

        </Container>
    )
}

export default Contact;
