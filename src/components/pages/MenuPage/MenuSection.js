import React, { useState } from 'react';
import { DataOverall } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Button } from '../../Button';
import '../../../App.css';



import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { FaFileExcel } from 'react-icons/fa';

function redirect(item){
  if(item !== null)
  {
      window.location.href = "/scanner.html?item="+item;

  }
};


const Accordion = withStyles({
  root: {
    border: '3px solid rgba(255, 255, 255, 1)',
    backgroundColor: '#1c2237',
    color:'#fff',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
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
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '0px solid rgba(0, 0, 0, .125)',
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
    alignItems:'center',
    color:'#fff',
    justifyContent:'space-between'
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {DataOverall.map((subclass, subIndex) => {
       return (
        <>
          <h1 id={"item"+subIndex} style={{color:'#1c2237', width:'100%', marginTop:'10%', textAlign:'center'}}>{subclass.type}</h1>
          {subclass.variable.map((item, index) => {
          index=subIndex*100+index;
          return (
            <>
          <Accordion square expanded={expanded === item.name} onChange={handleChange(item.name)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon style={{color:'#fff'}} />}
            aria-controls="panel1a-content"
            id="panel1a-header">
              <Typography style={{fontSize:'24px'}}>{item.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{width:'100%', alignItems:'center'}}>
                <p>{item.description}</p>
                <p>Price: {item.price}</p>
                <div style={{padding:'3% 30%'}} >
                  <Button buttonStyle='btn--primary' onClick={function() { redirect(item.name.toString().toLowerCase().replace(/ /g,"_")); }}>View in 3D</Button>
                </div> 
              </Typography>
            </AccordionDetails>
          </Accordion>
         </>)})}
      </>
       )})}
    </div>
  );
}
