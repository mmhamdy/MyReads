import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Library from './App';
import SearchView from './SearchView'
import './index.css';


const rootElement = document.getElementById('root');
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Library />} />
            <Route path="/search" element={<SearchView />} />
        </Routes>
    </BrowserRouter>, 
    rootElement);


