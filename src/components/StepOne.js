import React, {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import { MathComponent } from 'mathjax-react';
import Box from '@mui/material/Box';

export default function StepOne({question, currStep, currQuestion}) {


let restr = question.Step1;

//const regex = new RegExp('/]\\[/i','g');
//const regex = new RegExp('/\n\\]\\[\n/ig','g');

//const regex2 = new RegExp('//\\]/\\[/g','g');

// const wrokrgx = new RegExp('/\\\\]\\\\[/ig','g');
//const wrokrgx = new RegExp('/\\\]\\\[/g','g');

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}


// restr = restr.replaceAll(wrokrgx, '');
//restr = restr.replaceAll(regex2, '');
//restr = restr.replaceAll(restr,"\]\[","");

//restr = escapeRegExp(restr);

console.log('zzzzzzzz',restr);
restr = '\\displaylines {'+ restr + '}';
console.log('yyyyyyyys',restr);
return (
<>

{(currStep !== 0)?
<><Box sx={{flexDirection:'column',marginLeft:5,marginTop:5}}>
<Typography sx={{color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Step 1:</Typography>
</Box>
<Box sx={{flexDirection:'column',marginLeft:5,marginTop:5}}>
<MathComponent display={true} tex={restr} />
</Box></>:<></>}

</>
);




}