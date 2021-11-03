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
import "./SchoolDetails.css"
function SchoolDetails(props) {
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
  const {values,handleChange}=props;
  return (
    <MuiThemeProvider>
      <React.Fragment>
          <Header/>
            <Card sx={{ maxWidth: 345 }} className="card">
            <CardHeader
                 title="Educational Info"
                 titleTypographyProps={{variant:'h3' }}
            />
            <Divider style={style}/>
              <CardContent  >
                <div  className="TextField1">
                  <TextField

                    placeholder="Enter Your School Name"
                        name="School"
                        defaultValue={values.School}
                        type="text"
                          label="Enter Your School Title"
                          onChange={handleChange}
                    />
                  <TextField
                    multiline={true}
       rows={2}
                    placeholder="Year Of Schooling"
                        name="Year"
                        defaultValue={values.Year}
                        type="text"
                          label="Year Of Schooling"
                           onChange={handleChange}
                    />
                    <TextField
                      multiline={true}
         rows={2}
                      placeholder="% Of Marks In ISC and ICSE"
                          name="SchoolQualifications"
                          defaultValue={values.SchoolQualifications}
                          type="text"
                            label="% Of Marks In ISC and ICSE(use ,)"
                             onChange={handleChange}
                      />
                </div>
                <TextField
              style = {{width:"75%"}}
                  placeholder="School Description"
                      name="SchoolDescription"
                      defaultValue={values.SchoolDescription}
                     type="text"
                        label="School Description"
                      onChange={handleChange}
                  />

              </CardContent>
              <CardContent  >
                <div  className="TextField1">
                  <TextField
                    multiline={true}
       rows={2}
                    placeholder="Enter Your University Name"
                        name="Uni"
                        defaultValue={values.Uni}
                        type="text"
                          label="Enter Your University Name"
                          onChange={handleChange}
                    />
                  <TextField
                    multiline={true}
       rows={2}
                    placeholder="Year Of College"
                        name="UniYear"
                        defaultValue={values.UniYear}
                        type="text"
                          label="Year Of College"
                           onChange={handleChange}
                    />
                    <TextField
                      multiline={true}
         rows={2}
                      placeholder="University Qualifications"
                          name="UniQualifications"
                          defaultValue={values.UniQualifications}
                          type="text"
                            label="University Qualifications"
                             onChange={handleChange}
                      />
                </div>
                <TextField
              style = {{width:"75%"}}
                  placeholder="University Descriptions"
                      name="UniDesc"
                      defaultValue={values.UniDesc}
                     type="text"
                        label="University Descriptions "
                      onChange={handleChange}
                  />

              </CardContent>
              <div>
                <Button variant="outlined" onClick={prevStep} className="buttons"><FcPrevious/> Previous </Button>
                <Button variant="outlined" onClick={nextStep} className="buttons">Continue <FcNext/> </Button>
              </div>

            </Card>
      </React.Fragment>
    </MuiThemeProvider>
  )
}

export default SchoolDetails
