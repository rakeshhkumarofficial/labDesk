import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import React from 'react';
import '../Footer/Footer.css'
import { Button } from '@mui/material';
function Footer(props:any){

    return(
        <>
        <div className='Footer'>
        <Button variant="outlined" onClick={()=>{props.save()}}  startIcon={<SaveIcon />}>
        SAVE
        </Button>
        <Button variant="contained" startIcon={<PrintIcon />}>
        PRINT
        </Button>
        </div>
        </>
    )
}
export default Footer;