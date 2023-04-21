import Carousel from 'react-bootstrap/Carousel';
import Main from './Main';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
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
function Skills() {
  return (
    <div>
      <Main/>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapercave.com/wp/wp6350776.jpg"
          style={{backgroundAttachment:'cover'}}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Web development</h3>
          <p>I currently know html,css,react-js,Angular-js.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaperaccess.com/full/1947484.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Programming Languages </h3>
          <p>C++ with STL library functions,python(using Django framework),C & Currently learning Java</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://c4.wallpaperflare.com/wallpaper/300/702/343/programmers-programming-motivational-code-text-hd-wallpaper-preview.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Technical&Consulting Skills</h3>
          <p>
            I know about Cryptomining,Block chain tech.., and I am good at problem solving.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Copyright/>
    </div>
  );
}

export default Skills;