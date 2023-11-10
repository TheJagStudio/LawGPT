import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAtom } from "jotai";
import { isAuthenticatedAtom, UserAtom } from "./Variables.js";

// Pages
import Home from "./Pages/Home";
import Readme from "./Pages/Readme";
import DocumentWriter from "./Pages/DocumentWriter";
import LoginPage from "./Pages/LoginPage";
import ContactUs from "./Pages/ContactUs";
import SignUp from "./Pages/SignUp";
import AboutUs from "./Pages/AboutUs";
import LandingPage from "./Pages/LandingPage";
import PricingPage from "./Pages/PricingPage";
import TermsAndConditions from "./Pages/TermsAndConditions";
import Documents from "./Pages/Documents";

// Layouts
import DocLayout from "./Pages/DocLayout";
import ChatLayout from "./Pages/ChatLayout";
import HomeLayout from "./Pages/HomeLayout";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);
    const [user, setUser] = useAtom(UserAtom);
    useEffect(() => {
        if (user.first_name === "") {
            fetch("/api/isAuthenticated")
                .then((res) => res.json())
                .then((data) => {
                    setIsAuthenticated(data.isAuthenticated);
                    setUser(data.user);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route element={<HomeLayout />}>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                </Route>
                <Route element={<ChatLayout />}>
                    <Route path="/chat" element={<Home />} />
                    <Route path="/readme" element={<Readme />} />
                </Route>
                <Route element={<DocLayout />}>
                    <Route path="/co-writer" element={<DocumentWriter />} />
                    <Route path="/co-writer/:docId" element={<DocumentWriter />} />
                    <Route path="/document" element={<Documents />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
