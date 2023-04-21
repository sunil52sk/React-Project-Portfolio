import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Main from './Main';
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
function Contact(props) {
  return (
    <div>
      <Main/>
    <div style={{marginTop:'200px'}} className='bdy'>
       <Typography variant="body2" color="text.secondary" align="center" {...props}><h1>
        Let's Worktogether...!
        </h1> 
        </Typography>
    <div style={{marginTop:'100px'}}>
        <Stack direction="row" spacing={2} style={{marginLeft:'45%'}}>
        <Link href='https://www.linkedin.com/in/sunil-kumar-seenivasan-3b591623a'><LinkedInIcon style={{fintSize:'large'}}/></Link>
        <Link href='https://www.facebook.com/unluky.soulsk?mibextid=ZbWKwL'><FacebookIcon/></Link>
        <Link href='https://instagram.com/sunil52sk?igshid=ZDdkNTZiNTM='><InstagramIcon/></Link>
        <Link href='https://wa.me/919360533277?text='><WhatsAppIcon/></Link>
        </Stack>
        <Copyright/>
        </div>
        </div>
        </div>
  )
}

export default Contact