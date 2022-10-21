import React, {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import { MathComponent } from 'mathjax-react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

/*


*/


export default function StepThree({question,currStep,currQuestion,chooseStep}) {


function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

let aa = question.Result2;
let bb = question.Explanation2;
//aa = replaceAll(aa,'\n','');
//bb = replaceAll(bb,'\n','');
//aa = replaceAll(aa,'\\','\/');
//aa = replaceAll(aa,'/','');

//bb = replaceAll(bb,'\\\quad','\\quad');

//aa = replaceAll(aa,'\\','\\\\/');
//aa = replaceAll(bb,'\\quad','\ quad');
//aa = replaceAll(aa,'/','');




//bb = replaceAll(bb,'\\','\\\\/');
//bb = replaceAll(bb,'\\quad','\\quad');
//bb = replaceAll(bb,'\\\because','\\because');
//bb = replaceAll(bb,'therefore','\\therefore');

//aa = replaceAll(aa,'\\begin{aligned}','\\\\\\begin{aligned}');
//aa = replaceAll(aa,'\\end{aligned}','\\\\\\end{aligned}');
//aa = replaceAll(aa,'\\end{aligned}','');

aa = replaceAll(aa,'\\text','\\text');
aa = replaceAll(aa,'\\frac','\\frac');
aa = replaceAll(aa,'\\quad','\\quad');
aa = replaceAll(aa,'\\because','\\because');
aa = replaceAll(aa,'\\bot','\\bot');

aa = '\\displaylines {'+ aa + '}';

bb = '\\displaylines {'+ bb + '}';
console.log('RESULT2',aa);
console.log('EXPLA2',bb);

//const [mycurrStep,setMyCurrStep] = useState(props.currStep);

/*
<br/>

aaa

<MathComponent display={false} tex={String.raw`\displaylines {\text{Slope of $L$ }=&-\frac{1}{\text{Slope of PQ}}\ \quad [\because \text{L $\bot$ PQ} ]=&-\frac{1}{2}`}/>
<MathComponent display={false} tex={String.raw`\\\text{Slope of $L$ }=&-\\\frac{1}{\\\text{Slope of PQ}}\\\\\ \\\quad [\\\because \\\text{L $\\\bot$ PQ} ]=&-\\\frac{1}{2}`}/>
aaa

<MathComponent display={false} tex={`\\displaylines {\\text{i.e.,}\\quad p[a+[p-1] d]=q[a+(q-1) d]\\(p-q)(T_{p+q}) =0 {\\\therefore} T_{p+q} =0\\`}/>

*/


return (
<>
<Box sx={{marginLeft:5,marginTop:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Result 2:</Typography><br/>
res23
<MathComponent display={true} tex={aa} />

</Box>


{ (question.Explanation2.length !== 0)?

<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Explanation 2:</Typography>
<MathComponent display={true} tex={bb} />
</Box>:<></>}


{(currStep===2) && (question.Step3.length !== 0) &&
<Box sx={{marginLeft:5,marginTop:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Step 3:</Typography>
<MathComponent display={true} tex={question.Step3} />
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