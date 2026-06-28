import React from "react";
import MarketingAppComponent from "./components/MarketingAppComponent";
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import { createGenerateClassName, StylesProvider } from "@material-ui/core";

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
})

export default () => {
    return (
        <>
            <BrowserRouter>
                <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <MarketingAppComponent />
                </div>
            </StylesProvider>
        </BrowserRouter >
        </>
    );
};