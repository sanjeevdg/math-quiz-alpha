import React, {useState, useEffect} from 'react';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import {VictoryPie,VictoryLabel} from 'victory';
import Divider from '@mui/material/Divider';

import Paper from '@mui/material/Paper';

import Header from './Header';

export default function FinalScreen() {
	

return (
<Box sx={{ backgroundColor:'#f6f6f6',width: '80%',margin:'auto',padding:1,height:850,alignSelf:'center', border:0,borderColor:'#29476a',alignItems:'center',justifyContent:'center' }}>

        <Header />

        <Divider/>


<Box sx={{marginLeft:'35%',width:300,height:300}}>

 <svg viewBox="0 0 400 400">
        <VictoryPie
          standalone={false}
          animate={true}
          animationDuration={5000}
          animationEasing="ease-out"
          colorScale={['#2a7595','#e4f1f6']}
          width={400} height={400}
          data={[
            { x: 1, y: 60 }, { x: 2, y: 180 }
          ]}
          innerRadius={95} labelRadius={100}
          style={{ labels: { display:'none' } }}
        />
        <VictoryLabel
          textAnchor="middle"
          style={{ fontSize: 30,fontFamily:'OpenSansSemiBold',fill:'#14327d' }}
          x={200} y={200}
          text={`25% \n Completed`}
        />
      </svg>

</Box>
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
</Box>


);






}