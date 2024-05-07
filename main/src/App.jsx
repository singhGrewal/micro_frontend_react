import React, {Suspense, useState} from "react";
import "./index.scss";
import Header from "./Components/Header";
import {Route, Routes} from "react-router-dom";
import Loader from "./Components/Loader";
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";


const RemoteProductApp = React.lazy(() => import("product/ProductApp"));
const App = () => {
        const [loading, setLoading] = useState(false);
        return <>
            <Header/>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path="/" element={<Home loading={loading} setLoading={setLoading}/>}/>
                    <Route  path="/products/*" element={<RemoteProductApp />}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </Suspense>
        </>
    }
;
export default App
