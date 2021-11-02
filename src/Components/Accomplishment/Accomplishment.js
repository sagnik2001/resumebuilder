import React from 'react'
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
import "./Accomplishment.css"
import {BsCheckSquareFill} from "react-icons/bs"
const Accomplishment = (props) => {
  const nextStep=(e)=>{
    e.preventDefault();
    props.nextStep()
  }
  const prevStep=(e)=>{
    e.preventDefault();
    props.prevStep()
  }
  const style = {
    marginLeft: '10vw',
    marginRight: '10vw',
  }
    const {values,handleChange}=props
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <Header/>
            <Card sx={{ maxWidth: 345 }} className="card">
            <CardHeader
                 title="Experience Info"
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

                  placeholder="Enter Your Organization/Any Other Institutions"
                      name="Internship1"
                      defaultValue={values.Internship1}
                      type="text"
                        label="Organization/Institutions"
                        onChange={handleChange}
                  />
                <TextField
                multiline={true}
   rows={2}
                  placeholder="TimePeriod"
                      name="Internship1Year"
                      defaultValue={values.Internship1Year}
                      type="text"
                        label="Enter Your Start Date And End Date"
                         onChange={handleChange}
                  />
                  <TextField
                    placeholder="Location"
                        name="Internship1Location"
                        defaultValue={values.Internship1Location}
                        type="text"
                          label="Internship Location"
                           onChange={handleChange}
                    />
              </div>
              <TextField
            style = {{width:"75%"}}
                placeholder="Internship Details"
                    name="Internship1details"
                    defaultValue={values.Internship1details}
                   type="text"
                      label="Internship Details "
                    onChange={handleChange}
                />

            </CardContent>
            <CardContent  >
              <div  className="header1" style={{display: 'flex'}}>
                    <BsCheckSquareFill style={{marginTop:"30px",marginRight:"5px"}} size="30px"/>
                   <h1 >2</h1>
              </div>

              <div  className="TextField1">

                <TextField

                  placeholder="Enter Your Organization/Any Other Institutions"
                      name="Internship2"
                      defaultValue={values.Internship2}
                      type="text"
                        label="Organization/Institutions"
                        onChange={handleChange}
                  />
                <TextField
                multiline={true}
   rows={2}
                  placeholder="TimePeriod"
                      name="Internship2Year"
                      defaultValue={values.Internship2Year}
                      type="text"
                        label="Enter Your Start Date And End Date"
                         onChange={handleChange}
                  />
                  <TextField
                    placeholder="Location"
                        name="Internship2Location"
                        defaultValue={values.Internship2Location}
                        type="text"
                          label="Internship Location"
                           onChange={handleChange}
                    />
              </div>
              <TextField
            style = {{width:"75%"}}
                placeholder="Internship Details"
                    name="Internship2details"
                    defaultValue={values.Internship2details}
                   type="text"
                      label="Internship Details "
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

export default Accomplishment
