import React, { useEffect, useLayoutEffect, useState } from "react";
import Form from 'react-bootstrap/Form';

import { ImCross } from "react-icons/im";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import { AiOutlineMenu } from "react-icons/ai";

import Modal from "react-bootstrap/Modal";
import meta from "../Image/meta.png";
import walletconnect from "../Svg/walletconnect.svg";
import "animate.css";
import logoname from '../Image/EtherealNodez.png'
import logo from "../Image/logo.png";

import dashboard from "../Image/Dashboard.png"
import wallet from "../Image/Wallet.png"
import node from "../Image/Node.png"
import pending from "../Image/PendingVector.png"
import history from "../Image/HistoryVector.png"
import top from "../Image/TopVector.png"
import { Link, NavLink } from "react-router-dom";
import {FaBars} from "react-icons/fa"

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  // ---------dark---------mode----------------

  useLayoutEffect(() => {
    const data = window.localStorage.getItem("theme");
    if (data === "dark-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  }, []);

  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    window.localStorage.setItem(
      "theme",
      theme === "dark-theme" ? "light-theme" : "dark-theme"
    );
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div className=" pa-2  navbar12 d-f a-i-c j-c-s-b p-y-1">
        <div className="">
          <ul className="l-s-t-n d-f a-i-c ">
          <NavLink to="/">
            <li className="">
              <img
                src={logo}
                alt=""
                className="logo animate__animated animate__rubberBand"
              />
              
              
            </li></NavLink>

            <li className="m-r-2 c-p f-s-1_5  f-w-600 m-l-0_5 font-f logoname">EtherealNodez</li>
           {/*  <li className="m-r-2 c-p   m-q-b-d-n">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="b-c-t b-n c-i"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu className="pa-1">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li> */}
          </ul>
        </div>
        <div className=" c-p ">
          <ul className="l-s-t-n d-f a-i-c ">
            <li className="m-l-2 c-p font-f  "><button className="buttons" >Home</button></li>

          {/*   <li className="m-l-2 c-p   m-q-b-d-n">
              <Dropdown>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  className="b-c-t b-n c-i"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu className="pa-1">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li> */}
        {/*  <li className="m-l-2 c-pq ">
            <span className="" onClick={() => toggleTheme()}>{theme === "dark-theme" ? "Light mode" : "Dark mode"}</span>
            </li>  */}
         {/*    <li className="m-l-2 c-pq ">
            
              <Button
                variant="primary"
                onClick={handleShow2}
                className=" b-c-t pa-0_5 c-i b-c-i"
              >
                Connect Wallet
              </Button>
            </li> */}
          <li className="m-l-2 c-p   m-q-a-d-n ">
              {" "}
              <Button onClick={handleShow} className=" b-c-t c-i b-n pa-0">
                <AiOutlineMenu />
              </Button>
            </li> 
            
            <li className="m-l-2 c-p  "><div className="circle"></div></li>
            <li className="m-l-1 c-p  ">
            
          <div className="f-s-1 font-f  f-w-600">0xa05...BA2c</div>
            </li>
          </ul>
        </div>
      </div>

      {/* ---------------mobile-navbar---------------------------------- */}

      <Offcanvas show={show} onHide={handleClose} className="pa-1 side-bg">
        <Offcanvas.Header>
          <Offcanvas.Title>
            {" "}
            <div className="image-dog1">
              <a href="/" target="_blank">
                <img src={logo} alt="" className="" /><span className="m-r-2 c-p f-s-1_5 c-b f-w-600 m-l-0_5 font-f">EtherealNodez</span>
              </a>
            </div>
          </Offcanvas.Title>
          <ImCross onClick={handleClose} color="black" />
        </Offcanvas.Header>
        <Offcanvas.Body>
        <div className="">
      <div className="sidebar">
        <div className="sidebar__inner">
          <ul className="l-s-t-n t-d-n ">
          <NavLink to="/">
            <li className="pa-0_5 c-p m-t-1 sidebar__tabs ">
              {/* <MdDashboard className="m-r-0_5 " /> */}
              <img src={dashboard} alt="" className="m-r-1 "/>
              <span className="font-f  f-w-600 p-t-0_5">Dashboard</span>
            </li></NavLink>
            <NavLink to="/wallet">
            <li className="pa-0_5 c-p m-t-1 sidebar__tabs">
              {/* <GiWallet className="m-r-0_5" /> */}
              <img src={wallet} alt="" className="m-r-1"/>
              <span className="font-f  f-w-600 p-t-0_5">Wallet</span>
            </li></NavLink>
            <NavLink to="/node">
            <li className="pa-0_5 c-p m-t-1 sidebar__tabs">
            <img src={node} alt="" className="m-r-1"/>
              <span className="font-f  f-w-600 p-t-0_5">Node</span>
            </li></NavLink>
            <NavLink to="/pendingwithdrawal">
            <li className="pa-0_5 c-p m-t-1 sidebar__tabs">
            <img src={pending} alt="" className="m-r-1"/>
              <span className="font-f  f-w-600 p-t-0_5">Pending Withdrawal</span>
            </li></NavLink>
            <NavLink to="/history">
            <li className="pa-0_5 c-p m-t-1 sidebar__tabs">
            <img src={history} alt="" className="m-r-1"/>
              <span className="font-f  f-w-600 p-t-0_5">History</span>
            </li></NavLink>
            <NavLink to="/topearner">
            <li className="pa-0_5 c-p m-t-1 sidebar__tabs ">
            <img src={top} alt="" className="m-r-1"/>
              <span className="font-f  f-w-600 p-t-0_5">Top Earners</span>
            </li></NavLink>
          </ul>
          <div className="sidebar__bottom m-l-0 ps-a b-o-1">
          <ul className="l-s-t-n">
          <li>
          <input type="checkbox" id="darkmode-toggle" value='dark mode'/>
          <label for="darkmode-toggle">
          <span className="" onClick={() => toggleTheme()}>{theme === "dark-theme" ? "Light mode" : "Dark mode"}</span>
          </label>
          </li>
         <li>
       
         </li>
          </ul>
          </div>
        </div>
      </div>
      </div>
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={show2} onHide={handleClose2} className="">
        <div className="">
          <Modal.Header closeButton>
            <Modal.Title className="t-a-c m-a c-i">
              Please Connect Your Wallet
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <div className="walletconnect d-f a-i-c j-c-s-e m-y-2">
              <img src={meta} alt="" className="w-7" />
              <img src={walletconnect} alt="" className="w-5" />
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default Navbar;
