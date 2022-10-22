import React,{useState,useEffect} from 'react';
import { MathComponent } from 'mathjax-react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';




export default function QuestionBody({question,currStep,currQuestion}) {

let qstr = question.Question;


return (

<Paper sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignSelf:'flex-start',
        alignItems:'flex-start',
        flexWrap: 'wrap',        
        width:'100%',
        height:150,
        overflow: 'hidden',
        overflowY: 'scroll',
        backgroundColor:'#ebf1f4',
        p: 0.5,
        m: 0}} style={{margin:'0 auto'}}      
    >

<Box sx={{marginLeft:2,marginTop:2}}>

 <MathComponent display={false} tex={'\\displaylines {' + question.Question + '}'}/> 

}
</Box>
 <Paper elevation={0} sx={{
        display: 'flex',
        justifyContent: 'center',
        alignSelf:'center',
        alignItems:'center',
        flexWrap: 'wrap',        
        position:'relative',
        left:-260,
        top:10,
        height:60,
        backgroundColor:'#ebf1f4',
        border:0,
        p: 0.5,
        m: 0}}  style={{margin:'0 auto'}}
    >

<MathComponent display={false} tex={question.QuestionSummary} />

</Paper>
</Paper>

);

}