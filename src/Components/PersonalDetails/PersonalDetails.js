import React from 'react';
import PropTypes from 'prop-types';
import Header from "../Header";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import "./PersonalDetails.css"
import Button from "@material-ui/core/Button";
import {FcNext} from "react-icons/fc"
const PersonalDetails=(props)=>{
  const style = {
    marginLeft: '10vw',
    marginRight: '10vw',
  }
  const nextStep=(e)=>{
    e.preventDefault();
    props.nextStep()
  }

  const {values,handleChange}=props
  return(
    <MuiThemeProvider>
      <React.Fragment>
          <Header/>
          <Card sx={{ maxWidth: 345 }} className="card">
         <CardHeader
              title="Personal Info"
              titleTypographyProps={{variant:'h3' }}
         />
         <Divider style={style}/>
         <CardContent   className="TextField1">
             <TextField
               placeholder="Enter Your Name"
                   name="name"
                   defaultValue={values.name}
                   type="text"
                     label="Enter Your Name"
                   onChange={handleChange}
               />

               <TextField
                 placeholder="Enter Your Email"
                     name="email"
                     defaultValue={values.email}
                     type="email"
                       label="Enter Your Email"
                     onChange={handleChange}
                 />
                 <TextField
                   placeholder="Enter Your Mobile Number"
                       name="mobile"
                       defaultValue={values.mobile}
                      type="text"
                         label="Enter Your Mobile Number"
                       onChange={handleChange}
                   />
           </CardContent>
           <CardContent className="TextField1">
           <TextField
             placeholder="Enter Your LinkedIn Profile"
                 name="LinkedIn"
                 defaultValue={values.LinkedIn}
                type="url"
                   label="Enter Your LinkedIn Profile"
                 onChange={handleChange}
             />
             <TextField
               placeholder="Enter Your GitHub Profile"
                   name="Github"
                   defaultValue={values.Github}
                  type="url"
                     label="Enter Your Github Profile"
                   onChange={handleChange}
               />
           </CardContent>
           <CardContent className="TextField1">
           <TextField
           fullWidth
             placeholder="Enter Your Skills (use ,)"
                 name="skills"
                 defaultValue={values.skills}
                type="text"
                   label="Enter Your Skills (use ,) "
                 onChange={handleChange}
             />
           </CardContent>

            <Button variant="outlined" onClick={nextStep} className="buttons">Continue <FcNext/> </Button>

</Card>
      </React.Fragment>
    </MuiThemeProvider>
  )
}
export default PersonalDetails;
