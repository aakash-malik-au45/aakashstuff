
import React from 'react'
import styled from 'styled-components'



import Headerblock  from './Headerblock'


const Home = () => {
  return (
    <Container>
        <Headerblock
        title="Airspace"
        description="Book Online"
        backgroundiMage="https://media.wired.com/photos/59322c3a44db296121d69842/master/w_1600%2Cc_limit/939319_54913d5a4dd7d.jpg"
        btnfirst="Custom order"
        btnsecond="Existing inventory"
        

        />
        <Headerblock
          title="GVAGON"
          description="Book Online"
          backgroundiMage="https://wallpaperaccess.com/full/122375.jpg"
          btnfirst="Custom order"
          btnsecond="Existing inventory"/>
        <Headerblock
        
        title="METALIS"
        description="Book Online."
        backgroundiMage="https://wallpapercave.com/wp/wp1942658.jpg"
        btnfirst="Custom order"
        btnsecond="Existing inventory"/>
          <Headerblock
        
        title="CHARGING WALL"
        description="Low Cost around the Globe BUY "
        backgroundiMage="https://i.pinimg.com/originals/fc/c5/20/fcc520bcdcc7516150e042fbdf44e1c3.jpg"
        btnfirst="Order Now"
        btnsecond="Learn More"/>
    </Container>
  )
}

export default Home
const Container = styled.div`
height: 100vh;`