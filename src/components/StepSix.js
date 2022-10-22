import React, {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import { MathComponent } from 'mathjax-react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function StepSix({question,currStep,currQuestion,showFeedbackBtn,showStepBtn}) {



return (
<>
{ (question.Result5.length !== 0) &&
<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Result 5:</Typography>
<MathComponent display={false} tex={question.Result5} />
</Box>
}
{ (question.Explanation5.length !== 0) &&
<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Explanation 5:</Typography>
<MathComponent display={false} tex={question.Explanation5} />
</Box>}
    </>
);


}