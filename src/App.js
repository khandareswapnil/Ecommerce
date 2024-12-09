import Login from "./Component/Login";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Register from "./Component/Register";
import Header from "./Component/Header";
import Home from "./Component/Home";
import ForgetPassword from "./Component/ForgetPassword";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Row, Col } from "reactstrap";
import React, { useState } from "react";
import DashBoard from "./Component/DashBoard";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Row>
          <Col>
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="/forgetPass" element={<ForgetPassword />} />
              <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
          </Col>
        </Row>  

        <Row>
          <Col>
          </Col>
        </Row>
        </BrowserRouter>

</>
  )

}

export default App;
