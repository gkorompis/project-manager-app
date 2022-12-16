import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


//importing components
import Header from './components/Header';

import MainProjectPage from './pages/main-page/ProjectPage';
import UserPage from './pages/user-page/UserPage';

const DoneApp = () =>{

    return (
        <BrowserRouter>
            <div id="done-app">
                <Header/>
                <Routes>
                    <Route path='/' element={<MainProjectPage/>}/>
                    <Route path='/user-page' element={<UserPage/>}/>
                </Routes>

            </div>
        </BrowserRouter>
    )
};

export default DoneApp;
