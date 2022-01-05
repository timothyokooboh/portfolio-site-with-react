import GlobalStyles from "./Globals.styled.js";
import Navbar from "./components/navbar/Navbar";
import { 
  Routes,
  Route,
  BrowserRouter as Router
} from "react-router-dom"
import Home from "./components/pages/home/Home"
import { ThemeProvider } from "styled-components";


const theme = {
  mobile: "950px",
  miniMobile: '600px'
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme} >
        <GlobalStyles />
        <Navbar />
        <Router>
          <Routes>
            <Route exact path="/" element={ <Home /> } />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
