import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import "./index.scss";
import ProductLists from "./Components/ProductLists";
import ProductPage from "./Components/ProductPage";

const App = () => (
    <>
        <Routes>
            <Route path="/" element={<ProductLists />}/>
            <Route path="/:productId" element={<ProductPage />}/>
        </Routes>
    </>
);

export default App;
