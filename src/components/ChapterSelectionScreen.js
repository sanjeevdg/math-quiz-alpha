import React, {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

import Divider from '@mui/material/Divider';

import Paper from '@mui/material/Paper';

import Header from './Header';






export default function ChapterSelectionScreen() {


// <Avatar src={

//  sx={{marginLeft:10,marginTop:8}}

return (
<Box sx={{ backgroundColor:'#f6f6f6',width: '80%',margin:'auto',padding:1,height:850,alignSelf:'center', border:0,borderColor:'#29476a',alignItems:'center',justifyContent:'center' }}>

        <Header />

        <Divider/>

<Paper
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        height:220,
        width:'100%',
        p: 0.5,
        m: 0,  
        borderBottomLeftRadius:18,
        borderBottomRightRadius:18,      
        backgroundColor:'#243b67'
      }}      
    >


<Typography sx={{marginTop:6,marginLeft:7,fontSize:30,fontFamily:'OpenSansSemiBold',color:'white'}}>
MATHEMATICS

</Typography>
<Typography sx={{marginLeft:-26.5,marginTop:12,fontFamily:'OpenSansSemiBold',fontSize:18,color:'#80c5e2'}}>

25 Chapters
</Typography>
</Paper>

<Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'stretch',alignSelf:'stretch'}}>
<Box>
<img style={{width:95,height:95}} src={require('../assets/images/functions.png')}/>
<br/>Functions
</Box>

<Box>
<img style={{width:95,height:95}} src={require('../assets/images/binomial-theorem.png')}/>
<br/>Binomial Theorem
</Box>


<Box>
<img style={{width:95,height:95}} src={require('../assets/images/limits.png')}/>
<br/>Limits
</Box>

<Box>
<img style={{width:95,height:95}} src={require('../assets/images/curves.png')}/>
<br/>Area under Curves
</Box>

<Box>
<img style={{width:95,height:95}} src={require('../assets/images/quadratic-equations.png')}/>
<br/>Limits
</Box>

<Box>
<img style={{width:95,height:95}} src={require('../assets/images/sequence-n-series.png')}/>
<br/>Sequence and Series
</Box>

</Box>

<Box sx={{display:'flex',flexDirection:'row'}}>
<Box sx={{marginLeft:10,marginTop:8}}>
<img style={{width:95,height:95}} src={require('../assets/images/continuity.png')}/>
<br/>Continuity
</Box>

<Box sx={{marginLeft:10,marginTop:8}}>
<img style={{width:95,height:95}} src={require('../assets/images/differential-equations.png')}/>
<br/>Differential Equations
</Box>


<Box sx={{marginLeft:10,marginTop:8}}>
<img style={{width:95,height:95}} src={require('../assets/images/matrices-n-determinants.png')}/>
<br/>Matrices and Determinants
</Box>

<Box sx={{marginLeft:10,marginTop:8}}>
<img style={{width:95,height:95}} src={require('../assets/images/logarithms.png')}/>
<br/>Logarithms
</Box>

<Box sx={{marginLeft:10,marginTop:8}}>
<img style={{width:95,height:95}} src={require('../assets/images/differentiability.png')}/>
<br/>Differentiability
</Box>

<Box sx={{marginLeft:10,marginTop:8}}>
<img style={{width:95,height:95}} src={require('../assets/images/coordinate-geometry.png')}/>
<br/>Coordinate Geometry
</Box>

</Box>


</Box>
);
}



