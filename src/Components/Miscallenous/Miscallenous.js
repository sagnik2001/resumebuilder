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
const Misc = (props) => {
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
                   title="Other Info"
                   titleTypographyProps={{variant:'h3' }}
              />
              <Divider style={style}/>
              <CardContent>
              <TextField
              style={{width:"75%"}}
              multiline={true}
 rows={2}
                placeholder="Languages"
                    name="lang"
                    defaultValue={values.lang}
                    type="text"
                      label="Languages"
                       onChange={handleChange}
                />
                <TextField
                style={{width:"75%"}}
                multiline={true}
   rows={2}
                  placeholder="Hobbies(if any..)"
                      name="hobbie"
                      defaultValue={values.hobbie}
                      type="text"
                        label="Hobbies(if any..)"
                         onChange={handleChange}
                  />
                  <TextField
                  style={{width:"75%"}}
                  multiline={true}
     rows={4}
                    placeholder="Other Activities"
                        name="activities"
                        defaultValue={values.activities}
                        type="text"
                          label="Other Activities"
                           onChange={handleChange}
                    />
              </CardContent>
              <div>
              <Button variant="outlined" onClick={prevStep} className="buttons" size="50%"><FcPrevious/> Go To Previous </Button>
              <Button variant="outlined" onClick={nextStep} className="buttons">Confirm & Continue <FcNext/> </Button>
              </div>
            </Card>
            </React.Fragment>
            </MuiThemeProvider>
    )
}

export default Misc
