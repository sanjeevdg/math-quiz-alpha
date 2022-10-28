import React, {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import { MathComponent } from 'mathjax-react';
import Box from '@mui/material/Box';

export default function StepOne({question, currStep, currQuestion}) {


let restr = question.Step1;
restr = '\\displaylines {'+ restr + '}';




return (
<>

{ !(currStep > 1) &&
<><Box sx={{marginLeft:5,marginTop:5}}>
<Typography align="left" sx={{color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Step 1:</Typography>
</Box>
<Box sx={{marginLeft:5,marginTop:5}}>
<MathComponent display={false} tex={restr} />
</Box></>}


{ (currQuestion===0) &&
<>
<Box sx={{marginLeft:5,marginTop:5}}>
<Typography align="left" sx={{color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Image display:</Typography>
</Box>
<Box sx={{marginLeft:5,marginTop:5}}>
<MathComponent display={false} tex={String.raw`\quad ax^{4}+bx^{3}-x^{2}+2x+3 \text {has remainder}`} />

<img src={require('../assets/images/VMC_SL_Explanation1_22.png')}/>
<MathComponent display={false} tex={String.raw`x^2+x-2`} />
</Box></>}
</>
);




}