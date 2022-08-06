import { Route, Routes } from "react-router-dom";
import {Home} from "../pages/Home";
import {Cart} from "../pages/Cart";
import {Modal} from "../pages/Modal";
import {NotFound} from "../pages/NotFound";

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/modal" element={<Modal/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}