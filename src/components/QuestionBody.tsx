import React,{useState,useEffect} from 'react';
import { MathComponent } from 'mathjax-react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';




export default function QuestionBody() {




return (
<Paper
      style={{margin:'0 auto'}}
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignSelf:'flex-start',
        alignItems:'flex-start',
        flexWrap: 'wrap',        
        width:'100%',
        height:140,
        backgroundColor:'#ebf1f4',
        p: 0.5,
        m: 0,
      }}      
    >
&emsp;

<MathComponent display={false} tex={String.raw`ax^{4}+bx^{3}-x^{2}+2x+3`} />
<Typography  sx={{fontSize:15,fontFamily:'OpenSansRegular'}}> &emsp; has remainder &emsp; </Typography>
<MathComponent display={false} tex={String.raw`4x+3`} />
<Typography  sx={{fontSize:15,fontFamily:'OpenSansRegular'}}> &emsp; when divided by &emsp; </Typography>
<MathComponent display={false} tex={String.raw`x^2+x-2`} />

<Paper
      style={{margin:'0 auto'}}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignSelf:'center',
        alignItems:'center',
        flexWrap: 'wrap',        
        width:'20%',
        position:'relative',
        left:-460,
        top:10,
        height:40,
        backgroundColor:'#ebf1f4',
        p: 0.5,
        m: 0,
      }}      
    >
&emsp;
<MathComponent display={false} tex={String.raw`a+4b= ?`} />
</Paper>
</Paper>
);
}