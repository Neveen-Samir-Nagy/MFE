import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (el, {onNavigate, defaultHistory}) => {
    const history = defaultHistory || createMemoryHistory();
    if(onNavigate){
        history.listen(onNavigate);
    }
    ReactDOM.render(
        <App history={history} />,
        el
    );

    return { onContainerNavigate ({pathname}) {
        if(pathname !== history.location.pathname){
            history.push(pathname);
        }
    }}
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        mount(devRoot, {defaultHistory: createBrowserHistory()});
    }
}

export { mount };