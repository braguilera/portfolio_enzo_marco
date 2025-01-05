import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Provider from './contexto/Provider';
import { I18nextProvider } from "react-i18next"
import i18next from 'i18next';

import inicio_es from "./translations/es/inicio.json"
import inicio_en from "./translations/en/inicio.json"

i18next.init({
    interpolation: { escapeValue: false },
    lng:"es",
    resources: {
        es: {
            inicio: inicio_es
        },
        en: {
            inicio: inicio_en
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
