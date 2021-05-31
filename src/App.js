import './App.css';
import Sidebar from "./components/Sidebar"
import Layout from "./components/Layout"
import Footer from "./components/Footer"
import styled from "styled-components"
function App() {
  return (
    <AppContainer>
      <div className="App">
      <Sidebar />
      <Layout />
    </div>
    </AppContainer>
  );
}
const AppContainer = styled.div`
  .App{
    display: flex;
  }
 
`;
export default App;
