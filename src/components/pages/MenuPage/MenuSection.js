import React, { useState } from 'react';
import { DataOverall } from './Data';
import { client } from './Data';
import { Button } from '../../Button';
import '../../../App.css';
import  "./MenuSection.css"

import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function redirect(item){
  if(item !== null)
  {
      window.location.href = "/scanner.html?item="+item;

  }
};


const Accordion = withStyles({
  root: {
    // backgroundColor: '#fffff6',
    backgroundColor: 'white',
    color:'#00000',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom:'1px solid rgba(0, 0, 0, 0.5)',
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    // paddingBottom: '0% !important',
    alignItems:'center',
    color:'#fff',
    justifyContent:'space-between'
  },
}))(MuiAccordionDetails);


function handleClick (item, model){
  fetch('https://test.viar-eu.com/api/request/new_request.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client: client,
      item: item,
    })
  })
  
  redirect(model);
}





export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div  className="background">
      <div className="background-fade">
        <div className="header">
          <img src='images/logo-viar.jpg' className='logo'></img>
        </div>
        {/* <img className='background-img' src='background.jpeg'/> */}
        
        <div className="content">
          {DataOverall.map((subclass, subIndex) => {
          return (
            <>
              <h1 id={"item"+subIndex} className="font-face-fbi" style={{color:'#000000', width:'100%', marginTop:'10%', textAlign:'center'}}>{subclass.name}</h1>
                <div className="food-category font-face-fbk">
                  {subclass.variable.map((item, index) => {
                  index=subIndex*100+index;
                  return (
                    <>
                  <Accordion square expanded={expanded === item.name} onChange={handleChange(item.name)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{color:'rgba(0, 0, 0, 0.8)'}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                      <h2 className="font-face-fbk">{item.name}</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography style={{width:'100%', alignItems:'center', fontFamily:"FuturaBook"}}>
                        <p className="font-face-fbk">{item.description}</p>
                        <p className="font-face-fbk">Pret: {item.price}</p>
                        <div style={{padding:'0% 30%', margin:'auto'}} >
                          <Button buttonStyle='btn--primary' className="font-face-fbk" buttonSize='btn--mobile' onClick={() => {handleClick(item.name.toString(), item.model.toString())}}>View in 3D</Button>
                        </div> 
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </>)})}
              </div>
          </>
          )})}
        </div>
      </div>
    </div>
  );
}
