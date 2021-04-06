import React from 'react';
import {Container,Button,Grid,Typography,Box,Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Image from "../../assets/images/right.jpg"

const usestyle = makeStyles(theme=>({
    root:{
        width:"100vw",
        height:"100vh",
        background:"#fff",
        marginTop:"30px"
    },
    imgPic:{
        width:"500px",
        height:"700px",
        backgroundSize:"cover"
    },
    aboutMe:{
        width:"500px",
        height:"400px",
        textAlign:"center",
        marginTop:"180px"
    },
    fonts:{
        fontSize:"20px",
        lineHeight:"30px",
        fontWeight:"400",
    textAlign:"justify"
    }

}))

const About = () => {
    const classes = usestyle()
    return (
     <Container className={classes.root}>
         <Grid container spacing={6}>
         <Grid item Lg={4}>
             
             <Box data-aos="fade-up-right" p={3}>
            <img src={Image} alt="about" className={classes.imgPic}/>
             </Box>
            

         </Grid>

        
         
         <Grid item Lg={4}>

         <Paper data-aos="flip-up"  component={Box}>
             
             <Box className={classes.aboutMe} p={3}>
           
                <Typography variant="h4">About ME</Typography>
                <Typography variant="subtitle1" className={classes.fonts}><span className="primaryColor">Hello everyone!</span> I am faizan Ahmad.i am from najibabad Uttar Pradesh.
                I have done B.tech in computer Science from uttaranchal university dehradun.And after that I have done 4 months Training in Mern Stack development from Croma campus Noida.I have done Project like weather App,Chat App,Shopping cart, Receipe Search like Zomata
                BLog website etc.I am loyal and smart working person having positive attitudes towards my carrer.This is all about me.thanks! plz hire me for Mern Stack developer.
                </Typography>
            
             </Box>
             </Paper>
            

         </Grid>
         </Grid>

     </Container>
    )
}

export default About;
