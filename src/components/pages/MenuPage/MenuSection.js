import React, { useState } from 'react';
import { DataOverall } from './Data';
import { Button } from '../../Button';
import '../../../App.css';
import  "./MenuSection.css"

import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function redirect(item, model){
  if(item !== null)
  {
      window.location.href = "/scanner.html?item="+model+"&outOf="+getTotalNr()+"&name="+item;

  }
};


const Accordion = withStyles({
  root: {
    backgroundColor: '#f04e23',
    color:'#00000',
    boxShadow: 'none',
    '&:last-child':{
      borderBottomLeftRadius: '20px',
      borderBottomRightRadius: '20px',
    },
    '&:not(:last-child)': {
      borderBottom:'2px solid rgba(0, 0, 0, 0.3)',
      paddingBottom:'2px'
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {borderBottom: '1px solid rgba(0, 0, 0, 0) !important'},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
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
    backgroundColor:'#fff7e3',
    borderBottom:'2px solid rgba(0, 0, 0, 0.8)',
    marginBottom: '-3px',
    padding: theme.spacing(2),
    // paddingBottom: '0% !important',
    alignItems:'center',
    justifyContent:'space-between',
    '&:last-child':{
      borderBottomLeftRadius: '20px',
      borderBottomRightRadius: '20px',
    }
  },
}))(MuiAccordionDetails);


function handleClick (item, model){
  redirect(item, model);
}


function getTotalNr(){
  var number = 0;

  DataOverall.map((subclass) =>{
    subclass.variable.map((item) =>{
      number++;
    });
  });

  return number;
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
          <img src='images/logo-title.png' className='logo'></img>
        </div>
        {/* <img className='background-img' src='background.jpeg'/> */}
        
        <div className="content">
          {DataOverall.map((subclass, subIndex) => {
          return (
            <>
              <h1 id={"item"+subIndex} className="font-face-antonio" style={{color:'#000000', width:'100%', marginTop:'10%', textAlign:'center', fontSize:'8vh', fontWeight:'500'}}>{subclass.name}</h1>
                <div className="food-category">
                  {subclass.variable.map((item, index) => {
                  index=subIndex*100+index;
                  return (
                    <>
                  <Accordion square id={index%100} expanded={expanded === item.name} onChange={handleChange(item.name)} style={{borderTopLeftRadius: index%100 == 0? '20px' : null,
                                                                                                                                borderTopRightRadius: index%100 == 0? '20px' : null}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon style={{color:'rgba(0, 0, 0, 0.8)'}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                      <h2 className="font-face-halvar-regular" style={{fontWeight:'900'}}>{item.name}</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography style={{width:'100%', alignItems:'center', fontFamily:"FuturaBook"}}>
                        <p className="font-face-halvar-regular" style={{fontSize:'20px', fontWeight:'600'}}>{item.description}</p>
                        <p className="font-face-halvar-regular" style={{fontSize:'20px', fontWeight:'600'}}>Pret: {item.price}</p>
                        <div style={{padding:'5% 30% 0% 30%', margin:'auto'}} >
                          <Button buttonStyle='btn--primary' className="font-face-halvar-regular" style={{fontWeight:'900 !important'}} buttonSize='btn--mobile' onClick={() => {handleClick(item.name.toString(), item.id.toString())}}>View in 3D</Button>
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
