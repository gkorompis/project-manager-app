import React, {Fragment} from 'react';
import MainProjectPage from './pages/ProjectPage';
import UserPage from './pages/UserPage';

const DoneApp = () =>{

    return (
        <Fragment>
            <MainProjectPage/>
            <UserPage/>
        </Fragment>
    )
};

export default DoneApp;
