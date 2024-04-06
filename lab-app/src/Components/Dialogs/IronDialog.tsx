import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
const IronDialog = (props:any) => {
    const [openIRON, setOpenIRON] = React.useState(false);

    const handleIRONClickOpen = () => {
      setOpenIRON(true);
    };
    const handleIRONClose = () => {
      setOpenIRON(false);
    };
    const [totalIron, setTotalIron] = React.useState('');
    const [tibc, setTibc] = React.useState('');
    const [tstat, setStat] = React.useState('');
    const [print, setPrint] = React.useState(false);
    const [printAll, setPrintAll] = React.useState(false);
    const handleChange = (event: any , key:string) => {
        if (key === "totalIron") {
            setTotalIron(event.target.value);
        } else if (key === "tibc") {
            setTibc(event.target.value);
        } else if (key === "tstat") {
            setStat(event.target.value);
        }else if (key === "print") {
            setPrint(!print);
        } else if (key === "printAll") {
            setPrintAll(!printAll);
        }
    };
    function submit(){
        let data={
            "totalIron":totalIron,
            "tibc":tibc,
            'tstat':tstat,
            'print':print,
            'printAll':printAll
        }
        console.log("Iron test ",data);
        props.onSaveClick(data);
        handleIRONClose();
    }
  return (
    <>
    <Button className='btn' variant="contained" onClick={handleIRONClickOpen}>IRON</Button>
          {/* small dialog IRON box */}
          <BootstrapDialog
        onClose={handleIRONClose}
        aria-labelledby="customized-dialog-title"
        open={openIRON}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          IRON Test
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleIRONClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <div style={{"width":"500px","height":"300px"}}>
        <FormGroup>
            <Stack direction="row">
                <FormControlLabel control={<Checkbox value={print} onChange={(event) => handleChange(event, "print")} />} label="PRINT" />
                <FormControlLabel control={<Checkbox value={printAll} onChange={(event) => handleChange(event, "printAll")} />} label="PRINT ALL" />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <InputLabel id="date-picker-label" style={{ width: '35%' }}>
                Total Iron
                </InputLabel>
                <TextField type="number" style={{"width":"70%"}} size="small" value={totalIron} onChange={(event) => handleChange(event, "totalIron")}></TextField>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <InputLabel id="date-picker-label" style={{ width: '35%' }}>
                TIBC
                </InputLabel>
                <TextField type="number" style={{"width":"70%"}} size="small" value={tibc} onChange={(event) => handleChange(event, "tibc")}></TextField>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <InputLabel id="date-picker-label" style={{ width: '35%' }}>
                TSTAT
                </InputLabel>
                <TextField type="number" style={{"width":"70%"}} size="small" value={tstat} onChange={(event) => handleChange(event, "tstat")}></TextField>
            </Stack>
            
        </FormGroup>
        </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={()=>{submit()}}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>

    </>
  )
}

export default IronDialog;