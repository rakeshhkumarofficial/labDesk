
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from '@mui/material';
import '../App.css';
import React from 'react';

function PatientForm(){
    const [Materials, setMaterials] = React.useState('');
    const [referredby, setReferredby] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setMaterials(event.target.value);
    };
    const handleReferreChange = (event: SelectChangeEvent) => {
        setReferredby(event.target.value);
    };
    return(
        <>
                <div className='flex'>
           <div>
                <TextField
                label="REPORT DATE"
                id="outlined-size-small"
                defaultValue="23/03/2024"
                size="small"
                />
           </div>
           <div>
                <TextField
                label="TIME"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                />
           </div>
           <div>
                <TextField
                label="LAB NO"
                id="outlined-size-small"
                defaultValue="1145"
                size="small"
                />
           </div>
           <div></div> 

        </div>
        <div className='flex'>
            <div>
                    <TextField
                    label="RECIVED ON"
                    id="outlined-size-small"
                    defaultValue="23/03/2024"
                    size="small"
                    />
                </div>
                <div>
                    <TextField
                    label="TIME"
                    id="outlined-size-small"
                    defaultValue="Small"
                    size="small"
                    />
                </div>
           <div></div>
           <div></div> 

        </div>
        <div className='flex'>
        <div>
                <TextField
                label="PATIENT NAME"
                id="outlined-size-small"
                defaultValue="YAN"
                size="small"
                />
           </div>
           <div>
                <TextField
                label="GENDER"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                />
           </div>
           <div>
                <TextField
                label="AGE"
                id="outlined-size-small"
                defaultValue="23/03/2024"
                size="small"
                />
           </div>
           <div>
           </div> 

        </div>
        <div className='flex'>
           <div >
           <TextField
                label="Addres"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                />
           </div>
           <div style={{"width":"50%"}}>
           <TextField
                label="Mobile"
                id="outlined-size-small"
                defaultValue="Small"
                size="small"
                />
           </div>
           <div  style={{"width":"40%"}}></div>
 

        </div>
        <div className='flex'>
           <div>
           <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Materials</InputLabel>
                <Select
                 labelId="demo-select-small-label"
                 id="demo-select-small"
                value={Materials}
                label="Materials"
                onChange={handleChange}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={101}>Blood and Urine</MenuItem>
                <MenuItem value={102}>Blood only</MenuItem>
                <MenuItem value={103}>Urine only</MenuItem>
                </Select>
            </FormControl>
           </div>
           <div>
           <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">REFERRED BY</InputLabel>
                <Select
                 labelId="demo-select-small-label"
                 id="demo-select-small"
                value={referredby}
                label="REFERRED BY"
                onChange={handleReferreChange}
                >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={101}>ashwani1</MenuItem>
                <MenuItem value={102}>ashwani1</MenuItem>
                <MenuItem value={103}>vashwani1</MenuItem>
                </Select>
            </FormControl>
           </div>
        </div>
        
        <div className='flex pt'>
        <Button className='btn' variant="contained">HAEMATOLOGY</Button>  
        <Button className='btn' variant="contained">BIOCHEMISTRY</Button>  
        <Button className='btn' variant="contained">SEROLOGY</Button>  
        <Button className='btn' variant="contained">URINE</Button>  
        <Button className='btn' variant="contained">STOOL</Button>  
        <Button className='btn' variant="contained">FLUID</Button>  
        </div>
        <div className='flex  pt'>
        <Button className='btn' variant="contained">LFT</Button>  
        <Button className='btn' variant="contained">LIPID PROFILE</Button>  
        <Button className='btn' variant="contained">SEMEN</Button>  
        <Button className='btn' variant="contained">ELECTROLYTES</Button>  
        <Button className='btn' variant="contained">WIDAL</Button>  
        <Button className='btn' variant="contained">CBC</Button>  
        </div>
        <div className='flex  pt'>
        <Button className='btn' variant="contained">RFT/KFT</Button>  
        <Button className='btn' variant="contained">THYROID</Button>  
        <Button className='btn' variant="contained" ></Button>  
        <Button className='btn' variant="contained">SPECIAL TEST</Button>  
        <Button className='btn' variant="contained">PREGNANCY</Button>  
        <Button className='btn' variant="contained">PBF</Button>  
        </div>
        <div className='flex  pt'>
        <Button className='btn' variant="contained">GTT</Button>  
        <Button className='btn' variant="contained">IRON</Button>  
        <Button className='btn' variant="contained" >CULTURE</Button>  
        <Button className='btn' variant="contained">DRUG ABUSE</Button>  
        <Button className='btn' variant="contained">HB A1c l</Button>  
        <Button className='btn' variant="contained">HB A1c ll</Button>  
        </div>
        </>
    );


}
export default PatientForm;