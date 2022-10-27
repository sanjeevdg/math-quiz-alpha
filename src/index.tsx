import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import theme from './theme';
import { Navigate, BrowserRouter, Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import MyQuiz from './MyQuiz';
import FinalScreen from './components/FinalScreen';
import ChapterSelectionScreen from './components/ChapterSelectionScreen';
import UserLandingPage from './components/UserLandingPage';


const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);


root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
     <BrowserRouter>
    <Routes> 
      

        <Route path="/" element={<MyQuiz />}/>
        <Route path="/lesson-completed" element={<FinalScreen />}/>
        <Route path="/app" element={<App/>}/>
        <Route path="/chapter-select" element={<ChapterSelectionScreen/>}/>
        <Route path="/user-landing-page" element={<UserLandingPage/>}/>
        
                
      </Routes>
     </BrowserRouter>
  </ThemeProvider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
