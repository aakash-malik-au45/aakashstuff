import React from 'react'
import './Headerblock.css'
import styled from 'styled-components'


export const Headerblock = ({title, description,btnfirst,btnsecond,backgroundiMage}) => {
  
  return (
    <Wrap Bgimage={backgroundiMage}>
    
    <div className='Headerblock'>
        <div className='Headerblockabout'>
            <div className='Headerblocktext'>
                <h1>{ title }</h1>
                <h4>{ description}<span>To Reduce Waiting</span></h4>
            </div>
            <div className='headerblockaction'>
                <button className='btnfirst'>{btnfirst}</button>
                <button className='btnsecond'>{btnsecond}</button>
            </div>
        </div>
    </div>
    </Wrap>
  )
}
export default Headerblock
const Wrap = styled.div`
background: url('https://media.wired.com/photos/59322c3a44db296121d69842/master/w_1600%2Cc_limit/939319_54913d5a4dd7d.jpg') ;
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: ${props =>`url("${props.Bgimage}")`}
`
