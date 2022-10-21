import React, {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import { MathComponent } from 'mathjax-react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
/*


*/


export default function StepFive({question,currStep,currQuestion,chooseStep}) {


//console.log('PROPS',props);

//const [mycurrStep,setMyCurrStep] = useState(props.currStep);

// question.Result4

function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

let aa = question.Result4;
//alert('res='+aa);
aa = replaceAll(aa,'\n','');


aa = "\\displaylines {" + aa + "}";




return (
<>
<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Result 4 :</Typography>
<MathComponent display={false} tex={aa} />
</Box>

{ (question.Explanation3.length !== 0) &&
<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Explanation :</Typography>
<MathComponent display={false} tex={question.Explanation4} />
</Box> }

{(currStep===4) && (question.Step5.length !==0) &&
<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Step 5:</Typography>
<MathComponent display={false} tex={question.Step5} />
</Box>
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