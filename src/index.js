import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import {MyInformationProvider} from "./context/PersonalInfoContext";
import {EcommerceInformationProvider} from "./context/EcommerceContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <MyInformationProvider>
                <EcommerceInformationProvider>
                 <App/>
                </EcommerceInformationProvider>
            </MyInformationProvider>
        </BrowserRouter>
    </React.StrictMode>
);
