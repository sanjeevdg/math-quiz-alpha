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




export default function MyQuiz() {


const MyButton = styled(Button)({
    backgroundColor:'white',
    color:'#407392',
  "&:hover": {
    color: "white",
    backgroundColor: '#407392'
  }
});

const [progress,setProgress] = useState(1);
const [selectedIndex,setSelectedIndex] = useState('1');

  React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 102) {
                    setSelectedIndex((parseInt(selectedIndex)+1).toString());
                    return 0;                  
                }
  console.log('progress=='+oldProgress);
                return oldProgress+1;
            });
  
            if (selectedIndex=='10')
              setSelectedIndex('1');
        }, 200);
  
        return () => {
            clearInterval(timer);
        };
    }, [selectedIndex]);

const changeSelectedIndex = (event: React.MouseEvent<HTMLElement>, text: string) => {

setSelectedIndex(text);

}


  return (
    <Box sx={{ width: '80%',margin:'auto',padding:1,height:500,alignSelf:'center', border:3,borderColor:'#29476a',alignItems:'center',justifyContent:'center' }}>
   
<Header />

<Divider/>
<Paper
      style={{margin:'0 auto',marginTop:20}}
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
      {(selectedIndex==='1')? <MyButton onClick={(e) => changeSelectedIndex(e,'1')} value="1"
       sx={{width:70,height:35,backgroundColor:'#407392',color:'white'}} 
       >   1
      </MyButton> :       
<MyButton onClick={(e) => changeSelectedIndex(e,'1')} value="1"
       sx={{width:70,height:35,backgroundColor:'white'}} 
       >   1
      </MyButton>
       }

{(selectedIndex==='2')? <MyButton onClick={(e) => changeSelectedIndex(e,'2')} value="2"
       sx={{width:70,height:35,backgroundColor:'#407392',color:'white'}} 
       >   2
      </MyButton> :       
<MyButton onClick={(e) => changeSelectedIndex(e,'2')} value="2"
       sx={{width:70,height:35,backgroundColor:'white'}} 
       >   2
      </MyButton>
       }      




{(selectedIndex==='3')? <MyButton onClick={(e) => changeSelectedIndex(e,'3')} value="3"
       sx={{width:70,height:35,backgroundColor:'#407392',color:'white'}} 
       >   3
      </MyButton> :       
<MyButton onClick={(e) => changeSelectedIndex(e,'3')} value="3"
       sx={{width:70,height:35,backgroundColor:'white'}} 
       >   3
      </MyButton>
       }      
      


{(selectedIndex==='4')? <MyButton onClick={(e) => changeSelectedIndex(e,'4')} value="4"
       sx={{width:70,height:35,backgroundColor:'#407392',color:'white'}} 
       >   4
      </MyButton> :       
<MyButton onClick={(e) => changeSelectedIndex(e,'4')} value="4"
       sx={{width:70,height:35,backgroundColor:'white'}} 
       >   4
      </MyButton>
       }      


{(selectedIndex==='5')? <MyButton onClick={(e) => changeSelectedIndex(e,'5')} value="5"
       sx={{width:70,height:35,backgroundColor:'#407392',color:'white'}} 
       >   5
      </MyButton> :       
<MyButton onClick={(e) => changeSelectedIndex(e,'5')} value="5"
       sx={{width:70,height:35,backgroundColor:'white'}} 
       >   5
      </MyButton>
       }      



{(selectedIndex==='6')? <MyButton onClick={(e) => changeSelectedIndex(e,'6')} value="6"
       sx={{width:70,height:35,backgroundColor:'#407392',color:'white'}} 
       >   6
      </MyButton> :       
<MyButton onClick={(e) => changeSelectedIndex(e,'6')} value="6"
       sx={{width:70,height:35,backgroundColor:'white'}} 
       >   6
      </MyButton>
       }      





{(selectedIndex==='7')? <MyButton onClick={(e) => changeSelectedIndex(e,'7')} value="7"
       sx={{width:70,height:35,backgroundColor:'#407392',color:'white'}} 
       >   7
      </MyButton> :       
<MyButton onClick={(e) => changeSelectedIndex(e,'7')} value="7"
       sx={{width:70,height:35,backgroundColor:'white'}} 
       >   7
      </MyButton>
       }      
      




{(selectedIndex==='8')? <MyButton onClick={(e) => changeSelectedIndex(e,'8')} value="8"
       sx={{width:70,height:35,backgroundColor:'#407392',color:'white'}} 
       >   8
      </MyButton> :       
<MyButton onClick={(e) => changeSelectedIndex(e,'8')} value="8"
       sx={{width:70,height:35,backgroundColor:'white'}} 
       >   8
      </MyButton>
       }      


{(selectedIndex==='9')? <MyButton onClick={(e) => changeSelectedIndex(e,'9')} value="9"
       sx={{width:70,height:35,backgroundColor:'#407392',color:'white'}} 
       >   9
      </MyButton> :       
<MyButton onClick={(e) => changeSelectedIndex(e,'9')} value="9"
       sx={{width:70,height:35,backgroundColor:'white'}} 
       >   9
      </MyButton>
       }      

      


{(selectedIndex==='10')? <MyButton onClick={(e) => changeSelectedIndex(e,'10')} value="10"
       sx={{width:70,height:35,backgroundColor:'#407392',color:'white'}} 
       >   10
      </MyButton> :       
<MyButton onClick={(e) => changeSelectedIndex(e,'10')} value="10"
       sx={{width:70,height:35,backgroundColor:'white'}} 
       >   10
      </MyButton>
       }      




    </ButtonGroup>
</Paper>

<Divider/>

{(selectedIndex==='1') && <QuestionBody />}

<Box sx={{ width: '100%' }}>
      <LinearProgress 
      variant="determinate" 
      value={progress} 
      />
    </Box>



<Button 
style={{
    border:0,width:130,height:36,
    borderRadius:18,backgroundColor:'#407392',
    marginLeft:30,textTransform:'unset',
    marginTop:20,color:'white',fontSize:12,
    fontFamily:'OpenSansSemiBold'}}>
    Check Step 1/3
    </Button>


    </Box>
  );
}
