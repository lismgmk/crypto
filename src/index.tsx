import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./App/store";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>,
    document.getElementById('root')
);

reportWebVitals();
