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

import Fab from '@mui/material/Fab';

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

const [progress,setProgress] = useState(0);
const [selectedIndex,setSelectedIndex] = useState('1');
const [currNumSteps,setCurrNumSteps] = useState(-1);

const [showStepBtn, setShowStepBtn] = useState(true);
const [showFeedbackBtn,setShowFeedbackBtn] = useState(false);

const [open, setOpen] = React.useState(false);
const [additionalTimerFlag, setAdditionalTimerFlag] = useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

useEffect(() => {

async function getQuestionList() {

let myresp = await axios.get('https://cgfk9jngd6.execute-api.ap-northeast-1.amazonaws.com/Staging/abc');
        
        setQuestionList(myresp.data);
        setIsLoaded(true);
        setCurrQuestion(0);

if (myresp.data[currQuestion].Step1.length !== 0)
        setCurrNumSteps(1);
if (myresp.data[currQuestion].Step2.length !== 0)
        setCurrNumSteps(2);
if (myresp.data[currQuestion].Step3.length !==0)
        setCurrNumSteps(3);
if (myresp.data[currQuestion].Step4.length !==0)
        setCurrNumSteps(4);
if (myresp.data[currQuestion].Step5.length !== 0)
        setCurrNumSteps(5);

}
    getQuestionList();

}, []);

useEffect(() => {
    if (isLoaded) {

if (questionList[currQuestion].Step1.length !== 0)
        setCurrNumSteps(1);
if (questionList[currQuestion].Step2.length !== 0)
        setCurrNumSteps(2);
if (questionList[currQuestion].Step3.length !==0)
        setCurrNumSteps(3);
if (questionList[currQuestion].Step4.length !==0)
        setCurrNumSteps(4);
if (questionList[currQuestion].Step5.length !== 0)
        setCurrNumSteps(5);
}

},[currQuestion]);


const MyButton = styled(Button)({
    backgroundColor:'white',
    color:'#407392',
});

  useEffect(() => {
      
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 102) {
        if (!(currStep>=currNumSteps) && additionalTimerFlag){
              setCurrStep(currStep+1);
                setAdditionalTimerFlag(false);
        }
      
        if (currStep === currNumSteps)
        setShowStepBtn(true);         
        else {
            setShowFeedbackBtn(true);
            setShowStepBtn(false); 
        }
                    
        
        if(currStep===0)setShowStep1(true); 
        if(currStep===1)setShowStep2(true);
        if(currStep===2)setShowStep3(true);
        if(currStep===3)setShowStep4(true);
        if(currStep===4)setShowStep5(true);
        if(currStep===5)setShowStep6(true);
        
        setProgress(0);

                    return 0;                  
                }
                return oldProgress+1;
            });
          }, 200);
  
        return () => {
            clearInterval(timer);
        };
    }, [currStep]);


  return (
    <Box sx={{ backgroundColor:'#f6f6f6',width: '80%',margin:'auto',padding:1,height:850,alignSelf:'center', border:0,borderColor:'#29476a',alignItems:'center',justifyContent:'center' }}>

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
<MyButton value="2"
       sx={{width:70,height:35,backgroundColor:currQuestion>=1?'#407392': 'white',color:currQuestion>=1?'white': '#407392'}} 
       >   2
      </MyButton>



<MyButton value="3"
       sx={{width:70,height:35,backgroundColor:currQuestion>=2?'#407392': 'white',color:currQuestion>=2?'white': '#407392'}} 
       >   3
      </MyButton>

<MyButton value="4"
       sx={{width:70,height:35,backgroundColor:currQuestion>=3?'#407392': 'white',color:currQuestion>=3?'white': '#407392'}} 
       >   4
      </MyButton>

<MyButton value="5"
       sx={{width:70,height:35,backgroundColor:currQuestion>=4?'#407392': 'white',color:currQuestion>=4?'white': '#407392'}} 
       >   5
      </MyButton>

<MyButton value="6"
       sx={{width:70,height:35,backgroundColor:currQuestion>=5?'#407392': 'white',color:currQuestion>=5?'white': '#407392'}} 
       >   6
      </MyButton>

<MyButton value="7"
       sx={{width:70,height:35,backgroundColor:currQuestion>=6?'#407392': 'white',color:currQuestion>=6?'white': '#407392'}} 
       >   7
      </MyButton>
      
<MyButton value="8"
       sx={{width:70,height:35,backgroundColor:currQuestion>=7?'#407392': 'white',color:currQuestion>=7?'white': '#407392'}} 
       >   8
      </MyButton>

<MyButton value="9"
       sx={{width:70,height:35,backgroundColor:currQuestion>=8?'#407392': 'white',color:currQuestion>=8?'white': '#407392'}} 
       >   9
      </MyButton>
      
<MyButton value="10"
       sx={{width:70,height:35,backgroundColor:currQuestion>=9?'#407392': 'white',color:currQuestion>=9?'white': '#407392'}} 
       >   10
      </MyButton>

    </ButtonGroup>
</Paper>

<Divider/>
<Box>
{isLoaded && <QuestionBody question={questionList[currQuestion]} currQuestion={currQuestion} currStep={currStep}/>}
</Box>

{(showStepBtn && !showFeedbackBtn) &&

<Box sx={{ width: '100%' }}>
      <LinearProgress 
      variant="determinate" 
      value={progress} 
      />
    </Box>

}


<Paper  sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignSelf:'flex-start',
        alignItems:'flex-start',
        flexWrap: 'wrap',        
        paddingBottom:10,
        width:'100%',
        height:400,
        overflow: 'hidden',
        overflowY: 'scroll',
        overflowX: 'scroll',
        backgroundColor:'#ffffff',
        p: 0.5,
        m: 0}} style={{margin:'0 auto'}}>

<Box>

{(showStep1) && 
<Box>
    <StepOne question={questionList[currQuestion]} currQuestion={currQuestion} currStep={currStep}/>
</Box>
}


{(showStep2) &&
    <Box>
 <StepTwo showFeedbackBtn={showFeedbackBtn} showStepBtn={showStepBtn} question={questionList[currQuestion]} currStep={currStep} currQuestion={currQuestion}/>
</Box>
}

{(showStep3) && 
<Box>
<StepThree showFeedbackBtn={showFeedbackBtn} showStepBtn={showStepBtn} question={questionList[currQuestion]} currStep={currStep} currQuestion={currQuestion}/>
</Box>
}

{(showStep4) && 
<Box>
<StepFour showFeedbackBtn={showFeedbackBtn} showStepBtn={showStepBtn} question={questionList[currQuestion]} currStep={currStep} currQuestion={currQuestion}/>
</Box>
}

{(showStep5) && 
    <Box>
<StepFive showFeedbackBtn={showFeedbackBtn} showStepBtn={showStepBtn} question={questionList[currQuestion]} currStep={currStep} currQuestion={currQuestion}/>
</Box>
}

{(showStep6) && 
<Box>
<StepSix showFeedbackBtn={showFeedbackBtn} question={questionList[currQuestion]} currStep={currStep} currQuestion={currQuestion}/>
</Box>
}

</Box>

</Paper>

<Box style={{display:'flex',alignItems:'center', 
justifyContent:'center', alignSelf:'center',
padding:5,border:1, borderColor:'#407392',
borderRadius:18,height:35, position:'relative',
top:3,marginTop:10}}>

{showStepBtn && !showFeedbackBtn && 
 (currStep === currNumSteps) &&
!(currStep===0 && currNumSteps===1) &&
<Fab 
    onClick={()=>{setCurrQuestion(currQuestion+1);

        setCurrStep(0);setShowStep1(false);
        setShowStep2(false);setShowStep3(false);
        setShowStep4(false);setShowStep5(false);
        setShowStep6(false)}}
style={{ 
    border:0,width:130,height:42,
    borderRadius:18,backgroundColor:'#407392',
    textTransform:'unset',
    color:'white',fontSize:12,
    fontFamily:'OpenSansSemiBold'}}>
   Next Question
    </Fab>
}


{showStepBtn && !showFeedbackBtn && 
    !(currStep === currNumSteps) &&
  (currStep+1 <= currNumSteps) &&

<Fab 
    onClick={()=>{

        setCurrStep(currStep+1);
           setAdditionalTimerFlag(true); 
        if (currStep === currNumSteps)
        setShowStepBtn(true);         
        else {
            setShowFeedbackBtn(true);
            setShowStepBtn(false); 
        }
        
        
        if(currStep===0)setShowStep1(true); 
        if(currStep===1)setShowStep2(true);
        if(currStep===2)setShowStep3(true);
        if(currStep===3)setShowStep4(true);
        if(currStep===4)setShowStep5(true);
        if(currStep===5)setShowStep6(true);

                setProgress(0);


    }}
style={{ 
    border:0,width:130,height:42,
    borderRadius:18,backgroundColor:'#407392',
    textTransform:'unset',
    color:'white',fontSize:12,
    fontFamily:'OpenSansSemiBold'}}>
   Check Step {currStep+1}/{currNumSteps}
    </Fab>

}
</Box>








{showFeedbackBtn && !showStepBtn && 

<Box sx={{backgroundColor:'white',
border:1, borderColor:'#407392',borderRadius:22,
padding:2,width: '60%',marginTop:-4,marginLeft:25}}>



<Fab 
    onClick={() => {
        setShowFeedbackBtn(false);
        setShowStepBtn(true);
        if (currStep===0)setShowStep1(true);            
        if (currStep===1)setShowStep2(true);
        if (currStep===2)setShowStep3(true);
        if (currStep===3)setShowStep4(true);
        if (currStep===4)setShowStep5(true);
        if (currStep===5)setShowStep6(true);
        
    }}
style={{
    border:0,width:130,height:42,
    borderRadius:18,backgroundColor:'#407392',
    marginLeft:30,color:'white',fontSize:12,
    fontFamily:'OpenSansBold'}}>
    Easy
    </Fab>

<Fab 
    onClick={() => {setShowFeedbackBtn(false);
        setShowStepBtn(true);
        
        if (currStep===0)setShowStep1(true);            
        if (currStep===1)setShowStep2(true);
        if (currStep===2)setShowStep3(true);
        if (currStep===3)setShowStep4(true);
        if (currStep===4)setShowStep5(true);
        if (currStep===5)setShowStep6(true);
    }}
style={{
    border:0,width:130,height:42,    
    borderRadius:18,backgroundColor:'#407392',
    marginLeft:30,color:'white',fontSize:12,
    fontFamily:'OpenSansBold'}}>
    Medium
    </Fab>

<Fab 
    onClick={() => {
        setShowFeedbackBtn(false);
        setShowStepBtn(true);
        if (currStep===0)setShowStep1(true);            
        if (currStep===1)setShowStep2(true);
        if (currStep===2)setShowStep3(true);
        if (currStep===3)setShowStep4(true);
        if (currStep===4)setShowStep5(true);
        if (currStep===5)setShowStep6(true);
        
    }}
style={{
    border:0,width:130,height:42,
    borderRadius:18,backgroundColor:'#407392',
    marginLeft:30,color:'white',fontSize:12,
    fontFamily:'OpenSansBold'}}>
    Hard
    </Fab>
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





    </Box>
  );
}
