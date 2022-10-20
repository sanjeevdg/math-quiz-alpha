import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';





export default function Header() {


return (
<Paper
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        height:90,
        width:'100%',
        p: 0.5,
        m: 0,        
        backgroundColor:'#407392'
      }}      
    >


<img src={require('../assets/images/nioclass-logo2.png')}
    style={{width:70, height:70,borderRadius:35,marginTop:6,marginLeft:5}}
    />

<Typography sx={{color:'white',fontSize:22,fontFamily:'OpenSansSemiBold',marginTop:4,marginLeft:2}}>

NioClass
</Typography>

<Breadcrumbs maxItems={1} aria-label="breadcrumb" sx={{color:'white',fontSize:16,fontFamily:'OpenSansSemiBold',marginBottom:2,display:'flex',alignItems:'flex-end',alignSelf:'flex-end',marginLeft:45}}>
        <Link underline="hover" color="inherit" href="#">
          Home
        </Link>        
      </Breadcrumbs>


</Paper>
);
}