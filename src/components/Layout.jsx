import React from 'react'
import styled from "styled-components"
import Footer from "../components/Footer"
import Topbar from "../components/TopBar"
function Layout() {
  return (
    <LayoutContainer>
      <Topbar />
      <div className="Layout">
        Test
      <Footer/>
      </div>
      
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  .Layout{
    border: 1px solid green;
  }
  flex: 2;
`;
export default Layout
