import React, {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import { MathComponent } from 'mathjax-react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
/*


*/


export default function StepFive({question,currStep,currQuestion,showFeedbackBtn,showStepBtn}) {


function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

let aa = question.Result4;
aa = replaceAll(aa,'\n','');
aa = "\\displaylines {" + aa + "}";


return (
<>
<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Result 4 :</Typography>
<MathComponent display={false} tex={aa} />
</Box>

{ (question.Explanation4.length !== 0)  && (currStep === 5 && showFeedbackBtn) &&
<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Explanation 4:</Typography>
<MathComponent display={false} tex={question.Explanation4} />
</Box> }

{(currStep===5 && showFeedbackBtn) && (question.Step5.length !==0) &&
<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Step 5:</Typography>
<MathComponent display={false} tex={question.Step5} />
</Box>
}

    </>
);


}