import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
   <>
    <Container>
      <Header></Header>
      <main className='tbdr'>
        <Outlet></Outlet>
      </main>
   <Footer></Footer>
    </Container>
    
   </>
  )
}

export default Layout