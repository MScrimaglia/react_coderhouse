import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
        </Routes>
    )
} 

export default Router;