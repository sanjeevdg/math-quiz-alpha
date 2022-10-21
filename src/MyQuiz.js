import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import FunctionsIcon from '@mui/icons-material/Functions';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import ButtonGroup from '@mui/material/ButtonGroup';
import LinearProgress from '@mui/material/LinearProgress';

import QuestionBody from './components/QuestionBody';
import Header from './components/Header';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import StepFive from './components/StepFive';
import StepSix from './components/StepSix';

import axios from 'axios';

import { MathComponent } from 'mathjax-react';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '85%',
  left: '85%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MyQuiz() {


const [isLoaded, setIsLoaded] = useState(false);

const [showStep1, setShowStep1] = useState(false);
const [showStep2, setShowStep2] = useState(false);
const [showStep3, setShowStep3] = useState(false);
const [showStep4, setShowStep4] = useState(false);
const [showStep5, setShowStep5] = useState(false);
const [showStep6, setShowStep6] = useState(false);


const [currStep, setCurrStep] = useState(0);
const [currQuestion, setCurrQuestion] = useState(0);
const [questionList, setQuestionList] = useState([]);

const [progress,setProgress] = useState(1);
const [selectedIndex,setSelectedIndex] = useState('1');
const [currNumSteps,setCurrNumSteps] = useState(-1);

const [showStepBtn, setShowStepBtn] = useState(true);
const [showFeedbackBtn,setShowFeedbackBtn] = useState(false);

const [sbtop, setSbtop] = useState(400); 
const [sbleft, setSbleft] = useState(190);

const [nbleft, setNbleft] = useState(15);
const [nbtop, setNbtop] = useState(15);


const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

useEffect(() => {

async function getQuestionList() {

let myresp = await axios.get('https://cgfk9jngd6.execute-api.ap-northeast-1.amazonaws.com/Staging/abc');
        setQuestionList(myresp.data);
        setIsLoaded(true);
   
if (myresp.data[currQuestion].Step5.length != 0)
setCurrNumSteps(5);
if (myresp.data[currQuestion].Step5.length == 0)
setCurrNumSteps(4);
if (myresp.data[currQuestion].Step4.length ==0)
setCurrNumSteps(3);
if (myresp.data[currQuestion].Step3.length ==0)
setCurrNumSteps(2);
if (myresp.data[currQuestion].Step2.length == 0)
setCurrNumSteps(1);
if (myresp.data[currQuestion].Step1.length == 0)
setCurrNumSteps(1);



}

getQuestionList();




}, []);

useEffect(() => {

setCurrQuestion(0);

},[]);

useEffect(() => {
    if (isLoaded) {

if (questionList[currQuestion].Step5.length != 0)
setCurrNumSteps(5);
if (questionList[currQuestion].Step5.length == 0)
setCurrNumSteps(4);
if (questionList[currQuestion].Step4.length ==0)
setCurrNumSteps(3);
if (questionList[currQuestion].Step3.length ==0)
setCurrNumSteps(2);
if (questionList[currQuestion].Step2.length == 0)
setCurrNumSteps(1);
if (questionList[currQuestion].Step1.length == 0)
setCurrNumSteps(1);


}


},[currQuestion]);


useEffect(() => {

        if (currStep===0) setNbleft(190);
        if (currStep===1) setNbleft(190);
        if (currStep===2) setNbleft(190);
        if (currStep===3) setNbleft(190);
        if (currStep===4) setNbleft(190);
        if (currStep===5) setNbleft(190);



        if (currStep===4) setNbtop(1280);
        if (currStep===5) setNbtop(1280);

        if (currStep===0) setSbleft(190);
        if (currStep===1) setSbleft(190);
        if (currStep===2) setSbleft(190);
        if (currStep===3) setSbleft(190);


        if (currStep===0) setSbtop(400);
        if (currStep===1) setSbtop(900);
        if (currStep===2) setSbtop(1100);
        if (currStep===3) setSbtop(1100);




}, [currStep]);



const chooseStep = (currStep) => {



if (currStep===1)
setShowStep1(true);

if (currStep===2)
setShowStep2(true);

if (currStep===3)
setShowStep3(true);

if (currStep===4)
setShowStep4(true);

if (currStep===5)
setShowStep5(true);

if (currStep===6)
setShowStep6(true);


}
//https://cgfk9jngd6.execute-api.ap-northeast-1.amazonaws.com/Staging/secondlambdafunctionresoruce/
// https://cgfk9jngd6.execute-api.ap-northeast-1.amazonaws.com/Staging/abc
//axios.get('https://cgfk9jngd6.execute-api.ap-northeast-1.amazonaws.com/Staging/abc'
//https://cgfk9jngd6.execute-api.ap-northeast-1.amazonaws.com/Staging/fourth




const MyButton = styled(Button)({
    backgroundColor:'white',
    color:'#407392',
  "&:hover": {
    color: "white",
    backgroundColor: '#407392'
  }
});

  React.useEffect(() => {
      
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 102) {
                 //   setSelectedIndex((parseInt(selectedIndex)+1).toString());
                    return 0;                  
                }
  //console.log('progress=='+oldProgress);
                return oldProgress+1;
            });
  
            // if (selectedIndex=='10')
             // setSelectedIndex('1');
        }, 200);
  
        return () => {
            clearInterval(timer);
        };
    }, [selectedIndex]);

const changeSelectedIndex = (event: React.MouseEvent<HTMLElement>, text: string) => {

setSelectedIndex(text);

}


  return (
    <Box sx={{ backgroundColor:'#f6f6f6',width: '80%',margin:'auto',padding:1,height:1400,alignSelf:'center', border:0,borderColor:'#29476a',alignItems:'center',justifyContent:'center' }}>

   {/*JSON.stringify(questionList)*/}
<Header />

<Divider/>
<Paper
      style={{margin:'0 auto',marginTop:10,marginBottom:10}}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignSelf:'center',
        alignItems:'center',
        flexWrap: 'wrap',        
        width:'80%',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}      
    >
<ButtonGroup
      sx={{border:3,borderColor:'#407392',borderRadius:2}}
      aria-label="text alignment"
    >
<MyButton value="1"

       sx={{width:70,height:35,backgroundColor:currQuestion>=0?'#407392': 'white',color:currQuestion>=0?'white': '#407392'}} 
       >   1
      </MyButton>
<MyButton onClick={(e) => changeSelectedIndex(e,'2')} value="2"
       sx={{width:70,height:35,backgroundColor:currQuestion>=1?'#407392': 'white',color:currQuestion>=1?'white': '#407392'}} 
       >   2
      </MyButton>



<MyButton onClick={(e) => changeSelectedIndex(e,'3')} value="3"
       sx={{width:70,height:35,backgroundColor:currQuestion>=2?'#407392': 'white',color:currQuestion>=2?'white': '#407392'}} 
       >   3
      </MyButton>

<MyButton onClick={(e) => changeSelectedIndex(e,'4')} value="4"
       sx={{width:70,height:35,backgroundColor:currQuestion>=3?'#407392': 'white',color:currQuestion>=3?'white': '#407392'}} 
       >   4
      </MyButton>

<MyButton onClick={(e) => changeSelectedIndex(e,'5')} value="5"
       sx={{width:70,height:35,backgroundColor:currQuestion>=4?'#407392': 'white',color:currQuestion>=4?'white': '#407392'}} 
       >   5
      </MyButton>

<MyButton onClick={(e) => changeSelectedIndex(e,'6')} value="6"
       sx={{width:70,height:35,backgroundColor:currQuestion>=5?'#407392': 'white',color:currQuestion>=5?'white': '#407392'}} 
       >   6
      </MyButton>

<MyButton onClick={(e) => changeSelectedIndex(e,'7')} value="7"
       sx={{width:70,height:35,backgroundColor:currQuestion>=6?'#407392': 'white',color:currQuestion>=6?'white': '#407392'}} 
       >   7
      </MyButton>
      
<MyButton onClick={(e) => changeSelectedIndex(e,'8')} value="8"
       sx={{width:70,height:35,backgroundColor:currQuestion>=7?'#407392': 'white',color:currQuestion>=7?'white': '#407392'}} 
       >   8
      </MyButton>

<MyButton onClick={(e) => changeSelectedIndex(e,'9')} value="9"
       sx={{width:70,height:35,backgroundColor:currQuestion>=8?'#407392': 'white',color:currQuestion>=8?'white': '#407392'}} 
       >   9
      </MyButton>
      
<MyButton onClick={(e) => changeSelectedIndex(e,'10')} value="10"
       sx={{width:70,height:35,backgroundColor:currQuestion>=9?'#407392': 'white',color:currQuestion>=9?'white': '#407392'}} 
       >   10
      </MyButton>

    </ButtonGroup>
</Paper>

<Divider/>
<Box>
{isLoaded && <QuestionBody question={questionList[currQuestion]} currQuestion={currQuestion} currStep={currStep}/>}
</Box>



<Box sx={{ width: '100%' }}>
      <LinearProgress 
      variant="determinate" 
      value={progress} 
      />
    </Box>




<Paper  sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignSelf:'flex-start',
        alignItems:'flex-start',
        flexWrap: 'wrap',        
        width:'100%',
        height:1000,
        backgroundColor:'#ffffff',
        p: 0.5,
        m: 0}} style={{margin:'0 auto'}}>

<Box>

{(showStep1) && 
<Box>
    <StepOne chooseStep={chooseStep} question={questionList[currQuestion]} currQuestion={currQuestion} currStep={currStep}/>
</Box>
}


{(showStep2) &&
    <Box>
 <StepTwo chooseStep={chooseStep} question={questionList[currQuestion]} currStep={currStep} currQuestion={currQuestion}/>
</Box>
}

{(showStep3) && 
<Box>
<StepThree chooseStep={chooseStep} question={questionList[currQuestion]} currStep={currStep} currQuestion={currQuestion}/>
</Box>
}

{(showStep4) && 
<Box>
<StepFour chooseStep={chooseStep} question={questionList[currQuestion]} currStep={currStep} currQuestion={currQuestion}/>
</Box>
}

{(showStep5) && 
    <Box>
<StepFive chooseStep={chooseStep} question={questionList[currQuestion]} currStep={currStep} currQuestion={currQuestion}/>
</Box>
}

{(showStep6) && 
<Box>
<StepSix chooseStep={chooseStep} question={questionList[currQuestion]} currStep={currStep} currQuestion={currQuestion}/>
</Box>
}

</Box>
{/* ((currStep===0 && showStep1) || (currStep===1 && showStep2) || (currStep===2 && showStep3)) */}

{showFeedbackBtn && !showStepBtn && 

<Box sx={{ width: '60%',marginTop:13,marginLeft:35 }}>



<Button 
    onClick={() => {
        setShowFeedbackBtn(false);
        setShowStepBtn(true);
        if (currStep===0)setShowStep1(true);
        if (currStep===1)setShowStep2(true);
        if (currStep===2)setShowStep3(true);
        if (currStep===3)setShowStep3(true);
        if (currStep===4)setShowStep3(true);
        if (currStep===5)setShowStep3(true);
    }}
style={{
    border:0,width:130,height:42,
    borderRadius:18,backgroundColor:'#407392',
    marginLeft:30,color:'white',fontSize:12,
    fontFamily:'OpenSansBold'}}>
    Easy
    </Button>

<Button 
    onClick={() => {setShowFeedbackBtn(false);
        setShowStepBtn(true);
        if (currStep===0)setShowStep1(true);
        if (currStep===1)setShowStep2(true);
        if (currStep===2)setShowStep3(true);
        if (currStep===3)setShowStep3(true);
        if (currStep===4)setShowStep3(true);
        if (currStep===5)setShowStep3(true);
    }}
style={{
    border:0,width:130,height:42,
    borderRadius:18,backgroundColor:'#407392',
    marginLeft:30,color:'white',fontSize:12,
    fontFamily:'OpenSansBold'}}>
    Medium
    </Button>

<Button 
    onClick={() => {
        setShowFeedbackBtn(false);
        setShowStepBtn(true);
        if (currStep===0)setShowStep1(true);
        if (currStep===1)setShowStep2(true);
        if (currStep===2)setShowStep3(true);
        if (currStep===3)setShowStep3(true);
        if (currStep===4)setShowStep3(true);
        if (currStep===5)setShowStep3(true);
    }}
style={{
    border:0,width:130,height:42,
    borderRadius:18,backgroundColor:'#407392',
    marginLeft:30,color:'white',fontSize:12,
    fontFamily:'OpenSansBold'}}>
    Hard
    </Button>
    <img src={require('./assets/images/feedback.png')}
      style={{width:45, height:45,marginLeft:30,marginBottom:-19}}
       onClick={() => handleOpen()}
      />
<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Feedback
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button style={{alignSelf:'center',color:'white',fontSize:18,fontFamily:'OpenSansBold',textTransform:'none',backgroundColor:'#407392'}}>Submit</Button>
        </Box>
      </Modal>
</Box>

}

{/*{"showStep1="+showStep1}
{"showStep2="+showStep2}
{"showStep3="+showStep3}
{"showStepBtn" + showStepBtn}
{"showFeedbackBtn"+showFeedbackBtn} */}
{/* (!(currStep===0 && showStep1) || !(currStep===1 && showStep1) || !(currStep===2 && showStep2) || !(currStep===3 && showStep3) */}

{/* setShowFeedbackBtn(true);setShowStepBtn(false); if(currStep===0)setShowStep1(true); if(currStep===1)setShowStep2(true);if(currStep===2)setShowStep3(true);if(currStep===3)setShowStep4(true);if(currStep===4)setShowStep5(true);if(currStep===5)setShowStep6(true);setCurrStep(currStep+1);*/}


{console.log('currNumSteps:::'+ currNumSteps)}

{/*


    top:(currStep==='1') && 750,
    top:(currStep==='2') && 1000,
    top:(currStep==='3') && 1250,
    top:(currStep==='4') && 1550,
(currNumSteps !== 1 && currStep!==1) 
*/}


{showStepBtn && !showFeedbackBtn && 
 (currStep >= currNumSteps) &&
!(currStep===0 && currNumSteps===1) &&
<Box style={{position:'absolute',left:nbleft,top:nbtop}}>
<Button 
    onClick={()=>{setCurrQuestion(currQuestion+1);
        setCurrStep(0);setShowStep1(false);
        setShowStep2(false);setShowStep3(false);
        setShowStep4(false);setShowStep5(false);
        setShowStep6(false)}}
style={{ 
    border:0,width:130,height:36,
    borderRadius:18,backgroundColor:'#407392',
    textTransform:'unset',
    color:'white',fontSize:12,
    fontFamily:'OpenSansSemiBold'}}>
   Next Question
    </Button></Box>
}

{/* (currStep !== 4 ) &&   */}

{showStepBtn && !showFeedbackBtn && 
  (currStep+1 <= currNumSteps) &&
<Box style={{position:'absolute',top:sbtop,left:sbleft}}>
<Button 
    onClick={()=>{
        setShowFeedbackBtn(true);
        setShowStepBtn(false); 
        
        setCurrStep(currStep+1);

        if(currStep===0)setShowStep1(true); 
        if(currStep===1)setShowStep2(true);
        if(currStep===2)setShowStep3(true);
        if(currStep===3)setShowStep4(true);
        if(currStep===4)setShowStep5(true);
        if(currStep===5)setShowStep6(true);


    }}
style={{ 
    border:0,width:130,height:36,
    borderRadius:18,backgroundColor:'#407392',
    textTransform:'unset',
    color:'white',fontSize:12,
    fontFamily:'OpenSansSemiBold'}}>
   Check Step {currStep+1}/{currNumSteps}
    </Button></Box>
}

<Typography>

</Typography>

</Paper>


    </Box>
  );
}
