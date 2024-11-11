import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
       <Navbar style={{backgroundColor:"#e36300"}} className="">
        <Container>
         <Link to={'/'} style={{textDecoration:"none"}}>
         <Navbar.Brand href="">
            <img style={{backgroundColor:"#e36300",width:"40px",height:"40px"}} alt="" src="https://images.videolan.org/images/VLC-IconSmall.png" 
              className="d-inline-block align-top "/>
              {' '}
            VLC Media Player
          </Navbar.Brand>
         
         </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
