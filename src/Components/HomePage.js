import React from 'react';
import './HomePage.css';
import But from './But';
import { styled } from '@mui/material/styles';
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
function HomePage() {
    const Div = styled('div')(({ theme }) => ({
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
      }));
    const fade = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 750 })
  return (
    <div className='bdy' style={{backgroundImage: "url('https://as2.ftcdn.net/v2/jpg/05/25/11/11/1000_F_525111169_c16k6AGCVLgdwwNKl6kkvsKzVNaOTCaM.jpg')"}}>
      {/* Define header image */}
      <div className="header-image">
        <h1>Welcome to my portfolio!</h1>
      </div>
      {/* Define introduction */}
      <section className="section" >
        <Div>
        <div className='team-member'>
                <img alt='profile' src='https://as2.ftcdn.net/v2/jpg/05/72/14/19/1000_F_572141970_PdwinohnNSapLBHesS8rzrGFWgZkGKZD.jpg'/>
            </div>
        <animated.h1 style={fade}>
          Sunilkumar S
          </animated.h1>
        <animated.p style={fade}>
        I am currently studying ECE in SKCET, 
          I am passionate about Web devolopement 
          and backend developement and i know datastructures and Django, 
          and I am constantly seeking new challenges to further develop my skills.
        </animated.p>
        <But/>
          </Div>
          <div style={{marginTop:'8%'}}>
          <Copyright/>
          </div>
      </section>
    </div>
  );
}

export default HomePage;
