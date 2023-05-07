import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./assets/components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import SingleTweet from "./pages/SingleTweet";


const Shell = () => {
    return (
        <>
        <Navbar />
        <BrowserRouter>
        <Routes>
        <Route index element={<Home />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/tweet/:id" element={<SingleTweet />} />
        </Routes>
        </BrowserRouter>
        </>
    );
};

export default Shell;