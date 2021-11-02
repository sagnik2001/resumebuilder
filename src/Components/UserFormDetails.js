import {React,useState} from 'react';
import PersonalDetails from './PersonalDetails/PersonalDetails.js';
import EducationalDetails from "./EducationalDetails/EducationalDetails.js"
import SchoolDetails from "./SchoolDetails/SchoolDetails.js"
const UserForm=()=>{
  // States And Fields for different descriptions
  const [step,Setstep]=useState(1);
  const [input,setinput] = useState({
     name: '',
     email: '',
     mobile:'',
     LinkedIn: '',
     Github: '',
     skills:'',
     ProjTitles: '',
     ProjLinks: '',
     ProjDescriptions: '',
     ProjTitles1: '',
     ProjLinks1: '',
     ProjDescriptions1: '',
     School: '',
     Year: '',
     SchoolQualifications: '',
     SchoolDescription: '',
     lang: '',
     hobbie: '',
     activities: '',
  })
  // Previous And Next Buttons for pages
  const previousHandler =()=>{
    Setstep(step-1)
  }
  const nextHandler =()=>{
    Setstep(step+1)

  }
  // onChangeHandler Input Fields
  const onChangeHandler =(e)=>{
    const name = e.target.name
    const value = e.target.value
    setinput({
      ...input,
      [name]: value
    })

  }

  const values={
    name:input.name,
    email:input.email,
    mobile:input.mobile,
    LinkedIn:input.LinkedIn,
    Github:input.Github,
    skills:input.skills,
    ProjTitles:input.ProjTitles,
    ProjLinks:input.ProjLinks,
    ProjDescriptions:input.ProjDescriptions,
    ProjTitles1:input.ProjTitles1,
    ProjLinks1:input.ProjLinks1,
    ProjDescriptions1:input.ProjDescriptions1,
    School:input.School,
    Year:input.Year,
    SchoolQualifications:input.SchoolQualifications,
    SchoolDescription:input.SchoolDescription,
    lang:input.lang,
    hobbie:input.hobbie,
    activities:input.activities,
  }
  function SwitchCase(props) {
    switch (props.value) {
      case 1:
      return(
           <PersonalDetails
              nextStep={nextHandler}
              handleChange={onChangeHandler}
              values={values}
           />
       )
       case 2:
       return(
           <EducationalDetails
               prevStep={previousHandler}
               nextStep={nextHandler}
               handleChange={onChangeHandler}
               values={values}
             />
         )
         case 3:
         return(
           <SchoolDetails
             prevStep={previousHandler}
             nextStep={nextHandler}
             handleChange={onChangeHandler}
             values={values}
             />
         )
      }
   }
return(
  <>
      <SwitchCase value={step} />
  </>


)

}
export default UserForm
