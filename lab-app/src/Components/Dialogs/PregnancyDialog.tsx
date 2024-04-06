import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

function PregnancyDilaog(){
    const [sampleBroughtFrom, setSampleBroughtFrom] = React.useState('');
    const [betaSCG, setBetaSCG] = React.useState('');
    const [commentAndAdvise, setcommentAndAdvise] = React.useState('');
    const [expectedDate, setExpectedDate] = React.useState(new Date());
    const [print, setPrint] = React.useState(false);
    const [printAll, setPrintAll] = React.useState(true);
    const [comments, setComments] = React.useState('');
    const handleChange = (event: any , key:string) => {
        if (key === "sampleBroughtFrom") {
            setSampleBroughtFrom(event.target.value);
        } else if (key === "betaSCG") {
            setBetaSCG(event.target.value);
        } else if (key === "commentAndAdvise") {
            setcommentAndAdvise(event.target.value);
        } else if (key === "expectedDate") {
            setExpectedDate(new Date(event.target.value));
        } else if (key === "print") {
            setPrint(!print);
        } else if (key === "printAll") {
            setPrintAll(!printAll);
        } else if (key === "comments") {
            setComments(event.target.value);
        }

        console.log(sampleBroughtFrom,betaSCG, commentAndAdvise,comments,print, printAll, expectedDate);
    };

    return (
        <>
        <div style={{"width":"500px","height":"300px"}}>
        <FormGroup>
            <Stack direction="row">
                <FormControlLabel control={<Checkbox value={print} onChange={(event) => handleChange(event, "print")} />} label="PRINT" />
                <FormControlLabel control={<Checkbox value={printAll} onChange={(event) => handleChange(event, "printAll")} />} label="PRINT ALL" />
                <FormControlLabel control={<Checkbox  value={comments} onChange={(event) => handleChange(event, "comments")}  />} label="COMMENTS" />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}  sx={{ mt: 2 }}>
                <InputLabel id="sample-brought-label" style={{"width":"35%"}}>Sample Brought from</InputLabel>
                <Select
                labelId="sample-brought-select-label"
                id="sample-brought-select"
                value={sampleBroughtFrom}
                onChange={(event) => handleChange(event, "sampleBroughtFrom")}
                style={{"width":"70%", "height":"30px"}}
                >
                <MenuItem value={10}>Ashwani</MenuItem>
                <MenuItem value={20}>Rakesh</MenuItem>
                <MenuItem value={30}>Shubham</MenuItem>
                </Select>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <InputLabel id="date-picker-label" style={{ width: '35%' }}>
                Expected Date
                </InputLabel>
                <TextField type="date" style={{"width":"70%"}} size="small" value={expectedDate} onChange={(event) => handleChange(event, "expectedDate")}></TextField>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}  sx={{ mt: 2 }}>
                <InputLabel id="beta-scg-label" style={{"width":"35%"}}>Beta HCG</InputLabel>
                <Select
                labelId="beta-scg--select-label"
                id="beta-scg--select"
                value={betaSCG}
                onChange={(event) => handleChange(event, "betaSCG")}
                style={{"width":"70%", "height":"30px"}}
                >
                <MenuItem value={10}>Ashwani</MenuItem>
                <MenuItem value={20}>Rakesh</MenuItem>
                <MenuItem value={30}>Shubham</MenuItem>
                </Select>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}  sx={{ mt: 2 }}>
                <InputLabel id="comments-label" style={{"width":"35%"}}>Comments/Advise</InputLabel>
                <Select
                labelId="comments-select-label"
                id="comments-select"
                value={commentAndAdvise}
                onChange={(event) => handleChange(event, "commentAndAdvise")}
                style={{"width":"70%", "height":"30px"}}
                >
                <MenuItem value={10}>Ashwani</MenuItem>
                <MenuItem value={20}>Rakesh</MenuItem>
                <MenuItem value={30}>Shubham</MenuItem>
                </Select>
            </Stack>  
        </FormGroup>
        </div>
        </>
    )
}

export default PregnancyDilaog;