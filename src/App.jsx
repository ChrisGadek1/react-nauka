import React from 'react';
import './App.scss'

import StoreProvider from "./store/StoreProvider";

const App = props => {
    return (
        <StoreProvider>
            <header>
                Hello World!
            </header>
        </StoreProvider>

    );
}

export default App;