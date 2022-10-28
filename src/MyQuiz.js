import React,{ useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
//import Breadcrumbs from '@mui/material/Breadcrumbs';
//import FunctionsIcon from '@mui/icons-material/Functions';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';
//import Link from '@mui/material/Link';
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
//import FinalScreen from './components/FinalScreen';

import TextField from '@mui/material/TextField';
import axios from 'axios';

import { MathComponent } from 'mathjax-react';
import Modal from '@mui/material/Modal';

import { useNavigate } from "react-router-dom";

import toast, { Toaster } from 'react-hot-toast';
//import Alert from '@mui/material/Alert';
import Switch from '@mui/material/Switch';



const style = {
  position: 'absolute',
  top: '65%',
  left: '86.5%',
  transform: 'translate(-50%, -50%)',
  width: 365,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MyQuiz() {


// const bottomRef = React.createRef();


 const [quickRevisionChecked, setQuickRevisionChecked] = useState(false);

const [showQuickRevisionSteps, setShowQuickRevisionSteps] = useState(false);


  

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

const [currNumSteps,setCurrNumSteps] = useState(1);

const [showStepBtn, setShowStepBtn] = useState(true);
const [showCheckBtn, setShowCheckBtn] = useState(false);
const [showFeedbackBtn,setShowFeedbackBtn] = useState(false);

const [openFeedbackModal, setOpenFeedbackModal] = React.useState(false);
const [additionalTimerFlag, setAdditionalTimerFlag] = useState(false);

const [currQuestionCompleteFlag, setCurrQuestionCompleteFlag] = useState(false);

const [maxQuestions, setMaxQuestions] = useState(10);

let navigate = useNavigate();

  const handleOpenFeedbackModal = () => setOpenFeedbackModal(true);
  const handleCloseFeedbackModal = () => {setOpenFeedbackModal(false);}

const notify = () => toast('Your feedback has been recorded!');


const handleQuickRevisionChange = (event) => {
    
if (event.target.checked) {
    setCurrQuestion(0);
    setCurrStep(0);
    setQuickRevisionChecked(true);
    setShowStep1(false);
    setShowStep2(false);
    setShowStep3(false);
    setShowStep4(false);
    setShowStep5(false);
    setShowStep6(false);
    setShowStepBtn(false);
    setShowCheckBtn(true);
    setShowFeedbackBtn(false);
    
}
else if (!event.target.checked) {
    setCurrQuestion(0);
    setCurrStep(0);
    setShowStep1(false);
    setShowStep2(false);
    setShowStep3(false);
    setShowStep4(false);
    setShowStep5(false);
    setShowStep6(false);
    setQuickRevisionChecked(false);
    setShowCheckBtn(false);
    setShowStepBtn(true);
    setShowFeedbackBtn(false);
    window.location.reload();
}
    
  };






useEffect(() => {

async function getQuestionList() {

let myresp = await axios.get('https://cgfk9jngd6.execute-api.ap-northeast-1.amazonaws.com/Staging/abc');
        
        setQuestionList(myresp.data);
        setIsLoaded(true);
     //   setCurrQuestion(0);
        setMaxQuestions(10);
        setAdditionalTimerFlag(true);

if (myresp.data[0].Step1.length !== 0)
        setCurrNumSteps(1);
else if (myresp.data[0].Step2.length !== 0)
        setCurrNumSteps(2);
else if (myresp.data[0].Step3.length !==0)
        setCurrNumSteps(3);
else if (myresp.data[0].Step4.length !==0)
        setCurrNumSteps(4);
else if (myresp.data[0].Step5.length !== 0)
        setCurrNumSteps(5);

}
    getQuestionList();


}, []);

useEffect(() => {
    if (isLoaded) {

console.log('a'+questionList[currQuestion].Step5.length);
console.log('b'+questionList[currQuestion].Step4.length);
console.log('c'+questionList[currQuestion].Step3.length);
console.log('d'+questionList[currQuestion].Step2.length);
console.log('e'+questionList[currQuestion].Step1.length);

        setCurrNumSteps(1);
if (questionList[currQuestion].Step2.length !== 0)
        setCurrNumSteps(2);
if (questionList[currQuestion].Step3.length !==0)
        setCurrNumSteps(3);
if (questionList[currQuestion].Step4.length !==0)
        setCurrNumSteps(4);
if (questionList[currQuestion].Step5.length !== 0)
        setCurrNumSteps(5);

console.log('currnumsteps::'+currNumSteps);



}

},[currQuestion,isLoaded,currNumSteps,questionList]);


const MyButton = styled(Button)({
    backgroundColor:'white',
    color:'#407392',
});
    
  useEffect(() => {
      
      let timer = null;

      if (isLoaded && additionalTimerFlag) {
        timer = setInterval(() => {
            setProgress((oldProgress) => {

                if (oldProgress === 102) {
        if (currStep<=currNumSteps){
            
            setCurrStep(currStep+1);
            setShowFeedbackBtn(true); 
            setShowStepBtn(false);
         //   setAdditionalTimerFlag(false);
          
            if(currStep===0)setShowStep1(true); 
            if(currStep===1)setShowStep2(true);
            if(currStep===2)setShowStep3(true);
            if(currStep===3)setShowStep4(true);
            if(currStep===4)setShowStep5(true);
            if(currStep===5)setShowStep6(true);
            console.log('normal flow');
        }
        
        setProgress(0);
        setAdditionalTimerFlag(false);

console.log('currStep:'+currStep);
console.log('showStepBtn:'+showStepBtn);
console.log('showFeedbackBtn:'+showFeedbackBtn);
console.log('currQuestionCompleteFlag'+ currQuestionCompleteFlag);
console.log('additionalTimerFlag:'+additionalTimerFlag);
console.log('currnumsteps'+currNumSteps);
        

                    return 0;                  
                }
                return oldProgress+1;
            });
          }, 200);
    } else { clearInterval(timer); }
  
        return () => {
            clearInterval(timer);
        };
    }, [additionalTimerFlag,isLoaded,currNumSteps, currQuestionCompleteFlag, currStep, showFeedbackBtn, showStepBtn]);

/*

  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    bottomRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [bottomRef,currStep]);

*/



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
 {  [...Array(maxQuestions)].map((val,k) => (

    <MyButton key={k}
       sx={{width:70,height:35,backgroundColor:currQuestion>=k?'#407392': 'white',color:currQuestion>=k?'white': '#407392'}} 
       > {k+1}
      </MyButton>) )
}  

    </ButtonGroup>

<Box sx={{marginLeft:5,marginTop:-1}}>
  <Switch
      checked={quickRevisionChecked}
      onChange={handleQuickRevisionChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
<Typography sx={{marginTop:-3,fontSize:12,fontFamily:'OpenSansSemiBold',color:'black'}}>
<br/>Quick Revision
</Typography>
</Box>
</Paper>

<Divider/>
<Box>
{isLoaded && <QuestionBody question={questionList[currQuestion]} currQuestion={currQuestion} currStep={currStep}/>}
</Box>


{!quickRevisionChecked &&    
    (showStepBtn && !showFeedbackBtn) && 
    

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

{!(quickRevisionChecked) && 
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
}

{quickRevisionChecked && !showQuickRevisionSteps 
&&  
<Box sx={{position:'relative',top:5,left:5}}>

<Button 
    onClick={()=> { 
        setShowQuickRevisionSteps(true);
        setShowFeedbackBtn(true);        
        setShowCheckBtn(false);
        }}
style={{ 
    border:0,width:130,height:42,
    borderRadius:18,backgroundColor:'#407392',
    textTransform:'unset',
    color:'white',fontSize:12,
    fontFamily:'OpenSansSemiBold'}}>
   Check
    </Button>
</Box>
}

{showQuickRevisionSteps && quickRevisionChecked &&
    !showCheckBtn &&
<Box>

{!(questionList[currQuestion].Step1.length ===0) && 
<Box sx={{marginLeft:5,marginTop:5}}>
<Typography sx={{color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Step 1:</Typography>
<MathComponent display={true} tex={questionList[currQuestion].Step1} />
</Box>
}

{!(questionList[currQuestion].Step2.length ===0) && 
<Box sx={{marginLeft:5,marginTop:5}}>
<Typography  component={'span'} sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Step2:</Typography>
<MathComponent display={true} tex={questionList[currQuestion].Step2} />
</Box>
}

{!(questionList[currQuestion].Step3.length ===0) && 
<Box sx={{marginLeft:5,marginTop:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Step 3:</Typography>
<MathComponent display={true} tex={questionList[currQuestion].Step3} />
</Box>
}
{!(questionList[currQuestion].Step4.length ===0) && 
<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Step 4:</Typography>
<MathComponent display={false} tex={questionList[currQuestion].Step4} />
</Box>
}
{!(questionList[currQuestion].Step5.length ===0) && 
<Box sx={{marginTop:5,marginLeft:5}}>
<Typography  sx={{textAlign:'left',color:'#2a7595',textDecoration:'underline',fontFamily:'OpenSansSemiBold', fontSize:18}}>
Step 5:</Typography>
<MathComponent display={false} tex={questionList[currQuestion].Step5} />
</Box>
}

</Box>

}


 {/* <Box ref={bottomRef} /> */}

</Paper>
<Box style={{display:'flex',alignItems:'center', 
justifyContent:'center', alignSelf:'center',
padding:5,border:1, borderColor:'#407392',
borderRadius:18,height:35, position:'relative',
top:3,marginTop:10}}>

{showStepBtn && !showFeedbackBtn && 
 
!(currStep===0 && currNumSteps===1) && 
currQuestionCompleteFlag &&
!quickRevisionChecked &&
<Fab 
    onClick={()=>{
        
        setAdditionalTimerFlag(true);
        if (currQuestion+1 === maxQuestions) {

            setCurrStep(0);setShowStep1(false);
        setShowStep2(false);setShowStep3(false);
        setShowStep4(false);setShowStep5(false);
        setShowStep6(false);
        navigate('/lesson-completed');
        }
        else {
        setCurrQuestion(currQuestion+1);        
        setCurrQuestionCompleteFlag(false);
        setCurrStep(0);setShowStep1(false);
        setShowStep2(false);setShowStep3(false);
        setShowStep4(false);setShowStep5(false);
        setShowStep6(false);}

        setProgress(0);
        }}

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
  !quickRevisionChecked &&

<Fab 
    onClick={()=>{

     

           setAdditionalTimerFlag(false); 
        

        if(currStep===0)setShowStep1(true); 
        if(currStep===1)setShowStep2(true);
        if(currStep===2)setShowStep3(true);
        if(currStep===3)setShowStep4(true);
        if(currStep===4)setShowStep5(true);
        if(currStep===5)setShowStep6(true);
   
            setCurrStep(currStep+1);    
            setShowFeedbackBtn(true);
            setShowStepBtn(false); 
     
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

{showFeedbackBtn &&  !showStepBtn 
    && !showCheckBtn &&

<Box sx={{backgroundColor:'white',
border:1, borderColor:'#407392',borderRadius:22,
padding:2,width: '60%',marginTop:-4,marginLeft:25}}>



<Fab 
    onClick={() => {
        
        if (quickRevisionChecked && showQuickRevisionSteps){

            setCurrQuestion(currQuestion+1);
            setShowQuickRevisionSteps(false);
            setShowFeedbackBtn(false);    
            setShowCheckBtn(true);
                       

        }

        if ((currStep === currNumSteps)&& isLoaded){
         setAdditionalTimerFlag(false);   
            setCurrQuestionCompleteFlag(true);
        }
        else {setAdditionalTimerFlag(true);}

        if (!quickRevisionChecked){    

        if (currStep===0)setShowStep1(true);            
        if (currStep===1)setShowStep2(true);
        if (currStep===2)setShowStep3(true);
        if (currStep===3)setShowStep4(true);
        if (currStep===4)setShowStep5(true);
        if (currStep===5)setShowStep6(true);
        setShowFeedbackBtn(false);
        setShowStepBtn(true);

        }
         
        setProgress(0);
    }}
style={{
    border:0,width:130,height:42,
    borderRadius:18,backgroundColor:'#407392',
    marginLeft:30,color:'white',fontSize:12,
    fontFamily:'OpenSansBold'}}>
    Easy
    </Fab>

<Fab 
    onClick={() => {

        if (quickRevisionChecked && showQuickRevisionSteps){

            setCurrQuestion(currQuestion+1);
            setShowQuickRevisionSteps(false);
            setShowFeedbackBtn(false);    
            setShowCheckBtn(true);
                       

        }

        if ((currStep === currNumSteps)&& isLoaded){
         setAdditionalTimerFlag(false);   
            setCurrQuestionCompleteFlag(true);
        }
        else {setAdditionalTimerFlag(true);}
        
        if (!quickRevisionChecked){    
        if (currStep===0)setShowStep1(true);            
        if (currStep===1)setShowStep2(true);
        if (currStep===2)setShowStep3(true);
        if (currStep===3)setShowStep4(true);
        if (currStep===4)setShowStep5(true);
        if (currStep===5)setShowStep6(true);
    
        setShowFeedbackBtn(false);
        setShowStepBtn(true);     
        
        }
        setProgress(0);
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
        if (quickRevisionChecked && showQuickRevisionSteps){

            setCurrQuestion(currQuestion+1);
            setShowQuickRevisionSteps(false);
            setShowFeedbackBtn(false);    
            setShowCheckBtn(true);
                       

        }

        if ((currStep === currNumSteps)&& isLoaded){
         setAdditionalTimerFlag(false);   
            setCurrQuestionCompleteFlag(true);
        }
        else {setAdditionalTimerFlag(true);}
        
        if (!quickRevisionChecked){    
        if (currStep===0)setShowStep1(true);            
        if (currStep===1)setShowStep2(true);
        if (currStep===2)setShowStep3(true);
        if (currStep===3)setShowStep4(true);
        if (currStep===4)setShowStep5(true);
        if (currStep===5)setShowStep6(true);
        setShowFeedbackBtn(false);
        setShowStepBtn(true);
        }
        setProgress(0);
        
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
       onClick={() => handleOpenFeedbackModal()}
      />
<Modal
        open={openFeedbackModal}
        onClose={() => handleCloseFeedbackModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
      
          

<Box sx={{display:'flex', flexGrow:1,width:280,height:40}}>
<Typography sx={{marginTop:3,fontSize:18,fontFamily:'OpenSansSemiBold'}}>
            Feedback
          </Typography>
<HighlightOffTwoToneIcon onClick={()=>handleCloseFeedbackModal()} sx={{fontSize:20,marginLeft:26,marginTop:-2}}/>
          </Box>
          <Box sx={{marginTop:4}}>
                       <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={10}
          sx={{width:300,height:300}}
          defaultValue=""
        />
        </Box>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Button onClick={()=>{handleCloseFeedbackModal();notify();}} style={{width:130,height:42,borderRadius:20,alignSelf:'center',color:'white',fontSize:18,fontFamily:'OpenSansSemiBold',textTransform:'none',backgroundColor:'#407392'}}>Submit</Button>
        </Box>
        </Box>
      </Modal>

</Box>

}

<Toaster/>


    </Box>
  );
}
