import React from "react";
import MarketingAppComponent from "./components/MarketingAppComponent";
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header';

export default () => {
    return (
        <>
            <BrowserRouter>
                <div>
                    <Header />
                    <MarketingAppComponent />
                </div>
            </BrowserRouter>
        </>
    );
};