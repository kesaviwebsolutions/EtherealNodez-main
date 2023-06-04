import React, { useEffect, useState, useLayoutEffect } from "react";
import { MdDashboard, MdPendingActions } from "react-icons/md";
import { GiWallet, GiSpawnNode, GiPodiumWinner } from "react-icons/gi";
import { BiHistory } from "react-icons/bi";
import { TbBrandPrisma } from "react-icons/tb";
import { FcPositiveDynamic } from "react-icons/fc";
import moon from "../Svg/moon-svgrepo-com.svg";
import dashboard from "../Image/Dashboard.png";
import wallet from "../Image/Wallet.png";
import node from "../Image/Node.png";
import pending from "../Image/PendingVector.png";

import history from "../Image/HistoryVector.png";
import top from "../Image/TopVector.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaHistory, FaMoon, FaSun, FaWallet } from "react-icons/fa";
import Form from "react-bootstrap/Form";

export default function SideNavbar() {
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

  const [theme, setTheme] = useState("dark-theme");
  const toggleThemelight = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("light-theme");
    window.localStorage.setItem(
      "theme",
      theme === "dark-theme" ? "light-theme" : "light-theme"
    );
    // window.location.reload();
  };
  const toggleThemedark = () => {
    theme === "dark-theme" ? setTheme("dark-theme") : setTheme("dark-theme");
    window.localStorage.setItem(
      "theme",
      theme === "dark-theme" ? "dark-theme" : "dark-theme"
    );
    // window.location.reload();
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <div className="">
        <div className="">
          <div className=" side-bg m-q-b-d-n">
            <div className="sidebar">
              <div className="sidebar__inner">
                <ul className="l-s-t-n t-d-n ">
                  <NavLink className="nav_link" to="/">
                    <li className="p-y-0_5 p-x-1_5 c-p m-t-1 sidebar__tabs ">
                      <div className="d-f a-i-c">
                        <div className="">
                          <MdDashboard className="f-s-1_5 b-c-t" />&nbsp;&nbsp;
                        </div>
                        <div className="">
                          <span className="font-f  f-w-600 ">Dashboard</span>
                        </div>
                      </div>
                    </li>
                  </NavLink>
                  <NavLink className="nav_link" to="/wallet">
                  <li className="p-y-0_5 p-x-1_5 c-p m-t-1 sidebar__tabs ">
                  <div className="d-f a-i-c">
                    <div className="">
                      <FaWallet className="f-s-1_5 b-c-t" />&nbsp;&nbsp;
                    </div>
                    <div className="">
                      <span className="font-f  f-w-600 ">Wallet</span>
                    </div>
                  </div>
                </li>
                  </NavLink>
                  <NavLink className="nav_link" to="/node">
                  <li className="p-y-0_5 p-x-1_5 c-p m-t-1 sidebar__tabs ">
                  <div className="d-f a-i-c">
                    <div className="">
                      <TbBrandPrisma className="f-s-1_5 b-c-t" />&nbsp;&nbsp;
                    </div>
                    <div className="">
                      <span className="font-f  f-w-600 ">Node</span>
                    </div>
                  </div>
                </li>
                  </NavLink>
                  <NavLink className="nav_link" to="/pendingwithdrawal">
                  <li className="p-y-0_5 p-x-1_5 c-p m-t-1 sidebar__tabs ">
                  <div className="d-f a-i-c">
                    <div className="">
                      <MdPendingActions className="f-s-1_5 b-c-t" />&nbsp;&nbsp;
                    </div>
                    <div className="">
                      <span className="font-f  f-w-600 ">Pending Withdrawl</span>
                    </div>
                  </div>
                </li>
                  </NavLink>
                  <NavLink >
                  <li className="p-y-0_5 p-x-1_5 c-p m-t-1 sidebar__tabs ">
                  <div className="d-f a-i-c">
                    <div className="">
                      <FaHistory className="f-s-1_5 b-c-t" />&nbsp;&nbsp;
                    </div>
                    <div className="">
                      <span className="font-f  f-w-600 ">History</span>
                    </div>
                  </div>
                </li>
                  </NavLink>
                  <NavLink className="nav_link" to="/topearner">
                  <li className="p-y-0_5 p-x-1_5 c-p m-t-1 sidebar__tabs ">
                  <div className="d-f a-i-c">
                    <div className="">
                      <GiPodiumWinner className="f-s-1_5 b-c-t" />&nbsp;&nbsp;
                    </div>
                    <div className="">
                      <span className="font-f  f-w-600 ">Top Earners</span>
                    </div>
                  </div>
                </li>
                  </NavLink>
                </ul>
                <div className="sidebar__bottom m-l-0 ps-a b-o-4 t-a-c p-r-3 w-100">
                  <ul className="l-s-t-n">
                    <li>
                    {theme != "dark-theme" ? (
                      <span onClick={() => toggleThemedark()} className="">
                        <FaMoon  className="f-s-1_5"  />
                      </span>
                    ) : (
                      <span onClick={() => toggleThemelight()} className="">
                      <FaSun className="f-s-1_5" />
                      </span>
                    )}
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
