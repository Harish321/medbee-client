import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from './App';
import Dashboard from './Dashboard/Dashboard'
import * as serviceWorker from './serviceWorker';
import PersistentDrawerLeft from './nav-bar/navigationBar'
import { samples } from "./pages"
import "./index.css"

import { ThemeProvider, createTheme, makeStyles } from '@mui/material/styles';


const theme = createTheme();

const root = ReactDOM.createRoot(
    document.getElementById("root")
  );

root.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <PersistentDrawerLeft/>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/varianceSafety" element={<App formData={samples.VarianceSafteyForm}/>} />
                <Route path="/risk" element={<App formData={samples.RiskForm}/>} />
                <Route path="/surgical" element={<App formData={samples.IndicatorForSurgicalForm}/>} />
                <Route path="/medicationSafety" element={<App formData={samples.MedicationSafetyForm}/>} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
