import React from 'react';
import Header from "../Header";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
const EducationalDetails=(props)=>{
  const style = {
    marginLeft: '10vw',
    marginRight: '10vw',
  }
  return(
    <MuiThemeProvider>
      <React.Fragment>
          <Header/>
            <Card sx={{ maxWidth: 345 }} className="card">
            <CardHeader
                 title="Educational Info"
                 titleTypographyProps={{variant:'h3' }}
            />
            <Divider style={style}/>
            <CardContent   className="TextField1">
            </CardContent>
            </Card>
      </React.Fragment>
    </MuiThemeProvider>
  )
}
export default EducationalDetails
