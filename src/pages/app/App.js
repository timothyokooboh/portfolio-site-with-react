
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom"
import { StyledApp } from "./App.styled";

function App() {
  return (
    <StyledApp>
      <Navbar />
      <div style={{ marginTop: '100px', marginBottom: '150px'}}>
        <Outlet />
      </div>
      <Footer color="#000" />
    </StyledApp>
  )
}

export default App;
