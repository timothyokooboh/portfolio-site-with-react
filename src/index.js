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
            <Route path="blog" element={<Blog />} />
            <Route path="works" element={<Works />} />
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
