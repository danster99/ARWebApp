import React, { useState } from 'react';
import { DataOverall } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { Button } from '../../Button';
import '../../../App.css';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #fff;
  padding-bottom: 15%;
  height: auto;
`;

const Container = styled.div`
  position: absolute;
  top:0;
  width:100%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
  background: #1c2237;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-top: 1px solid #ffff;
  h3 {
    padding: 1rem;
    font-size: 1.3rem;
    font-weight: 100 !important;
  }
  span {
    margin-right: 2rem;
  }
`;

const Dropdown = styled.div`
  background: #1c2237;
  color: #ffff;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  border-bottom: 1px solid #1c2237;
  border-top: 1px solid #1c2237;
  p {
    text-align:left;
    font-size: 1rem;
    padding-left: 1rem;
  }
`;



const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };
  
  return (
    <div style={{paddingBottom:'40%'}}>
    <IconContext.Provider value={{ color: '#ffff', size: '25px' }}>
      {DataOverall.map((subclass, subIndex) => {
        return (
          <>
          <h1 id={"item"+subIndex} style={{color:'#1c2237', marginTop:'20%'}}>{subclass.type}</h1>
          <AccordionSection >
            <Container>
              {subclass.variable.map((item, index) => {
                index=subIndex*100+index;
                return (
                  <>
                    <Wrap onClick={() => toggle(index)} key={index}>
                      <h3>{item.name}</h3>
                      <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                    </Wrap>
                    {clicked === index ? (
                      <Dropdown>
                        <p>{item.description}</p>
                        <p>Price: {item.price} </p>
                        <div style={{padding:'3% 30%'}} ><Button buttonStyle='btn--primary' onClick={function() { redirect(item.name.toString().toLowerCase().replace(" ","-")); }}>View in 3D</Button></div>  
                      </Dropdown>
                    ) : null}
                  </>
                );
              })}
            </Container>
          </AccordionSection>
          </>
        );
      })}
      
    </IconContext.Provider>
    </div>
  );
};

function redirect(item){
  if(item !== null)
  {
    window.location.href = "/scanner.html?item="+item;
  }
};

export default Accordion;