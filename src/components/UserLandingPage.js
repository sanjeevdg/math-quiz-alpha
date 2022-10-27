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

import Header from './Header';

export default function UserLandingPage() {


/*

<br/><br/><br/>
<Paper
      style={{margin:'0 auto',marginTop:10,marginBottom:10}}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignSelf:'center',
        alignItems:'center',
        flexWrap: 'wrap',        
        width:'40%',
        height:200,
        backgroundColor:'#cbdce4',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}      
    >

<Typography sx={{fontSize:30,color:'black', fontFamily:'OpenSansSemiBold'}}>
CONGRATULATIONS!
</Typography>
<Button sx={{width:180,height:40,color:'white',backgroundColor:'#2a7595',fontSize:15,fontFamily:'OpenSansSemiBold',textTransform:'none',borderRadius:10}}>Continue learning</Button>
</Paper>

*/


	

return (
<Box sx={{ backgroundColor:'#f6f6f6',width: '80%',margin:'auto',padding:1,height:850,alignSelf:'center', border:0,borderColor:'#29476a',alignItems:'center',justifyContent:'center' }}>

        <Header />

        <Divider/>


<Box sx={{marginTop:4,display:'flex',
flexDirection:'row',alignItems:'center',marginTop:3,width:'90%',height:90}}>

<Box sx={{width:60,height:75,width:350,
position:'relative',marginLeft:8,marginTop:2}}>
 <ArrowBackIcon sx={{fontSize:40}}/>
 <Typography sx={{fontSize:14,
  fontFamily:'OpenSansSemiBold',
  color:'#387e9c'}}>REVIEW</Typography>
</Box>

 <Box sx={{marginLeft:-6,marginTop:-2,width:350,height:70,
display:'flex',alignItems:'center',justifyContent:'center',
  backgroundColor:'#14327d'}}>
<Typography sx={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:20,color:'white',
fontFamily:'OpenSansRegular'}}>250 cards completed
&nbsp;<CheckCircleOutlineIcon/>
</Typography>
 </Box>

<Box sx={{position:'relative',left:245,marginTop:7}}>
<Typography sx={{fontSize:14,
  fontFamily:'OpenSansSemiBold',
  color:'#387e9c'}}>5%F</Typography>
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
<Typography sx={{color:'#387e9c',marginTop:-5.5}}>&nbsp; 40</Typography>
<Typography sx={{fontSize:14,fontFamily:'OpenSansSemiBold',color:'#387e9c',marginTop:4}}>&nbsp;&nbsp;F</Typography>

</Box>

<Box sx={{marginLeft:10,marginRight:10,width:'20',
height:35,backgroundColor:'#2b7595'}}>
&emsp;&emsp;
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



<Typography sx={{marginLeft:6,marginBottom:3,fontSize:15,fontFamily:'OpenSansSemiBold'}}>Chapterwise Review</Typography>


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




</Box>


);






}