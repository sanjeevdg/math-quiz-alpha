import React, {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import { MathComponent } from 'mathjax-react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
/*


*/


/*


<Button 
    onClick={()=>{
        chooseStep(3); 
        
   }}
style={{
    border:0,width:130,height:36,
    borderRadius:18,backgroundColor:'#407392',
    marginLeft:30,textTransform:'unset',
    marginTop:20,color:'white',fontSize:12,
    fontFamily:'OpenSansSemiBold'}}>
    Check Step 3/3
    </Button>

*/


export default function StepTwo({question,currStep,currQuestion,chooseStep}) {


function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

let aa = question.Result1;
console.log('AAAAA00000'+aa);
//alert(aa);
//replaceAll(question.Step2,"\\text","\text");
// question.Result1


//const regex = new RegExp('/]\\[/ig','g');

//aa = aa.replaceAll(regex, '');
//console.log(aa);
//console.log('BBBBBB',aa);


//aa = replaceAll(aa,"]\\[","\\");
aa = replaceAll(aa,'\n','');
aa = replaceAll(aa,'\\,','\\');
console.log('CCCCCCC',aa);
//aa = replaceAll(aa,"\n","");

//aa = replaceAll(aa,"\quad ","\\quad");
//aa = replaceAll(aa,"\text ","\\text");

//console.log('AAAAA22222'+aa);

//let aa = replaceAll(question.Result1,"\]\\[","");


aa = '\\displaylines {'+aa+'}';
console.log('AAAAA11111'+aa);
/*

\displaylines {\\textT_r=A+(r-1) D\n\\]\\[\n\\text{Similarly, }T_x=A+(x-1) D =a\\quad \n\\]\\[T_y=A+(y-1) D=b \\quad \n\\]\\[T_z=A+(z-1) D=c}

\displaylines {\text T_r=A+(r-1) D \\ \text {Similarly, }T_x=A+(x-1) D =a \\ \quad \\ T_y=A+(y-1) D=b \quad \\ T_z=A+(z-1) D=c}



*/


return (
<>
<Box sx={{display:'flex',alignItems:'flex-start',justifyContent:'flex-start',alignSelf:'flex-start',flexDirection:'column',marginLeft:5,marginTop:5}}>
<Typography sx={{color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Result 1:</Typography>
</Box>
<Box sx={{flexDirection:'column',marginLeft:5,marginTop:5}}>
<MathComponent style={{color:'red'}} display={true} tex={aa} />
</Box>

{ (question.Explanation1 !== '')?

<Box sx={{flexDirection:'column',marginLeft:5,marginTop:5}}>
<Typography sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
    Explanation 1:</Typography>
<MathComponent display={true} tex={'\\displaylines {'+question.Explanation1+'}'} />
</Box>:<></>
}

{(currStep===1)?
<>
<Box sx={{marginLeft:5,marginTop:5}}>
<Typography sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>Step2:</Typography>
<MathComponent display={true} tex={question.Step2} />
</Box>
</>

:<></>
}

</>
);




}