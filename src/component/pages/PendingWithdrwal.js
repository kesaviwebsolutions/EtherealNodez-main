import { Grid } from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import SideNavbar from "./SideNavbar";
import mini from "../Image/G1.png";
import { FaExchangeAlt, FaMoon, FaSun } from "react-icons/fa";

export default function PendingWithdrwal() {
  // ---------dark---------mode----------------

  useLayoutEffect(() => {
    const data = window.localStorage.getItem("theme");
    if (data === "dark-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  }, []);

  const [theme, setTheme] = useState("light-theme"); // Change the initial state value

  const toggleThemelight = () => {
    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    window.localStorage.setItem(
      "theme",
      theme === "dark-theme" ? "light-theme" : "dark-theme"
    );
  };

  const toggleThemedark = () => {
    theme === "dark-theme" ? setTheme("dark-theme") : setTheme("dark-theme");
    window.localStorage.setItem(
      "theme",
      theme === "dark-theme" ? "dark-theme" : "dark-theme"
    );
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div className="">
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={3}
            xl={2}
            className="bgs-primary m-q-b-d-n "
          >
            <SideNavbar />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={9} xl={10} className="">
            <div className="container-kws">
              <div className="d-f j-c-s-b a-i-c m-t-2 m-q-a-d-n">
                <div className="f-s-2 f-w-600 f-f-int">Pending Withdrwals</div>
                <div className="">
                  {" "}
                  {theme != "dark-theme" ? (
                    <span onClick={() => toggleThemedark()} className="">
                      <FaMoon className="f-s-1_5" />
                    </span>
                  ) : (
                    <span onClick={() => toggleThemelight()} className="">
                      <FaSun className="f-s-1_5" />
                    </span>
                  )}
                </div>
              </div>
              <div className="dashboard__box m-t-2">
                <div className="pa-1">
                  <div className="font-f f-s-1_3">Pending Withdrwals</div>
                  <div className="row box-co m-t-2">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <p className="font-f f-s-1_3">Account</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                      <p className="font-f f-s-1_3">Earnings</p>
                    </div>
                  </div>
                  <div className="row m-t-1">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <div>
                        <img src={mini} alt="" className=" mini-img" />
                        <span className="font-f m-l-1 f-w-600"> Mini Node</span>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-4">
                      <div className="d-f">
                        <span className="m-r-1 font-f f-w-600 ">$1,780.12</span>
                        <FaExchangeAlt className=" mini-node-icons exchagne " />
                        <div className="real">
                          <span className="font-f m-l-1 f-w-600">0.230</span>
                          <span className="font-f m-l-1 f-w-600">2REAL</span>
                        </div>
                      </div>
                      <div className="f-s-1 real-mo">
                        {" "}
                        <span className="font-f f-w-600">0.230</span>
                        <span className="font-f m-l-0_5 f-w-600">2REAL</span>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                      <div>
                        <button className="withdrwal font-f c-w">
                          Withdraw
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row m-t-1">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <div>
                        <img src={mini} alt="" className=" mini-img" />
                        <span className="font-f m-l-1 f-w-600">
                          Standard Node
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-4">
                      <div className="d-f">
                        <span className="m-r-1 font-f f-w-600 ">$1,780.12</span>
                        <FaExchangeAlt className=" mini-node-icons exchagne " />
                        <div className="real">
                          <span className="font-f m-l-1 f-w-600">0.230</span>
                          <span className="font-f m-l-1 f-w-600">2REAL</span>
                        </div>
                      </div>
                      <div className="f-s-1 real-mo">
                        {" "}
                        <span className="font-f f-w-600">0.230</span>
                        <span className="font-f m-l-0_5 f-w-600">2REAL</span>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                      <div>
                        <button className="withdrwal font-f c-w">
                          Withdraw
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row m-t-1">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <div>
                        <img src={mini} alt="" className=" mini-img" />
                        <span className="font-f m-l-1 f-w-600">Heavy Node</span>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-4">
                      <div className="d-f">
                        <span className="m-r-1 font-f f-w-600 ">$1,780.12</span>
                        <FaExchangeAlt className=" mini-node-icons exchagne " />
                        <div className="real">
                          <span className="font-f m-l-1 f-w-600">0.230</span>
                          <span className="font-f m-l-1 f-w-600">2REAL</span>
                        </div>
                      </div>
                      <div className="f-s-1 real-mo">
                        {" "}
                        <span className="font-f f-w-600">0.230</span>
                        <span className="font-f m-l-0_5 f-w-600">2REAL</span>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                      <div>
                        <button className="withdrwal font-f c-w">
                          Withdraw
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row m-t-1">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                      <div>
                        <img src={mini} alt="" className=" mini-img" />
                        <span className="font-f m-l-1 f-w-600">
                          {" "}
                          Master Node
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-4">
                      <div className="d-f">
                        <span className="m-r-1 font-f f-w-600 ">$1,780.12</span>
                        <FaExchangeAlt className=" mini-node-icons exchagne " />
                        <div className="real">
                          <span className="font-f m-l-1 f-w-600">0.230</span>
                          <span className="font-f m-l-1 f-w-600">2REAL</span>
                        </div>
                      </div>
                      <div className="f-s-1 real-mo">
                        {" "}
                        <span className="font-f f-w-600">0.230</span>
                        <span className="font-f m-l-0_5 f-w-600">2REAL</span>
                      </div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                      <div>
                        <button className="withdrwal font-f c-w">
                          Withdraw
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
