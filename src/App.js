import Navbar from "./component/pages/Navbar";
import "./component/scss/Main.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import "./App.scss";
import Form1 from "./component/pages/Form1";
import Page404 from "./component/pages/Page404";
import SideNavbar from "./component/pages/SideNavbar";
import Dashboard from "./component/pages/Dashboard";
import Wallet from "./component/pages/Wallet";
import PendingWithdrwal from "./component/pages/PendingWithdrwal";
import Node from "./component/pages/Node";
import TopEarner from "./component/pages/TopEarner";

function App() {
  return (
    <div className="  ">
      <Router>
        <Navbar />
        {/* <SideNavbar /> */}
        <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/wallet" element={<Wallet/>} />
      <Route path="/pendingwithdrawal" element={<PendingWithdrwal/>} />
      <Route path="/node" element={<Node/>} />
      <Route path='/topearner' element={<TopEarner/>} />
          {/*  <Route path="/form" element={<Form1 />} />
          <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
