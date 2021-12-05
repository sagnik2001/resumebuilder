//this is success component

import React from 'react'
import SHeader from "./SuccessHeader";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pdf from 'react-to-pdf'
const ref=React.createRef();
function Success(props) {
  const {values:{ name,
   email,
   mobile,
   LinkedIn,
   Github,
   skills,
   ProjTitles,
   ProjLinks,
   ProjDescriptions,
   ProjTitles1,
   ProjLinks1,
   ProjDescriptions1,
   School,
   Year,
   SchoolQualifications,
   SchoolDescription,
   Uni,
   UniDesc,
   UniQualifications,
   UniYear,
   Internship1,
   Internship1details,
   Internship1Location,
   Internship1Year,
   Internship2,
   Internship2details,
   Internship2Location,
   Internship2Year,
   lang,
   hobbie,
   activities,}}=props
console.log(name);
  return (

    <MuiThemeProvider>
      <React.Fragment>
          <SHeader/>
          <div class="col-lg-6 mx-auto" ref={ref}>
       <br/><br/>
       <div class="row text-center" style={{justifyContent: 'center'}}>
           <div class="col-lg-6">
               <h1><b>{name}</b></h1>
               <p class="lead email"><strong>Email:</strong> {email}</p>
               <p class="lead"><strong>Contact:</strong> (+91){mobile}</p>
               <p class="lead"><strong>LinkedIn:</strong> {LinkedIn}</p>
               <p class="lead"><strong>Github:</strong> {Github}</p>
           </div>
       </div>
       <hr/>
       <div class="col-lg-8 mx-auto bg-light">
             <h3><b>Skills</b></h3>
       </div>
       <div class="col-lg-8 row mx-auto">
           <p class="lead"> {skills}</p>
       </div>


            <div class="col-lg-8 mx-auto bg-light">
             <h3><b>Experience</b></h3>
       </div>
      {Internship1 && ( <div class="col-lg-8 mx-auto">
             <p class="lead"><b>{Internship1},{Internship1Location}</b> ({Internship1Year})</p>
             <p class="mt-0">{Internship1details}</p>
       </div>)}
      {Internship2 &&( <div class="col-lg-8 mx-auto">
             <p class="lead"><b>{Internship2}, {Internship2Location}</b> ({Internship2Year})</p>
             <p class="mt-0">{Internship2details}</p>
       </div>)}
       <div class="col-lg-8 mx-auto bg-light">
             <h3><b>Projects</b></h3>
       </div>
      {ProjTitles && ( <div class="col-lg-8 mx-auto">
             <p class="lead"><b>{ProjTitles}</b>({ProjLinks})</p>
             <p class="mt-0">{ProjDescriptions}</p>
       </div>)}
      {ProjTitles1 && ( <div class="col-lg-8 mx-auto">
             <p class="lead"><b>{ProjTitles1}</b> ({ProjLinks1})</p>
             <p class="mt-0">{ProjDescriptions1}</p>
       </div>)}
       <div class="col-lg-8 mx-auto bg-light">
             <h3><b>Education</b></h3>
       </div>
       <div class="col-lg-8 mx-auto">
             <p class="lead"><b>{School}</b> ({SchoolQualifications}, { Year})</p>
             <p class="mt-0">{ SchoolDescription}</p>
       </div>
       <div class="col-lg-8 mx-auto">
             <p class="lead"><b>{ Uni}</b> ({UniQualifications}, { UniYear})</p>
             <p class="mt-0">{UniDesc}</p>
       </div>
       <div class="col-lg-8 mx-auto bg-light">
     <h3><b>Extra-Curriculars/Activities</b></h3>
</div>
<div class="col-lg-8 mx-auto">
     <ul>
       <li><p class="lead"><b>Languages: </b>{lang}</p></li>
       <li><p class="lead"><b>Hobbies: </b>{hobbie} </p></li>
       <li><p class="lead"><b>Activities: </b>{activities} </p></li>
     </ul>

</div>




       </div>
     <div>
       <Pdf targetRef={ref} filename="resume.pdf">
          {({toPdf})=><button onClick={toPdf}>Click to Download Pdf</button>}
       </Pdf>
     </div>
      </React.Fragment>
      </MuiThemeProvider>

  )
}

export default Success
