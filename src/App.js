import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Hero from "./Component/Hero";
import Marketplace from "./Component/Marketplace";
import Artist from "./Component/Artist";
import Main from "./Component/Main";
import Nftscollections from "./Component/Nftscollections";
import Community from "./Component/Community";
import Footer from "./Component/Footer";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Hero />
                <Marketplace />
                <Artist />
                <Main />
                <Nftscollections />
                {/* <Footer /> */}
              </>
            }
          />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/community" element={<Community />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
