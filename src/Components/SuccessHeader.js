//this is sucess header
import React from 'react';
import Typography from '@material-ui/core/Typography'
import Divider from "@material-ui/core/Divider";
const SHeader=()=>{
  const style = {
    marginLeft: '10vw',
    marginRight: '10vw',
    marginBottom: '5vw',
  };
  return(
    <div>
    <Typography align="center" variant="h3">Your Resume</Typography>
      <Typography align="center" variant="subtitle1">Hang Tight while your Resume is been generated !!!</Typography>
      <Divider style={style}/>
    </div>
  )
}
export default SHeader
