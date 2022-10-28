import React, {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
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

<Link href="#">
<Box sx={{marginLeft:1,marginTop:8}}>
<img style={{width:95,height:95}} src={require('../assets/images/functions.png')}/>
<Typography align="center" sx={{fontSize:12,fontFamily:'OpenSansSemiBold'}}>Functions</Typography>
</Box>
</Link>

<Link href="#">
<Box sx={{marginLeft:9,marginTop:8}}>
<img style={{width:95,height:95}} src={require('../assets/images/binomial-theorem.png')}/>
<Typography align="center" sx={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontFamily:'OpenSansSemiBold'}}>
Binomial<br/> Theorem</Typography>
</Box>
</Link>
<Link href="#">
<Box sx={{marginLeft:9,marginTop:8}}>
<img style={{width:95,height:95}} src={require('../assets/images/limits.png')}/>
<Typography align="center" sx={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontFamily:'OpenSansSemiBold'}}>Limits</Typography>
</Box>
</Link>
<Link href="#">
<Box sx={{marginLeft:9,marginTop:8}}>
<img style={{width:95,height:95}} src={require('../assets/images/curves.png')}/>
<Typography align="center" sx={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontFamily:'OpenSansSemiBold'}}>Area under<br/> Curves</Typography>
</Box>
</Link>
<Link href="#">
<Box sx={{marginLeft:9,marginTop:8}}>
<img style={{width:95,height:95}} src={require('../assets/images/quadratic-equations.png')}/>
<Typography align="center" sx={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontFamily:'OpenSansSemiBold'}}>Quadratic<br/> Equations</Typography>
</Box>
</Link>
<Link href="#">
<Box sx={{marginLeft:9,marginTop:8}}>
<img style={{width:95,height:95}} src={require('../assets/images/sequence-n-series.png')}/>
<Typography align="center" sx={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontFamily:'OpenSansSemiBold'}}>Sequence <br/>& Series</Typography>
</Box>
</Link>
</Box>

<Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'stretch',alignSelf:'stretch'}}>
<Link href="#">
<Box sx={{marginLeft:1,marginTop:8}}>   
<img style={{width:95,height:95}} src={require('../assets/images/continuity.png')}/>
<Typography align="center" sx={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontFamily:'OpenSansSemiBold'}}>Continuity</Typography>
</Box>
</Link>

<Link href="#">
<Box sx={{marginLeft:9,marginTop:8}}>
<img style={{width:95,height:95}} src={require('../assets/images/differential-equations.png')}/>
<Typography align="center" sx={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontFamily:'OpenSansSemiBold'}}>Differential<br/> Equations</Typography>
</Box>
</Link>
<Link href="#">
<Box sx={{marginLeft:9,marginTop:8}}>
<img style={{width:95,height:95}} src={require('../assets/images/matrices-n-determinants.png')}/>
<Typography align="center" sx={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontFamily:'OpenSansSemiBold'}}>Matrices and<br/> Determinants</Typography>
</Box>
</Link>
<Link href="#">
<Box sx={{marginLeft:9,marginTop:8}}>
<img style={{width:95,height:95}} src={require('../assets/images/logarithms.png')}/>
<Typography align="center" sx={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontFamily:'OpenSansSemiBold'}}>Logarithms</Typography>
</Box>
</Link>
<Link href="#">
<Box sx={{marginLeft:9,marginTop:8}}>
<img style={{width:95,height:95}} src={require('../assets/images/differentiability.png')}/>
<Typography align="center" sx={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontFamily:'OpenSansSemiBold'}}>Differentiability</Typography>
</Box>
</Link>
<Link href="#">
<Box sx={{marginLeft:9,marginTop:8}}>
<img style={{width:95,height:95}} src={require('../assets/images/coordinate-geometry.png')}/>
<Typography align="center" sx={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,fontFamily:'OpenSansSemiBold'}}>Coordinate<br/> Geometry</Typography>
</Box>
</Link>
</Box>


</Box>
);
}



