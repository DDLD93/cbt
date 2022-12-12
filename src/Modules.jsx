import { Button, Divider, Grid, Paper, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState } from 'react'
import data from "./data.json"
import { useNavigate } from 'react-router-dom';
import { context } from './Context';
import { useContext } from 'react';

function Modules() {
    const [modules, setModules] = useState("Use Of computers and digital mobile devices")
    const {questions,setQuestions} = useContext(context)
    const navigate = useNavigate()
    return (
        <Paper
            sx={{
                padding: 2,
                gap: 5,
                minWidth: 400,
                height: 450
            }}
        >
            <Typography alignContent={"flex-start"} variant='h4' >Agile Test </Typography>
            <Typography alignContent={"flex-start"} variant='caption' >Competency-based training (CBT)</Typography>
            <Divider />

            <Grid mt={6} container height={400} flexDirection={"column"} flexWrap={"nowrap"} gap={3}>
                <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
                    <InputLabel id="demo-select-small">Modules</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={modules}
                        label="Modules"
                        onChange={(e) => setModules(e.target.value)}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Use Of computers and digital mobile devices"}>Use Of computers and digital mobile devices</MenuItem>
                        <MenuItem value={"Navigating the  Internet and WWW"}>Navigating the  Internet and WWW</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 220 }} size="small">
                    <InputLabel id="demo-select-small">Level</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"

                        label="Age"
                        onChange={(e) => setQuestions(e.target.value)}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {data[modules].map(level => (
                            <MenuItem value={level.payload}>
                                {level.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button disabled={questions.length > 0?false:true} onClick={()=>navigate("/question")} fullWidth variant="contained">Start</Button>


            </Grid>

        </Paper>
    )
}

export default Modules