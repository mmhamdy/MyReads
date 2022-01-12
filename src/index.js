import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BooksApp from './App';
import './index.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<BooksApp />} />
        </Routes>
    </BrowserRouter>, 
    rootElement);


