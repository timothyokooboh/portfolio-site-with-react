import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { createPortal } from "react-dom";
import { StyledApp } from "./App.styled";
import { createContext, useContext, useState } from "react";

export const ImagePreviewContext = createContext();

const ImagePreviewContextProvider = ({ children }) => {
  const [image, setImage] = useState("");
  return (
    <ImagePreviewContext.Provider value={{ image, setImage }}>
      {children}
    </ImagePreviewContext.Provider>
  );
};

function App() {
  const imageContext = useContext(ImagePreviewContext);

  return (
    <ImagePreviewContextProvider>
      <StyledApp>
        <Navbar />
        <div style={{ marginTop: "100px" }}>
          <Outlet />
        </div>
        <Footer color="#000" />
      </StyledApp>
    </ImagePreviewContextProvider>
  );
}

export default App;
