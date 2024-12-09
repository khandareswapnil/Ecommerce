import Login from "./Component/Login";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Register from "./Component/Register";
import Home from "./Component/Home";
import ForgetPassword from "./Component/ForgetPassword";
import LeftOptDashboard from "./Component/AdminPanel/LeftOptDashboard";
import DashBoard from "./Component/DashBoard";
import AddProductOnHome from "./Component/AdminPanel/AddProductToHome";
import AddProductionMain from "./Component/AdminPanel/AddProductOnMain";
import ViewAllProductHome from "./Component/AdminPanel/ViewAllProductHome";
import ViewAllProductMain from "./Component/AdminPanel/ViewAllProductMain"
import ViewAllUser from "./Component/AdminPanel/ViewAllUser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Row, Col } from "reactstrap";


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
              <Route path="/leftoptdashboard" element={<LeftOptDashboard />} />
              <Route path="/dashboard/*" element={<DashBoard />}>
          {/* Nested Routes */}
          <Route path="addproductonhome" element={<AddProductOnHome />} />
          <Route path="addproductonmain" element={<AddProductionMain />} />
          <Route path="viewproducthome" element={<ViewAllProductHome />} />
          <Route path="viewproductmain" element={<ViewAllProductMain />} />
          <Route path="viewalluser" element={<ViewAllUser/>} />

        </Route>
                
              
            </Routes>
          </Col>
        </Row>

        <Row>
          <Col></Col>
        </Row>
      </BrowserRouter>
    </>
  );
}

export default App;
