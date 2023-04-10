import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app/App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "styled-components";
import Home from "./pages/home/Home"
import Works from "./pages/works/Works"
import GlobalsStyles from "./Globals.styled.js";
import Blog from './pages/blog/Blog';
import Project from './pages/works/Project';
import Contact from './pages/contact/Contact';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpkf7fbENAOUE0X3ODLfo0C8cWe15FowE",
  authDomain: "portfolio-fd83d.firebaseapp.com",
  projectId: "portfolio-fd83d",
  storageBucket: "portfolio-fd83d.appspot.com",
  messagingSenderId: "134364093143",
  appId: "1:134364093143:web:b69316f573087933362e92",
  measurementId: "G-3K9KY94VWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const theme = {
  mobile: "950px",
  miniMobile: '600px'
}


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalsStyles />
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="articles" element={<Blog />} />
            <Route path="projects" element={<Works />} />
            <Route path="works/:id" element={<Project />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
