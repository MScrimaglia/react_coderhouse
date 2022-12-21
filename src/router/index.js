import { Routes, Route } from "react-router-dom";
import { Home, Detail } from "../pages";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/product/:name" element={<Detail />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
    )
} 

export default Router;