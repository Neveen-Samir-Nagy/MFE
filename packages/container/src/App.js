import React, {lazy, Suspense} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import { createGenerateClassName, StylesProvider } from "@material-ui/core";
import Loading from "./components/Loading";
import { useState } from "react";
const MarketingLazy =  lazy(() => import("./components/MarketingAppComponent"));
const AuthLazy = lazy(() => import("./components/AuthAppComponent"));

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    return (
        <>
            <BrowserRouter>
                <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
                    <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route path="/auth">
                        <AuthLazy onSignIn={() => setIsSignedIn(true)}/>
                        </Route>
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                    </Suspense>
                </div>
            </StylesProvider>
        </BrowserRouter >
        </>
    );
};