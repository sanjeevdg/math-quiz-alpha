import React, {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import { MathComponent } from 'mathjax-react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ExpandLessTwoToneIcon from '@mui/icons-material/ExpandLessTwoTone';
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';


export default function StepTwo({question,currStep,currQuestion,showFeedbackBtn,showStepBtn}) {


function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

const [showExplanationOne, setShowExplanationOne] = useState(false);


let aa = question.Result1;
aa = replaceAll(aa,'\n','');
aa = replaceAll(aa,'\\,','\\\\/');

aa = replaceAll(aa,'\text','\\text');
aa = replaceAll(aa,'\\,','\/');

aa = "\\displaylines {"+ aa +"}";

return (
<>
<Box sx={{display:'flex',alignItems:'flex-start',justifyContent:'flex-start',alignSelf:'flex-start',flexDirection:'column',marginLeft:5,marginTop:5}}>
<Typography  component={'span'} sx={{color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Result 1:</Typography>
</Box>
<Box sx={{flexDirection:'column',marginLeft:5,marginTop:5}}>

<MathComponent 
display={true} 
tex={aa} 
/>


</Box>

{ (question.Explanation1.length !== 0)  && (currStep <= 2 && showFeedbackBtn) &&
<Box sx={{flexDirection:'column',marginLeft:5,marginTop:5}}>
<Typography  component={'span'} sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
    Explanation 1:</Typography>
    <Typography>
{!showExplanationOne && <Box sx={{display:'flex',flexGrow:1,width:300,position:'relative',left:200,top:-25}}><Typography style={{fontSize:14,color:'#000000',fontFamily:'OpenSansRegular',marginTop:2}}>Show explanation&nbsp;</Typography><ExpandCircleDownTwoToneIcon onClick={() => setShowExplanationOne(true)}/></Box>}
    </Typography>

{showExplanationOne && 
    <>
<MathComponent display={true} tex={'\\displaylines {'+ question.Explanation1 +'}'} />
<Box sx={{borderRadius:10,backgroundColor:'#bdbdbd',display:'flex',flexGrow:1,width:200,position:'relative',left:600,top:-25}}><Typography style={{fontSize:14,color:'#000000',fontFamily:'OpenSansRegular',marginTop:2}}>&nbsp;&nbsp;Hide explanation</Typography><ExpandLessTwoToneIcon onClick={() => setShowExplanationOne(false)}/></Box>
</>
}
</Box>
}

{ (currStep <= 2 && showFeedbackBtn) && (question.Step2.length !== 0) &&
<Box sx={{marginLeft:5,marginTop:5}}>
<Typography  component={'span'} sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Step2:</Typography>
<MathComponent display={true} tex={question.Step2} />
</Box>
}

</>
);




}