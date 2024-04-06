import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';
import PatientScreen from './Components/PatientScreen';
import SideBarCard from './Components/sidebar/SideBarCard';

const theme = createTheme({
  palette:{
    primary:{
      main:"#884dff"
    }
  }
});
function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <div className="App">
      <div className='Enter-Area'>
      <PatientScreen />
      </div>
      <div className='side-Area'>
        <SideBarCard />
      </div >
        
      </div>

    </ThemeProvider>
    </>
  );
}

export default App;
