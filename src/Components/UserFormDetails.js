import {React,useState} from 'react';
import PersonalDetails from './PersonalDetails/PersonalDetails.js';
import EducationalDetails from "./EducationalDetails/EducationalDetails.js"
import SchoolDetails from "./SchoolDetails/SchoolDetails.js"
import Accomplishment from "./Accomplishment/Accomplishment.js"
import Misc from "./Miscallenous/Miscallenous.js"
import Success from "./Success.js"
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
     Uni:'',
     UniDesc:'',
     UniQualifications:'',
     UniYear: '',
     Internship1:'',
     Internship1details:'',
     Internship1Location: '',
     Internship1Year: '',
     Internship2:'',
     Internship2details:'',
     Internship2Location: '',
     Internship2Year: '',
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


    const { name, value } = e.target;

    setinput({
    ...input,
      [name]: value,
    });

  }

console.log(input);
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
    Uni:input.Uni,
    UniQualifications:input.UniQualifications,
    UniDesc:input.UniDesc,
    UniYear:input.UniYear,
    lang:input.lang,
    hobbie:input.hobbie,
    activities:input.activities,
    Internship1:input.Internship1,
    Internship1Year:input.Internship1Year,
    Internship1Location:input.Internship1Location,
    Internship1details:input.Internship1details,
    Internship2:input.Internship2,
    Internship2Location:input.Internship2Location,
    Internship2Year:input.Internship2Year,
    Internship2details:input.Internship2details,
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
         case 4:
         return(
           <Accomplishment
             prevStep={previousHandler}
             nextStep={nextHandler}
             handleChange={onChangeHandler}
             values={values}
             />
         )
         case 5:
         return(
           <Misc
             prevStep={previousHandler}
             nextStep={nextHandler}
             handleChange={onChangeHandler}
             values={values}
             />
         )
         case 6:
         return(
           <Success

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
