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
<><Box sx={{flexDirection:'column',marginLeft:5,marginTop:5}}>
<Typography sx={{color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Step 1:</Typography>
</Box>
<Box sx={{flexDirection:'column',marginLeft:5,marginTop:5}}>
<MathComponent display={true} tex={restr} />
</Box></>}

</>
);




}