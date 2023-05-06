import React, {useState} from 'react';
import { Layout } from 'antd';
// import {Header, Footer, Content} from 'antd/es/layout/layout';
import "./Index.css";
import Head from './Head';
import Body from './Body';
import Detail from './Detail';
import Foot from './Foot';
// import Camps from './Body'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// function App(){
const App=() =>{
//  declare the bodyHeight is equal to window_Height - HeaderHeight -64
    const [bodyHeight]=useState(window.innerHeight -64 -64);

    return (
        <BrowserRouter>
        <Layout>
            <Head/ >
            <Routes>
                <Route path='/' element={ <Body windowHeight={bodyHeight} / >} />
                <Route path='/detail' element={ <Detail windowHeight={bodyHeight}/ >} />
            </Routes>

            <Foot/ >
        </Layout>
        </BrowserRouter>

    );
}

export default App;