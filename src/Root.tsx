import {Provider} from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import React from 'react';
import { IStoreType } from './types/storeType';


const Root = ({store} :IStoreType) => {
  
  return <Provider store={store}>
        <BrowserRouter>
                <Routes>
                <Route path="/" element={<App/>} />
                </Routes>
            </BrowserRouter>
  </Provider> 

};

export default Root

