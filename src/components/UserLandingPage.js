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

export default function UserLandingPage() {


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
<Typography sx={{fontSize:14,color:'white'}}>
Review
</Typography>
</Button>
</Box>


<Box sx={{display:'flex',alignItems:'flex-start',alignSelf:'flex-start',justifyContent:'left'}}>
<Typography align="left" sx={{marginLeft:5,marginBottom:3,
  fontSize:15,fontFamily:'OpenSansSemiBold'}}>
Chapterwise Review</Typography>
</Box>

<Link sx={{width:'100%'}} href="/chapter/bionomial_theorem">
<Box sx={{display:'flex',flexDirection:'row',width:'95%',
alignItems:'center',alignSelf:'center',justifyContent:'center',height:90}}>
<Box>
<img src={require('../assets/images/binomial-theorem.png')}
style={{width:90,height:90}}
/></Box><Box sx={{width:'80%',marginLeft:2}}>
<Typography sx={{fontSize:13,fontFamily:'OpenSansRegular'}}>
Binomial Theorem
</Typography>
 <LinearProgress variant="determinate" value={30} />
<Typography sx={{fontSize:13,fontFamily:'OpenSansRegular'}}>
30%
</Typography>
</Box></Box>
</Link>

<Link sx={{width:'100%'}} href="/chapter/sequence-n-series">
<Box sx={{display:'flex',flexDirection:'row',width:'95%',
alignItems:'center',alignSelf:'center',
marginTop:3,justifyContent:'center',height:90}}>
<Box>
<img src={require('../assets/images/sequence-n-series.png')}
style={{width:90,height:90}}
/></Box><Box sx={{width:'80%',marginLeft:2}}>
<Typography sx={{fontSize:13,fontFamily:'OpenSansRegular'}}>
Sequence & Series
</Typography>
 <LinearProgress variant="determinate" value={20} />
<Typography sx={{fontSize:13,fontFamily:'OpenSansRegular'}}>
20%
</Typography>
</Box>
</Box>
</Link>




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





</Box>


);






}