import React, {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import { MathComponent } from 'mathjax-react';
import Button from '@mui/material/Button';

/*


*/


export default function StepSix({question,currStep,currQuestion,chooseStep}) {


//console.log('PROPS',props);

//const [mycurrStep,setMyCurrStep] = useState(props.currStep);


return (
<>
<Typography sx={{color:'black'}}>
Result 5:
<MathComponent display={false} tex={question.Result5} />

Explanation 5:
<MathComponent display={false} tex={question.Explanation5} />

</Typography>
    </>
);


// setShowStep2(false);
       // setShowStep2(true);

/*

<Button 
    onClick={()=>{
        chooseStep(4); 
        
   }}
style={{
    border:0,width:130,height:36,
    borderRadius:18,backgroundColor:'#407392',
    marginLeft:30,textTransform:'unset',
    marginTop:20,color:'white',fontSize:12,
    fontFamily:'OpenSansSemiBold'}}>
    Check Step 4/4
    </Button>

*/

}