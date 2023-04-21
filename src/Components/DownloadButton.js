import React from 'react';
import Button from '@mui/material/Button';
function DownloadButton() {
  const downloadFile = () => {
    const url = 'https://1drv.ms/b/s!AqAivzn1fcOGgRj2b6q8kAmnuIbL';
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'myfile.pdf';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div>
    <h5 style={{fontSize: '18px',
    fontWeight: "bold",
    margiTop: "20%",
    marginLeft: "auto",
    marginBottom: "20px"}}>My Resume</h5>
    <Button variant="contained" onClick={downloadFile}>
      Download
    </Button>
    </div>
  );
}

export default DownloadButton;
