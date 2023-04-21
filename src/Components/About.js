import React from 'react';
import './About.css';
import { styled } from '@mui/material/styles';
import DownloadButton from './DownloadButton';
import Main from './Main';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useSpring, animated } from 'react-spring';
function Copyright(props) {
 
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/sunil52sk">
        Sunil52sk
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function About() {
  const fade = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 750 })
  const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));
  return (
    <div>
      <Main/>
    <div className="about-container">
      <Div>
      <animated.h1 style={fade}>About Me</animated.h1>
      <animated.p style={fade}>I'm Engineering student, and I'm very passionate and dedicated to my work.
        as a professional web developer, 
        I have acquired the skills and knowledge necessary to make your project a success. 
        I enjoy every step of the design process, from discussion and collaboration.</animated.p>
      <div >
        <img src="https://t4.ftcdn.net/jpg/05/62/02/41/240_F_562024161_tGM4lFlnO0OczLYHFFuNNdMUTG9ekHxb.jpg" alt="Team Member" className="team-member"/>
      </div>
        <DownloadButton/>
        </Div>
    </div>
      <Copyright/>
    </div>
  );
}

export default About;
