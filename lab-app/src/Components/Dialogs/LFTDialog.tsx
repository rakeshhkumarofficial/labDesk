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
const LFTDialog = (props:any) => {
    const [openIRON, setOpenIRON] = React.useState(false);

    const handleIRONClickOpen = () => {
      setOpenIRON(true);
    };
    const handleIRONClose = () => {
      setOpenIRON(false);
    };
    const [totalBilirubin, setTotalBilirubin] = React.useState('');
    const [conjBilirubin, setConjBilirubin] = React.useState('');
    const [unconjBilirubin, setUnconjBilirubin] = React.useState('');
    const [sgot, setSgot] = React.useState('');
    const [sgpt, setSgpt] = React.useState('');
    const [alkalinePhosphatase, setAlkalinePhosphatase] = React.useState('');
    const [serumProtein, setSerumProtein] = React.useState('');
    const [globulin, setGlobulin] = React.useState('');
    const [agRatio, setAgRatio] = React.useState('');
    const [hbsAg, setHbsAg] = React.useState('');
    const [albumin, setAlbumin] = React.useState('');
    const [print, setPrint] = React.useState(false);
    const [printAll, setPrintAll] = React.useState(false);
    const [comments, setComments] = React.useState('');
    const handleChange = (event: any , key:string) => {
        if (key === "totalBilirubin") {
            setTotalBilirubin(event.target.value);
        } else if (key === "conjBilirubin") {
            setConjBilirubin(event.target.value);
        } else if (key === "unconjBilirubin") {
            setUnconjBilirubin(event.target.value);
        }else if (key === "sgot") {
            setSgot(event.target.value);
        }
        else if (key === "sgpt") {
            setSgpt(event.target.value);
        }
        else if (key === "alkalinePhosphatase") {
            setAlkalinePhosphatase(event.target.value);
        }
        else if (key === "serumProtein") {
            setSerumProtein(event.target.value);
        }
        else if (key === "albumin") {
            setAlbumin(event.target.value);
        }
        else if (key === "globulin") {
            setGlobulin(event.target.value);
        }
        else if (key === "agRatio") {
            setAgRatio(event.target.value);
        }
        else if (key === "hbsAg") {
            setHbsAg(event.target.value);
        }
        else if (key === "print") {
            setPrint(!print);
        } else if (key === "printAll") {
            setPrintAll(!printAll);
        }else if (key === "comments") {
            setComments(event.target.value);
        }
    };
    function submit(){
        let data={
            "totalBilirubin":totalBilirubin,
            "conjBilirubin":conjBilirubin,
            'unconjBilirubin':unconjBilirubin,
            'sgot':sgot,
            'sgpt':sgpt,
            'alkalinePhosphatase':alkalinePhosphatase,
            'serumProtein':serumProtein,
            'albumin':albumin,
            'globulin':globulin,
            'agRatio':agRatio,
            'hbsAg':hbsAg,
            'print':print,
            'printAll':printAll,
            'comments':comments
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
          LFT Test
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
                <FormControlLabel control={<Checkbox  value={comments} onChange={(event) => handleChange(event, "comments")}  />} label="COMMENTS" />
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <InputLabel style={{ width: '35%' }}>
                Total Bilirubin
                </InputLabel>
                <TextField type="number" style={{"width":"70%"}} size="small" value={totalBilirubin} onChange={(event) => handleChange(event, "totalBilirubin")}></TextField>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <InputLabel style={{ width: '35%' }}>
                Conj. Bilirubin
                </InputLabel>
                <TextField type="number" style={{"width":"70%"}} size="small" value={conjBilirubin} onChange={(event) => handleChange(event, "conjBilirubin")}></TextField>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <InputLabel  style={{ width: '35%' }}>
                Unconj. Bilirubin
                </InputLabel>
                <TextField type="number" style={{"width":"70%"}} size="small" value={unconjBilirubin} onChange={(event) => handleChange(event, "unconjBilirubin")}></TextField>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <InputLabel  style={{ width: '35%' }}>
                SGOT (AST)
                </InputLabel>
                <TextField type="number" style={{"width":"70%"}} size="small" value={sgot} onChange={(event) => handleChange(event, "sgot")}></TextField>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <InputLabel  style={{ width: '35%' }}>
                SGPT (ALT)
                </InputLabel>
                <TextField type="number" style={{"width":"70%"}} size="small" value={sgpt} onChange={(event) => handleChange(event, "sgpt")}></TextField>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <InputLabel  style={{ width: '35%' }}>
                S. Alkaline Phosphatase
                </InputLabel>
                <TextField type="number" style={{"width":"70%"}} size="small" value={alkalinePhosphatase} onChange={(event) => handleChange(event, "alkalinePhosphatase")}></TextField>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <InputLabel  style={{ width: '35%' }}>
                Serum Protein
                </InputLabel>
                <TextField type="number" style={{"width":"70%"}} size="small" value={serumProtein} onChange={(event) => handleChange(event, "serumProtein")}></TextField>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <InputLabel  style={{ width: '35%' }}>
                Albumin
                </InputLabel>
                <TextField type="number" style={{"width":"70%"}} size="small" value={albumin} onChange={(event) => handleChange(event, "albumin")}></TextField>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <InputLabel  style={{ width: '35%' }}>
                Globulin
                </InputLabel>
                <TextField type="number" style={{"width":"70%"}} size="small" value={globulin} onChange={(event) => handleChange(event, "globulin")}></TextField>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <InputLabel  style={{ width: '35%' }}>
                A:G Ratio
                </InputLabel>
                <TextField type="number" style={{"width":"70%"}} size="small" value={agRatio} onChange={(event) => handleChange(event, "agRatio")}></TextField>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <InputLabel  style={{ width: '35%' }}>
                HbsAg
                </InputLabel>
                <TextField type="number" style={{"width":"70%"}} size="small" value={hbsAg} onChange={(event) => handleChange(event, "hbsAg")}></TextField>
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

export default LFTDialog;