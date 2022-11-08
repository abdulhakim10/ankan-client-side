import React from 'react';
import { Outlet } from 'react-router-dom';
import Foo from '../Shared/Footer/Foo';
import Header from '../Shared/Header/Header';



const Main = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
           <Foo></Foo>
        </div>
    );
};

export default Main;