import './App.css';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';
import Footer from './components/Footer';

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
