import React from 'react';
import {Outlet} from "react-router-dom";
import {deepMerge} from "@packages/shared/src/utils/deepMerge"
import {UserCard} from "@packages/shared/src/components/UserCard";


export const App = () => {
    deepMerge()
    return (
        <div data-testid={"App.DataTestId"}>
            <h1>ADMIN MODULE</h1>
            <Outlet/>
            <UserCard username={"FROM ADMIN"}/>
        </div>
    );
};

export default App;