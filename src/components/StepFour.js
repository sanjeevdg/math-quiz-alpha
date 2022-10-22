import React, {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import { MathComponent } from 'mathjax-react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ExpandLessTwoToneIcon from '@mui/icons-material/ExpandLessTwoTone';
import ExpandCircleDownTwoToneIcon from '@mui/icons-material/ExpandCircleDownTwoTone';




export default function StepFour({question,currStep,currQuestion,showFeedbackBtn,showStepBtn}) {


const [showExplanationThree, setShowExplanationThree] = useState(false);



let restr = question.Result3;
const regex = new RegExp('/\\frac/ig','g');
restr = restr.replaceAll(regex, '');

return (
<>
<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Result 3:</Typography>
<MathComponent display={false} tex={'\\displaylines {'+restr+'}'} />
</Box>

{ (question.Explanation3.length !== 0) &&
<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Explanation 3:</Typography>
{!showExplanationThree && <Box sx={{display:'flex',flexGrow:1,width:300,position:'relative',left:200,top:-25}}><Typography style={{fontSize:14,color:'#000000',fontFamily:'OpenSansRegular',marginTop:2}}>Show explanation&nbsp;</Typography><ExpandCircleDownTwoToneIcon onClick={() => setShowExplanationThree(true)}/></Box>}


{showExplanationThree && 
    <>
<MathComponent display={false} tex={'\\displaylines {'+question.Explanation3+'}'} />
<Box sx={{borderRadius:10,backgroundColor:'#bdbdbd',display:'flex',flexGrow:1,width:200,position:'relative',left:600,top:-25}}><Typography style={{fontSize:14,color:'#000000',fontFamily:'OpenSansRegular',marginTop:2}}>&nbsp;&nbsp;Hide explanation</Typography><ExpandLessTwoToneIcon onClick={() => setShowExplanationThree(false)}/></Box>
</> }
</Box>
}

{ (currStep <= 4 && showFeedbackBtn) && (question.Step4.length !== 0) &&
<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Step 4:</Typography>
<MathComponent display={false} tex={question.Step4} />
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