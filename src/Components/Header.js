import React from 'react';
import Typography from '@material-ui/core/Typography'
import Divider from "@material-ui/core/Divider";
const Header=()=>{
  const style = {
    marginLeft: '10vw',
    marginRight: '10vw',
    marginBottom: '5vw',
  };
  return(
    <div>
    <Typography align="center" variant="h3">Create Your Resume!!!</Typography>
      <Typography align="center" variant="subtitle1">Provide the necessary details in the required fields for your resume</Typography>
      <Divider style={style}/>
    </div>
  )
}
export default Header
