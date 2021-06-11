import React from 'react'
import styled from "styled-components"
import Footer from "../components/Footer"
import Topbar from "../components/TopBar"
function Layout() {
  return (
    <LayoutContainer>
      <Topbar />
      <div className="Layout">
        <h1>Bon après-midi</h1>
      </div>
      <Footer/>
      
    </LayoutContainer>
  )
}

const LayoutContainer = styled.div`
  .Layout{
    border: 1px solid green;
    margin-left: 220px;
    padding: 10px 20px 15px 60px;
    margin-top: 62px;
    background-color: #1E1E1E;
    color: white;
    height: 800px;
  }
  flex: 2;
`;
export default Layout
