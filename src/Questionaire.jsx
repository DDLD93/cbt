import { Button, CircularProgress, Divider, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useContext } from 'react';
import Countdown from 'react-countdown';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { context } from './Context';

export default function Questionaire() {
  const {questions} = useContext(context)
  const handleNext = () =>{
    setStep(Math.floor(Math.random() * (20 - 1 + 1)) + 1)
  }
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {

  
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
        <Typography mt={5} alignSelf={"flex-start"} >Module: <span> blaa blaa blaa </span></Typography>
        <Typography alignSelf={"flex-start"} >Level: <span>SS2 Basics</span></Typography>
      <CountdownCircleTimer
      size={100}
      strokeWidth={2}
    isPlaying
    duration={300}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[120, 90, 30, 0]}
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
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value={question.a} control={<Radio />} label={question.a} />
                <FormControlLabel value={question.b} control={<Radio />} label={question.b} />
                <FormControlLabel value={question.c} control={<Radio />} label={question.c} />
                <FormControlLabel value={question.d} control={<Radio />} label={question.d} />
              </RadioGroup>
            </FormControl>
          }

        })}
        <Button sx={{
          position:"absolute",
          top:530,
          right:200
       
        }} onClick={handleNext} variant="contained">Next</Button>
      </Grid>
    </Grid>
  )
}
