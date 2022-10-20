import React, {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import { MathComponent } from 'mathjax-react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

/*


*/


export default function StepThree({question,currStep,currQuestion,chooseStep}) {


function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

let aa = question.Result2;
aa = replaceAll(aa,'\n','');
aa = '\\displaylines {'+aa + '}';
//console.log('PROPS',props);

//const [mycurrStep,setMyCurrStep] = useState(props.currStep);

/*
<br/>



*/


return (
<>
<Box sx={{marginLeft:5,marginTop:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Result 2:</Typography><br/>
<MathComponent display={false} tex={aa} />
</Box>

{ (question.Explanation1 !== '')?

<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Explanation 2:</Typography>
<MathComponent display={false} tex={'\\displaylines {'+question.Explanation2+'}'} />
</Box>:<></>}


{(currStep===2)?
<Box sx={{marginLeft:5,marginTop:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Step 3:</Typography>
<MathComponent display={false} tex={question.Step3} />
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