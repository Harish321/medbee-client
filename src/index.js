import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './Dashboard/Dashboard'
import * as serviceWorker from './serviceWorker';
import PersistentDrawerLeft from './nav-bar/navigationBar'
import { samples } from "./pages"
import "./index.css"

import { ThemeProvider, createTheme, makeStyles } from '@mui/material/styles';
import { HOME_PAGE_URI,DASHBOARD_PAGE_URI, MEDICATION_PAGE_URI, RISK_FORM_TYPE, RISK_PAGE_URI, SURGICAL_PAGE_URI, VARIANCE_PAGE_URI } from './Constants/Constants';


const theme = createTheme();

const root = ReactDOM.createRoot(
    document.getElementById("root")
  );

root.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            {/* <SmartLoader></SmartLoader> */}
            <BrowserRouter>
                <PersistentDrawerLeft/>
                <Routes>
                    <Route path={HOME_PAGE_URI} element={<Dashboard />}/>
                    <Route path={DASHBOARD_PAGE_URI} element={<Dashboard />}/>
                    <Route path={VARIANCE_PAGE_URI+"/:id"} element={<App formData={samples.VarianceSafteyForm}/>} />
                    <Route path={RISK_PAGE_URI+"/:id"} element={<App formData={samples.RiskForm}/>} />
                    <Route path={SURGICAL_PAGE_URI+"/:id"} element={<App formData={samples.IndicatorForSurgicalForm}/>} />
                    <Route path={MEDICATION_PAGE_URI+"/:id"} element={<App formData={samples.MedicationSafetyForm}/>} />
                    <Route path={VARIANCE_PAGE_URI} element={<App formData={samples.VarianceSafteyForm}/>} />
                    <Route path={RISK_PAGE_URI} element={<App formData={samples.RiskForm}/>} />
                    <Route path={SURGICAL_PAGE_URI} element={<App formData={samples.IndicatorForSurgicalForm}/>} />
                    <Route path={MEDICATION_PAGE_URI} element={<App formData={samples.MedicationSafetyForm}/>} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </ThemeProvider>);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
