import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import React from 'react';
import '../Footer/Footer.css'
import { Button } from '@mui/material';
import { ppid } from 'process';
import { ElectricBoltSharp } from '@mui/icons-material';
function Footer(props:any){
    let data:any[] =[]
    function saveData(){
        const P = localStorage.getItem('Patient');
        if(P){
            const PP=JSON.parse( P )
            PP.forEach((ele:any) => {
                if(ele['id']===props.Patient['id']){
                    Object.assign(ele, props.Patient); 
                }
            });

        }else{
            localStorage.setItem('Patient', JSON.stringify(props.Patient));
        }
    }

    return(
        <>
        <div className='Footer'>
        <Button variant="outlined" onClick={()=>{props.save();saveData();}}  startIcon={<SaveIcon />}>
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