import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { NavBar } from './NavBar';
import  CssBaseline  from '@material-ui/core/CssBaseline';
import { Footer } from './Footer';
import { grey } from '@material-ui/core/colors';
import { Button, Container, Grid, Paper,Typography } from '@material-ui/core';
import video from './video/Video.mp4'
import { CenterFocusStrong, ViewColumn } from '@material-ui/icons';
import zIndex from '@material-ui/core/styles/zIndex';
import AOS from 'aos';
import "aos/dist/aos.css";
import Login from './Login.js'
AOS.init({ once: true });

const useStyles = makeStyles((theme)=>({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: theme.palette.grey[50]
  },
  mainFeaturesPostContent:{
    position: "relative",
    // marginTop: theme.spacing(9),
    padding: theme.spacing(3),
    zIndex: "5"
 },
 mainFeaturesPost: {
  position: "relative",
  color: theme.palette.common.white,
 /*  marginBottom: theme.spacing(4), */
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
},

fullScreenVideo:{
  position: 'fixed',
  top: 0,
  left: 0,
  width: "100%" ,
  height: "100%",
  objectFit: "cover",
  

},
 video: {
  position:'relative',
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
 
 
  
  
},
videoText:{
  position: 'relative',
  width: "100%",
  zIndex: "2",
  display: "flex",
  flex: "1  1 auto",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  // backgroundColor: "rgba(0,0,0,0.5)",
  // height:"100%",
  marginTop: theme.spacing(5),
  padding: 0
}
}))
function App() {
  const classes = useStyles()
  return (
    <div className = {classes.root}>
      <CssBaseline />
      <NavBar/>
      <Login/>
      <main className={classes.main}>
        <div  /* <Container maxWidth = "false" */
        className = {classes.video}>
          <video 
          loop
           muted 
           autoPlay  
          //  controls
           preload = "auto"
           className={classes.fullScreenVideo}
           poster="./video/backGroundImg.PNG"
           >
            <source  type= "video/mp4"
            src={video}/>
          </video>
          <div className={classes.videoText}
          data-aos = "zoom-in"
          data-aos-delay="400"
          >
            <Typography variant = "h2" 
            style={{color: "#fff"}} 
            
            >
              sklasdg<br/>
              asgasg<br/>
              gasdg<br/>
              asgasg asgasdg
              asgasg asgasg
            </Typography>
          </div>
        </div>{/* </Container> */}

      <Paper  className = {classes.mainFeaturesPost}
      style= {{backgroundImage: `url(https://source.unsplash.com/random)`}}
      data-aos="fade-up"
      data-aos-delay="200"
      >
        <Container maxWidth={'md'}>
          <div className={classes.overlay}></div>
          <Grid container>
            <Grid item md={6} >
              <div className = {classes.mainFeaturesPostContent}>
                <Typography 
                component = "h1" 
                variant="h3"
                color="inherit"
                gutterBottom>
                  муй собака пес
                


                </Typography>
                <Typography 
                color = "primary"
                variant = "h5" 
                
                paragraph>
                    some_textso me_textsome_
                    textsome_texts ome_textsome_
                    textsome_text
                    some_ textsome_ textsome_
                    textsome_t extsom e_textso
                    me_texts ome_text
                    some_texts ome_text some
                    _textso me_texts ome_textso
                    e_texts ome_text
                </Typography>
                <Button variant="contained" color="secondary">
                  SOMEtext
                </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
         
        
      </Paper>
      
      </main>
      <Footer/>
    </div>
  );
}

export default App;
