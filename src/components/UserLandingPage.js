import React, {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// import {VictoryPie,VictoryLabel} from 'victory';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Paper from '@mui/material/Paper';

import LinearProgress from '@mui/material/LinearProgress';
import Link from '@mui/material/Link';
import Header from './Header';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height:250,
  bgcolor: 'background.paper',
  border: '1px solid #407392',
  borderRadius:8,
  boxShadow: 24,
  p: 4,
};

export default function UserLandingPage() {


const [premiumModalOpen, setPremiumModalOpen] = useState(false);


const handlePremiumModalOpen = () => setPremiumModalOpen(true);

const handlePremiumModalClose = () => setPremiumModalOpen(false);

/*
<Box sx={{width:60,height:75,width:350,
position:'relative',marginLeft:8,marginTop:2}}>
 <ArrowBackIcon sx={{fontSize:40}}/>
 <Typography sx={{fontSize:14,
  fontFamily:'OpenSansSemiBold',
  color:'#387e9c'}}>REVIEW</Typography>
</Box>
<Box sx={{position:'relative',left:245,marginTop:7}}>
<Typography sx={{fontSize:14,
  fontFamily:'OpenSansSemiBold',
  color:'#387e9c'}}>5%F</Typography>
</Box>

*/


	

return (
<Box sx={{display:'flex',flexDirection:'column',
backgroundColor:'#f6f6f6',width: '80%',
margin:'auto',marginTop:0,padding:1,height:850,
alignSelf:'center', border:0,borderColor:'#29476a',
alignItems:'center',justifyContent:'center' }}>

        <Header />

        <Divider/>


<Box sx={{marginTop:4,display:'flex',
alignItems:'center',alignSelf:'center',
justifyContent:'center',marginTop:3,width:'90%',
height:90}}>

 <Box sx={{marginLeft:-6,marginTop:-2,width:350,height:70,
display:'flex',alignItems:'center',justifyContent:'center',
  backgroundColor:'#14327d'}}>
<Typography sx={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:20,color:'white',
fontFamily:'OpenSansRegular'}}>250 cards completed
&nbsp;<CheckCircleOutlineIcon/>
</Typography>
 </Box>



</Box>



<Paper
      style={{margin:'0 auto',marginBottom:10}}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignSelf:'center',
        alignItems:'center',
        flexWrap: 'wrap',        
        width:'100%',
        height:180,
        backgroundColor:'#eaf1f4',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}      
    >



<Box sx={{display:'flex',flexDirection:'row'}}>


<Box sx={{justifyContent:'center',marginLeft:10,marginRight:10,
width:'20',height:35,backgroundColor:'#243b67'}}>
&emsp;&emsp;
<Typography sx={{color:'black',marginTop:-5.5}}>&nbsp; 40</Typography>
<Typography sx={{fontSize:14,fontFamily:'OpenSansSemiBold',color:'black',marginTop:4}}>&nbsp;&nbsp;A</Typography>
</Box>

<Box sx={{marginLeft:7,marginRight:7,width:'20',
height:35,backgroundColor:'#14327d'}}>
&emsp;&emsp;
<Typography sx={{color:'black',marginTop:-5.5}}>&nbsp; 40</Typography>
<Typography sx={{fontSize:14,fontFamily:'OpenSansSemiBold',color:'black',marginTop:4}}>&nbsp;&nbsp;B</Typography>
</Box>

<Box sx={{marginLeft:7,marginRight:7,width:'20',
height:35,backgroundColor:'#2b7595'}}>
&emsp;&emsp;
<Typography sx={{color:'black',marginTop:-5.5}}>&nbsp; 40</Typography>
<Typography sx={{fontSize:14,fontFamily:'OpenSansSemiBold',color:'black',marginTop:4}}>&nbsp;&nbsp;C</Typography>
</Box>

<Box sx={{marginLeft:7,marginRight:7,width:'20',
height:35,backgroundColor:'#1f566d'}}>
&emsp;&emsp;
<Typography sx={{color:'black',marginTop:-5.5}}>&nbsp; 40</Typography>
<Typography sx={{fontSize:14,fontFamily:'OpenSansSemiBold',color:'black',marginTop:4}}>&nbsp;&nbsp;D</Typography>
</Box>

<Box sx={{marginLeft:7,marginRight:7,width:'20',
height:35,backgroundColor:'#243b67'}}>
&emsp;&emsp;
<Typography sx={{color:'black',marginTop:-5.5}}>&nbsp; 40</Typography>
<Typography sx={{fontSize:14,fontFamily:'OpenSansSemiBold',color:'black',marginTop:4}}>&nbsp;&nbsp;E</Typography>
</Box>

<Box sx={{marginLeft:7,marginRight:7,width:'20',
height:35,backgroundColor:'#243b67'}}>
&emsp;&emsp;
<Typography sx={{color:'black',marginTop:-5.5}}>&nbsp; 40</Typography>
<Typography sx={{fontSize:14,fontFamily:'OpenSansSemiBold',color:'black',marginTop:4}}>&nbsp;&nbsp;F</Typography>
</Box>

</Box>



</Paper>

<Box sx={{display:'flex',alignSelf:'center',alignItems:'center',
justifyContent:'center'}}>
<Button sx={{backgroundColor:'#407392',
width:120,height:30, borderRadius:1}}>
<Typography component="div" sx={{fontSize:14,color:'white'}}>
Review
</Typography>
</Button>
</Box>


<Box sx={{display:'flex',alignItems:'flex-start',alignSelf:'flex-start',justifyContent:'left'}}>
<Typography component="div" align="left" sx={{marginLeft:5,marginBottom:3,
  fontSize:15,fontFamily:'OpenSansSemiBold'}}>
Chapterwise Review</Typography>
</Box>


<Box sx={{display:'flex',flexDirection:'row',width:'95%',
alignItems:'center',alignSelf:'center',justifyContent:'center',height:90}}>
<Box>
<Link sx={{width:'100%'}} href="/chapter/bionomial_theorem">
<img src={require('../assets/images/binomial-theorem.png')}
style={{width:90,height:90}}
/></Link>
</Box>

<Box sx={{width:'80%',marginLeft:2}}>
<Link sx={{width:'100%'}} href="/chapter/bionomial_theorem">
<Typography component="div" sx={{fontSize:13,fontFamily:'OpenSansRegular'}}>
Binomial Theorem</Typography></Link>

<Chip
        avatar={<Avatar alt="buy premium access" src={require('../assets/images/premiun-crown.png')} 
        style={{width:13,height:13}} />}
        label="Premium"
        sx={{backgroundColor:'#eaf1f4',zIndex:99, '&:hover': {
      backgroundColor: '#fff',
      color: '#2b7595',
  }, position:'relative',left:130, top:-30,width:100,height:27,marginBottom:1}}
        onClick={() => handlePremiumModalOpen()}
        variant="outlined"
      />

<Link sx={{width:'100%'}} href="/chapter/bionomial_theorem"> 
 <LinearProgress style={{marginTop:-34}} variant="determinate" value={30} />
<Typography component="div" sx={{fontSize:13,fontFamily:'OpenSansRegular'}}>
30%
</Typography>
</Link>
</Box></Box>



<Box sx={{display:'flex',flexDirection:'row',width:'95%',
alignItems:'center',alignSelf:'center',
marginTop:3,justifyContent:'center',height:90}}>
<Box>
<Link sx={{width:'100%'}} href="/chapter/sequence-n-series">
<img src={require('../assets/images/sequence-n-series.png')}
style={{width:90,height:90}}
/></Link>
</Box><Box sx={{width:'80%',marginLeft:2}}>
<Link sx={{width:'100%'}} href="/chapter/sequence-n-series">
<Typography sx={{fontSize:13,fontFamily:'OpenSansRegular'}}>
Sequence & Series
</Typography>

 <LinearProgress variant="determinate" value={20} />
<Typography sx={{fontSize:13,fontFamily:'OpenSansRegular'}}>
20%
</Typography>
</Link>
</Box>
</Box>





<Box sx={{display:'flex',alignSelf:'center',
alignItems:'center',marginTop:20,
justifyContent:'center'}}>
<Button sx={{backgroundColor:'#407392',
width:180,height:36,textTransform:'none', 
borderRadius:5,marginLeft:50}}>
<Typography sx={{fontSize:15,color:'white',
fontFamily:'OpenSansSemiBold'}}>
Choose New Chapter
</Typography>
</Button>
</Box>
<Modal
        open={premiumModalOpen}
        onClose={handlePremiumModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >


        <Box sx={style}>

<Paper sx={{backgroundColor:'white',
position:'relative',left:490,border:'none',
boxShadow:'none',
borderRadius:15,top:-50,width:40,height:40}}>
<img src={require('../assets/images/premiun-crown.png')}
  style={{width:25, height:20,marginLeft:7,marginTop:5}}
/>
</Paper>

<Box sx={{display:'flex',flexDirection:'row',
alignItems:'center'}}>



<Box sx={{display:'flex',height:248,flexDirection:'column',
alignItems:'center',justifyContent:'center',
width:'55%',backgroundColor:'#f5f5f5',border:0,
marginTop:-18,marginLeft:-4,borderTopLeftRadius:28,
borderBottomLeftRadius:28}}>

<Typography sx={{marginTop:-5,fontSize:22,fontFamily:'OpenSansSemiBold',color:'black',textTransform:'underline'}}>
BUY PREMIUM NOW
</Typography>
<br/>

<Box sx={{marginLeft:-5,marginTop:-1,marginBottom:1,display:'flex',flexDirection:'row'}}>
<CheckIcon/>&emsp;<Typography sx={{
  fontSize:12,fontFamily:'OpenSansSemiBold'
}}>204 Practice Questions</Typography>
</Box>

<Box sx={{marginLeft:1,marginBottom:1,display:'flex',flexDirection:'row'}}>
<CheckIcon/>&emsp;<Typography sx={{
  fontSize:12,fontFamily:'OpenSansSemiBold'
}}>Key Strategies and Techniques</Typography>
</Box>

<Box sx={{marginLeft:-10,display:'flex',flexDirection:'row'}}>
<CheckIcon/>&emsp;<Typography sx={{
  fontSize:12,fontFamily:'OpenSansSemiBold'
}}>Lifetime Access</Typography>
</Box>


</Box> 


<Box sx={{width:'45%',height:248}}>
<CloseIcon onClick={()=>handlePremiumModalClose()} 
sx={{fontSize:20,
  position:'relative',left:265,top:-60,


}}/>          

<Typography sx={{fontSize:23,fontFamily:'OpenSansSemiBold',
color:'#2b7595',marginTop:-7,marginLeft:5
}}>
Get Premium
</Typography>


<Paper sx={{padding:1,marginLeft:3,border:1,
  marginTop:2,display:'flex',boxShadow:'none',
  flexDirection:'row',width:250}}>
<Typography align="left" sx={{width:100,fontSize:15,fontFamily:'OpenSansSemiBold',
color:'black'}}>
Binomial Theorem
</Typography>

<Typography align="right" sx={{fontSize:20,fontFamily:'OpenSansSemiBold',
color:'black',marginTop:1,marginLeft:7}}> &#8377;&nbsp;250</Typography>
</Paper>

<Button sx={{backgroundColor:'#2b7595',color:'white',
fontFamily:'OpenSansSemiBold',fontSize:13,height:28,
width:180,textTransform:'none',borderRadius:10,'&:hover': {
      backgroundColor: '#2b7595',
      color: 'white',padding:2,
  },marginTop:3,marginLeft:8}}>
Buy Premium Access</Button>

</Box>
         </Box>
        </Box>
      </Modal>

</Box>




);






}