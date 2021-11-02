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
import Button from "@material-ui/core/Button";
import { FcPrevious } from "react-icons/fc";
import {FcNext} from "react-icons/fc"
import {BsCheckSquareFill} from "react-icons/bs"
import "./EducationalDetails.css"
const EducationalDetails=(props)=>{
  const nextStep=(e)=>{
    e.preventDefault();
    props.nextStep()
  }
  const prevStep=(e)=>{
    e.preventDefault();
    props.prevStep()
  }
    const {values,handleChange}=props
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
                 title="Projects Info"
                 titleTypographyProps={{variant:'h3' }}
            />
            <Divider style={style}/>
            <CardContent  >
              <div  className="header1" style={{display: 'flex'}}>
                    <BsCheckSquareFill style={{marginTop:"30px",marginRight:"5px"}} size="30px"/>
                   <h1 >1</h1>
              </div>

              <div  className="TextField1">

                <TextField
                  placeholder="Enter Your Project Name"
                      name="ProjTitles"
                      defaultValue={values.ProjTitles}
                      type="text"
                        label="Enter Your Project Title"
                        onChange={handleChange}
                  />
                <TextField
                  placeholder="Project Link"
                      name="ProjTitles"
                      defaultValue={values.ProjLinks}
                      type="url"
                        label="Enter Your Project Link"
                         onChange={handleChange}
                  />
              </div>
              <TextField
            style = {{width:"75%"}}
                placeholder="Project Descriptions"
                    name="ProjDescriptions"
                    defaultValue={values.ProjDescriptions}
                   type="text"
                      label="Project Descriptions "
                    onChange={handleChange}
                />

            </CardContent>
            <CardContent  >
              <div  className="header1" style={{display: 'flex'}}>
                    <BsCheckSquareFill style={{marginTop:"30px",marginRight:"5px"}} size="30px"/>
                   <h1 > 2</h1>
              </div>
              <div  className="TextField1">
                <TextField
                  placeholder="Enter Your Project Name"
                      name="ProjTitles1"
                      defaultValue={values.ProjTitles1}
                      type="text"
                        label="Enter Your Project Title"
                        onChange={handleChange}
                  />
                <TextField
                  placeholder="Project Link"
                      name="ProjTitles1"
                      defaultValue={values.ProjLinks1}
                      type="url"
                        label="Enter Your Project Link"
                         onChange={handleChange}
                  />
              </div>
              <TextField
            style = {{width:"75%"}}
                placeholder="Project Descriptions"
                    name="ProjDescriptions1"
                    defaultValue={values.ProjDescriptions1}
                   type="text"
                      label="Project Descriptions "
                    onChange={handleChange}
                />

            </CardContent>
                <Button variant="outlined" onClick={prevStep} className="buttons"><FcPrevious/> Previous </Button>
                <Button variant="outlined" onClick={nextStep} className="buttons">Continue <FcNext/> </Button>
            </Card>
      </React.Fragment>
    </MuiThemeProvider>
  )
}
export default EducationalDetails
