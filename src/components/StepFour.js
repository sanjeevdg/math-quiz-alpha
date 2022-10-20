import React, {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import { MathComponent } from 'mathjax-react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

/*


*/


export default function StepThree({question,currStep,currQuestion,chooseStep}) {


//console.log('PROPS',props);

//const [mycurrStep,setMyCurrStep] = useState(props.currStep);

let restr = question.Result3;

const regex = new RegExp('/\\frac/ig','g');

restr = restr.replaceAll(regex, '');

console.log('REST0000',restr);
//restr = restr.replaceAll(restr,'\\frac','\frac');

//console.log('RESTFFFFF',restr);



return (
<>
<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Result 3:</Typography>
<MathComponent display={false} tex={'\\displaylines {'+restr+'}'} />
</Box>

{ (question.Explanation3 !== '')?
<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Explanation 3:</Typography>
<MathComponent display={false} tex={'\\displaylines {'+question.Explanation3+'}'} />
</Box>:<></>
}

{(currStep===3)?
<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Step 4:</Typography>
<MathComponent display={false} tex={question.Step4} />
</Box>:<></>
}
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