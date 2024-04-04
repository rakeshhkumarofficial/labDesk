
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from '@mui/material';
import '../App.css';
import React from 'react';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function PatientForm() {
  const [Materials, setMaterials] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setMaterials(event.target.value);
  };
  const [referredby, setReferredby] = React.useState('');
  const handleReferreChange = (event: SelectChangeEvent) => {
    setReferredby(event.target.value);
  };
  const [openHAEMATOLOGY, setOpenHAEMATOLOGY] = React.useState(false);
  const handleClickOpen = () => {
    setOpenHAEMATOLOGY(true);
  };

  const handleClose = () => {
    setOpenHAEMATOLOGY(false);
  };
  const [openBIOCHEMISTRY, setOpenBIOCHEMISTRY] = React.useState(false);
  const handleClickBIOOpen = () => {
    setOpenBIOCHEMISTRY(true);
  };

  const handleBIOClose = () => {
    setOpenBIOCHEMISTRY(false);
  };





  return (
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
        <div style={{ "width": "50%" }}>
          <TextField
            label="Mobile"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />
        </div>
        <div style={{ "width": "40%" }}></div>


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
        <Button className='btn' variant="contained" onClick={handleClickOpen}>HAEMATOLOGY</Button>
        <Button className='btn' variant="contained" onClick={handleClickBIOOpen}>BIOCHEMISTRY</Button>
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

      <Dialog
        fullScreen
        open={openHAEMATOLOGY}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              HAEMATOLOGY
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItemButton>
        </List>
      </Dialog>
      <Dialog
        fullScreen
        open={openBIOCHEMISTRY}
        onClose={handleBIOClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleBIOClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            BIOCHEMISTRY
            </Typography>
            <Button autoFocus color="inherit" onClick={handleBIOClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItemButton>
        </List>
      </Dialog>
    </>
  );


}
export default PatientForm;
