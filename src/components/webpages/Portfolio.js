import React from 'react';
import Weather from "../../assets/social-icons/weather.jpg";
import Chat from "../../assets/social-icons/chatapp.png";
import Business from "../../assets/social-icons/business.jfif";
import Blog from "../../assets/social-icons/blog1.jfif";
import Portf from "../../assets/social-icons/port.jfif";
import Tictak from "../../assets/social-icons/tictak.jfif";
import Corona from "../../assets/social-icons/corona.jpg";
import Todo from "../../assets/social-icons/todo.jfif";
import Aos from "aos";
import "aos/dist/aos.css";
import {Container,
    
        Grid,
        Button,
        Typography,
        Card,
        CardContent,
        CardActions,
        CardActionArea,
        CardMedia,
       } 
    from "@material-ui/core";
import{makeStyles} from "@material-ui/core/styles";
import "./style.css";

const useStyle=makeStyles((theme)=>({
    root:{
        width:"100%",
        height:"140vh",
        background:"#fff",
        marginTop:"50px"
    },
   btn:{
      background:"blue",
      color:"black",
      margin:"0 auto"
      
   },
   imageFix:{
       width:"270px",
       height:"250px",


   },
   font:{
       fontSize:"16px",
       lineHeight:"25px",
       textAlign:"center"
   },
   cardW:{
       width:"270px",
       height:"490px",
   }


}));

const Portfolio = () => {
    const classes=useStyle();

    return (
        <Container className={classes.root} style={{padding:" 0px 40px"}} >
            <h1 className="primaryColor center">PORTFOLIOS</h1>

        <Grid data-aos="zoom-in" container spacing={4} style={{textAlign:"center"}}>
            <Grid item sm={3}>
                <Card className={classes.cardW}>
                    <CardActionArea>
                        <CardMedia image={Weather} className={classes.imageFix} />
                        <CardContent>
                        <Typography variant="h5">Weather App</Typography>
                        <Typography className={classes.font} variant="subtitle">I built a weather app where you can enter the name of the city and get the temprature of that city using node Api.</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button href="https://temp-app-faiztech.herokuapp.com/" className={classes.btn}>Preview</Button>
                    </CardActions>
                </Card>

            </Grid>
            <Grid item sm={3}>
                <Card className={classes.cardW}>
                    <CardActionArea>
                        <CardMedia image={Chat} className={classes.imageFix} />
                        <CardContent>
                        <Typography variant="h5">Chat App</Typography>
                        <Typography className={classes.font} variant="subtitle">I built a Chat app you enter your name and  you will enter in tha chat room then you have to communicate each other like a group.</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button href="https://faizmsgapp.herokuapp.com/" className={classes.btn}>Preview</Button>
                    </CardActions>
                </Card>

            </Grid>
            <Grid item sm={3}>
                <Card className={classes.cardW}>
                    <CardActionArea>
                        <CardMedia image={Corona} className={classes.imageFix} />
                        <CardContent>
                        <Typography variant="h5">Corona App Website</Typography>
                        <Typography className={classes.font} variant="subtitle">I built a Corona App website where you can find the world wide data and country wise details of the corona.</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button  href="https://faiz86ahmad.github.io/corona/" className={classes.btn}>Preview</Button>
                    </CardActions>
                </Card>

            </Grid>
            <Grid item sm={3}>
                <Card className={classes.cardW}>
                    <CardActionArea>
                        <CardMedia image={Business} className={classes.imageFix} />
                        <CardContent>
                        <Typography variant="h5">Bussiness</Typography>
                        <Typography className={classes.font} variant="subtitle">It is a simple react website like single page website having multiptle pages like services, contact us,about us.</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button href="https://faiz86ahmad.github.io/reactlivewebsite/" className={classes.btn}>Preview</Button>
                    </CardActions>
                </Card>

            </Grid>
            <Grid item sm={3}>
                <Card className={classes.cardW}>
                    <CardActionArea>
                        <CardMedia image={Tictak} className={classes.imageFix} />
                        <CardContent>
                        <Typography variant="h5">TicTakToe</Typography>
                        <Typography className={classes.font} variant="subtitle">i built a game tictaktoe using react.it is a simple game having for fun.</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button href="https://faiz86ahmad.github.io/ReactTictaktoegame/" className={classes.btn}>Preview</Button>
                    </CardActions>
                </Card>

            </Grid>
            <Grid item sm={3}>
                <Card className={classes.cardW}>
                    <CardActionArea>
                        <CardMedia image={Blog} className={classes.imageFix} />
                        <CardContent>
                        <Typography variant="h5">Blog Website</Typography>
                        <Typography className={classes.font} variant="subtitle">It is a simple blog templates using bootstrap.</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button className={classes.btn}>Preview</Button>
                    </CardActions>
                </Card>

            </Grid>
            <Grid item sm={3}>
                <Card className={classes.cardW}>
                    <CardActionArea>
                        <CardMedia image={Portf} className={classes.imageFix} />
                        <CardContent>
                        <Typography variant="h5">Portfolio website</Typography>
                        <Typography className={classes.font} variant="subtitle">I built a portfolio website using bootstrap.In this website we have given all project react and bootstrap</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button href="https://faiz86ahmad.github.io/myportfoliowebsite/" className={classes.btn}>Preview</Button>
                    </CardActions>
                </Card>

            </Grid>
            
            <Grid item sm={3}>
                <Card className={classes.cardW}>
                    <CardActionArea>
                        <CardMedia image={Todo} className={classes.imageFix} />
                        <CardContent>
                        <Typography variant="h5">Todo List</Typography>
                        <Typography className={classes.font} variant="subtitle">I built a weather app where you can enter the name of the city and get the temprature of that city using node Api.</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button href="https://faiz86ahmad.github.io/TodolistApp/" className={classes.btn}>Preview</Button>
                    </CardActions>
                </Card>

            </Grid>
        </Grid>
        </Container>
    )
}

export default Portfolio;
