import { Grid } from "@mui/material";
import React, { useEffect, useLayoutEffect, useState } from "react";
import SideNavbar from "./SideNavbar";
import Dropdown from "react-bootstrap/Dropdown";
import eyevector from "../Image/EyeVector.png";
import { IoIosAddCircle, IoIosAddCircleOutline } from "react-icons/io";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Wallet() {
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
                <div className="f-s-2 f-w-600 f-f-int">Wallet</div>
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
              <div className="row m-t-2">
                <div className="col-lg-4 col-md-6 col-sm-6 col-6 m-y-1">
                  <div className="dashboard h-100">
                    <div className="dashboard__box pa-2 h-100">
                      <div className="d-f j-c-s-b">
                        <div className="font-f s-f-s-2 gray-clr">
                          Available Balance
                        </div>
                        <Dropdown className="b-n">
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                            className="toggle-buttons font-f pa-1 "
                          >
                            USD
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">ETH</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              BUSD
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div>
                        <h2 className="font-f f-w-600 m-t-0_5">$25,456.90</h2>
                      </div>
                      <div>
                        <div className="d-f j-c-s-b a-i-c">
                          <div className="">
                            {" "}
                            <span className="font-f f-s-1 f-w-600">
                              0.699 2Real
                            </span>
                            <span className="d-i-b m-l-0_5 tab f-w-600">
                              <IoIosAddCircle className="icons-io m-r-0_3 f-g" />
                              67.08%
                            </span>
                          </div>
                          <div className="">
                            {" "}
                            <span className="m-l-2">
                              <img src={eyevector} className="w-2" alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6 m-y-1">
                  <div className="dashboard h-100">
                    <div className="dashboard__box pa-2 h-100">
                      <div className="d-f j-c-s-b">
                        <div className="font-f s-f-s-2 gray-clr">
                          Total Earnings
                        </div>
                        <Dropdown className="b-n">
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                            className="toggle-buttons font-f pa-1"
                          >
                            TOKEN
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">ETH</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              BUSD
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div>
                        <h2 className="font-f f-w-600 m-t-0_5">2.599 2Real</h2>
                      </div>
                      <div>
                        <div className="d-f j-c-s-b a-i-c">
                          <div className="">
                            {" "}
                            <span className="font-f f-s-1 f-w-600">
                              $55,689.04
                            </span>
                            <span className="d-i-b m-l-0_5 tab f-w-600">
                              <IoIosAddCircle className="icons-io m-r-0_3 f-g" />
                              67.08%
                            </span>
                          </div>
                          <div className="">
                            {" "}
                            <span className="m-l-2">
                              <img src={eyevector} className="w-2" alt="" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-6 m-y-1">
                  <div className="dashboard h-100">
                    <div className="dashboard__box pa-2 h-100">
                      <div className="d-f j-c-s-b">
                        <div className="font-f s-f-s-2 gray-clr">
                          Mining Rate
                        </div>
                        <Dropdown className="b-n">
                          <Dropdown.Toggle
                            variant="success"
                            id="dropdown-basic"
                            className="toggle-buttons font-f pa-1"
                          >
                            USD
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">ETH</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">
                              BUSD
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div>
                        <h2 className="font-f f-w-600 m-t-0_5">$170.22</h2>
                      </div>
                      <div>
                        <div className="d-f j-c-s-b a-i-c">
                          <div className="">
                            {" "}
                            <span className="font-f f-s-1 f-w-600">
                              2.559 2Real
                            </span>
                            <div className="d-i-b m-l-0_5 tab f-w-600">
                              <IoIosAddCircle className="icons-io m-r-0_3 f-g" />
                              67.08%
                            </div>
                          </div>
                          <div className="">
                            {" "}
                            <span className="m-l-2">
                              <img src={eyevector} className="w-2" alt="" />
                            </span>
                          </div>
                        </div>
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
