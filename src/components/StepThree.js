import React, {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import { MathComponent } from 'mathjax-react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ExpandLessTwoToneIcon from '@mui/icons-material/ExpandLessTwoTone';
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';

export default function StepThree({question,currStep,currQuestion,showFeedbackBtn,showStepBtn}) {



const [showExplanationTwo, setShowExplanationTwo] = useState(false);


function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

let aa = question.Result2;
let bb = question.Explanation2;

aa = replaceAll(aa,'\n','');
aa = replaceAll(aa,'begin','\\begin');
aa = replaceAll(aa,'end','\\end');

aa = replaceAll(aa,'text','\\text');
aa = replaceAll(aa,'frac','\\frac');
aa = replaceAll(aa,'quad','\\quad');
aa = replaceAll(aa,'because','\\because');
aa = replaceAll(aa,'bot','\\bot');

aa = replaceAll(aa,'\\','\/');

aa = replaceAll(aa,'/','');

aa = '\\displaylines {'+ aa + '}';

bb = '\\displaylines {'+ bb + '}';

console.log('RESULT222'+aa);
console.log('EXPLANATION2222'+bb);


return (
<>
<Box sx={{marginLeft:5,marginTop:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Result 2:</Typography><br/>
<MathComponent display={true} tex={'\\displaylines {'+question.Result2+'}'} />

</Box>

{ (question.Explanation2.length !== 0) &&

<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Explanation 2:</Typography>
    
{!showExplanationTwo && <Box sx={{display:'flex',flexGrow:1,width:300,position:'relative',left:200,top:-25}}><Typography style={{fontSize:14,color:'#000000',fontFamily:'OpenSansRegular',marginTop:2}}>Show explanation&nbsp;</Typography><ExpandCircleDownTwoToneIcon onClick={() => setShowExplanationTwo(true)}/></Box>}

{showExplanationTwo && 
    <>
<MathComponent display={true} tex={bb} />
<Box sx={{borderRadius:10,backgroundColor:'#bdbdbd',display:'flex',flexGrow:1,width:200,position:'relative',left:600,top:-25}}><Typography style={{fontSize:14,color:'#000000',fontFamily:'OpenSansRegular',marginTop:2}}>&nbsp;&nbsp;Hide explanation</Typography><ExpandLessTwoToneIcon onClick={() => setShowExplanationTwo(false)}/></Box>

</>
}

</Box>}


{(currStep <=3 && showFeedbackBtn) && (question.Step3.length !== 0) &&
<Box sx={{marginLeft:5,marginTop:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Step 3:</Typography>
<MathComponent display={true} tex={question.Step3} />
</Box>
}
    </>
);



}