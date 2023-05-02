import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

const App = () => {
    return (
        <BrowserRouter>
            <AppRouter />
            1.12
        </BrowserRouter>
    );
}

export default App;
