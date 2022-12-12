import { Button, CircularProgress, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/system'
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import Countdown from 'react-countdown';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useNavigate } from 'react-router-dom';
import { context } from './Context';

export default function Questionaire() {
 const navigate =  useNavigate()
  const {questions} = useContext(context)
  const [answer, setAnswer] = useState(null)
  const [next, setNext] = useState(false)
  const handleComplete = () =>{
    alert("you seems to have run out of time")
    setTimeout(()=>{
      navigate("modules")
    },5000)
  }
  const handleNext = () =>{
    setAnswer(null)
    setStep(Math.floor(Math.random() * (20 - 1 + 1)) + 1)
  }
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {console.log(questions);

    if (!questions.length) navigate("/modules")
  
  }, []);
  return (
    <Grid
    container
    sx={{
      width:700,
      height:500,
      bgcolor:"#fff"
    }}
    >
      <Grid container padding={1} justifyContent={"flex-start"} gap={5} flexDirection={"column"} alignItems={"center"} flex={1} >
        <Typography mt={5} alignSelf={"flex-start"} >Module: <span>  </span></Typography>
        <Typography alignSelf={"flex-start"} >Level: <span>SS2 Basics</span></Typography>
      <CountdownCircleTimer
      size={100}
      strokeWidth={2}
    isPlaying
    duration={300}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[120, 90, 30, 0]}
    onComplete={handleComplete}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>

      </Grid>
      <Divider orientation="vertical" />
      <Grid 
     
      sx={{
        padding:"0px 0px"
      }}
      flex={3} >
        {questions && questions.map((question, index) => {
          if (index == step) {
            return <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">{question.q}</FormLabel>
              <RadioGroup
              sx={{
                padding:5,
                width:"100%"
              }}
               onChange={(e)=>setAnswer(e.target.value)}
              >
                <Grid2
                container
                flexDirection={"column"}
                sx={{
                  width:"100%"
                }}
                >
                <FormControlLabel value={question.a} control={<Radio />} label={question.a} />
                <FormControlLabel value={question.b} control={<Radio />} label={question.b} />
                <FormControlLabel value={question.c} control={<Radio />} label={question.c} />
                <FormControlLabel value={question.d} control={<Radio />} label={question.d} />
                </Grid2>
              </RadioGroup>
            </FormControl>
          }

        })}
        <Button sx={{
          position:"absolute",
          top:530,
          right:200
       
        }}
        disabled={!answer&&true}
        onClick={handleNext} variant="contained">Next</Button>
      </Grid>
    </Grid>
  )
}
