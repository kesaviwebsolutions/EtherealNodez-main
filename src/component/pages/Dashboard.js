import React, { useEffect, useLayoutEffect, useState } from "react";
import { Grid } from "@mui/material";
import SideNavbar from "./SideNavbar";
import Dropdown from "react-bootstrap/Dropdown";
import { IoIosAddCircle, IoIosAddCircleOutline } from "react-icons/io";
import { FaExchangeAlt, FaMoon, FaSun } from "react-icons/fa";
import eyevector from "../Image/EyeVector.png";
import Donut_Chart from "./Donut_Chart";
import Chart from "./Chart";
import { GrAddCircle } from "react-icons/gr";
import Datetabs from "./Dashboardfiles/Datetabs";
import Datetabs1 from "./Dashboardfiles/Datetabs1";
import BsFillMoonFill, { BsCircleFill } from "react-icons/bs";
import mini from "../Image/G1.png";
import mini2 from "../Image/G2.png";
import mini3 from "../Image/G3.png";
import mini4 from "../Image/G4.png";
import Form from "react-bootstrap/Form";
import DarkMode from "./DarkMode";
import { TbBrandPrisma } from "react-icons/tb";
import { GiPodiumWinner } from "react-icons/gi";

export default function Dashboard() {
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
              <div className="f-s-2 f-w-600 f-f-int">Dashboard</div>
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
                          <Dropdown.Item href="#/action-3">BUSD</Dropdown.Item>
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
                          <Dropdown.Item href="#/action-3">BUSD</Dropdown.Item>
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
                      <div className="font-f s-f-s-2 gray-clr">Mining Rate</div>
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
                          <Dropdown.Item href="#/action-3">BUSD</Dropdown.Item>
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

              <div className="col-lg-4 col-md-6 col-sm-6 col-6 m-y-1">
                <div className="dashboard__box-total pa-1 h-100">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col">
                      <div>
                        <div className="font-f s-f-s-2">Total Node</div>
                      </div>
                      <div>
                        <div className="d-f a-i-c">
                          <div className="">
                            <div className="font-f s-f-s-3 m-t-0_5">15</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-6 col">
                      <div className="d-f j-c-s-b m-t-0_5">
                        <div className="d-f a-i-c">
                          <div className="">
                            <div className="rectangle-p"></div>
                          </div>
                          &nbsp;
                          <div className="">
                            <span className="font-f">Mini</span>{" "}
                          </div>
                        </div>
                        <div className="">
                          <span className="f-r font-f">2</span>
                        </div>
                      </div>
                      <div className="d-f j-c-s-b m-t-0_5">
                        <div className="d-f a-i-c">
                          <div className="">
                            <div className="rectangle-s"></div>
                          </div>
                          &nbsp;
                          <div className="">
                            <span className="font-f">Standard</span>{" "}
                          </div>
                        </div>
                        <div className="">
                          <span className="f-r font-f">2</span>
                        </div>
                      </div>
                      <div className="d-f j-c-s-b m-t-0_5">
                        <div className="d-f a-i-c">
                          <div className="">
                            <div className="rectangle-h"></div>
                          </div>
                          &nbsp;
                          <div className="">
                            <span className="font-f">Heavy</span>{" "}
                          </div>
                        </div>
                        <div className="">
                          <span className="f-r font-f">2</span>
                        </div>
                      </div>
                      <div className="d-f j-c-s-b m-t-0_5">
                        <div className="d-f a-i-c">
                          <div className="">
                            <div className="rectangle-m"></div>
                          </div>
                          &nbsp;
                          <div className="">
                            <span className="font-f">Master</span>{" "}
                          </div>
                        </div>
                        <div className="">
                          <span className="f-r font-f">2</span>
                        </div>
                      </div>
                      <div className="d-f j-c-s-b m-t-0_5 m-q-b-d-n">
                        <div className="d-f a-i-c">
                          <div className="">
                            <div className="rectangle-ep"></div>
                          </div>
                          &nbsp;
                          <div className="">
                            <span className="font-f">Executive Project</span>{" "}
                          </div>
                        </div>
                        <div className="">
                          <span className="f-r font-f">2</span>
                        </div>
                      </div>
                      <div className="d-f j-c-s-b m-t-0_5 m-q-b-d-n">
                        <div className="d-f a-i-c">
                          <div className="">
                            <div className="rectangle-em"></div>
                          </div>
                          &nbsp;
                          <div className="">
                            <span className="font-f">Executive Master</span>{" "}
                          </div>
                        </div>
                        <div className="">
                          <span className="f-r font-f">2</span>
                        </div>
                      </div>
                    </div>
                    <div className="d-f m-t-2">
                      <GrAddCircle className="gr-icon" />
                      <div className="m-l-0_5 font-f">Create New Node</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 col-12 perfo  m-y-1">
                <div className="dashboard__box-perfomance pa-1 h-100">
                  <div className="row">
                    <div className="col col-sm-6 col-md-6 col-lg-8">
                      <div className="font-f f-s-1_5 ">Performance</div>
                      <div className="m-t-3 b-c-t">
                        <Donut_Chart />
                      </div>
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-4">
                      <div className="m-q-b-d-n">
                        <Datetabs />
                      </div>
                      <div className="m-q-a-d-n">
                        {" "}
                        <Datetabs1 />
                      </div>
                      <div className="t-a-c m-q-t-a-l">
                        <div className="font-f f-s-1_3">Monthly</div>
                        <div className="font-f m-t-0_5">$17,089.33</div>
                        <div className="m-t-1 m-b-1">
                          {" "}
                          <span className="d-i-b m-l-0_5 tab f-w-600">
                            <IoIosAddCircle className="icons-io m-r-0_3 f-g" />
                            67.08%
                          </span>
                        </div>
                        <span className="font-f m-t-1">
                          Your mining growth <br />
                          is 67% this month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-9 col-md-12 col-sm-12 col-12 section-port  m-y-1">
                <div className="dashboard__box-total  pa-2 ">
                  <div className="font-f f-s-2">Portfolio</div>
                  <div className="row m-t-1 bg-clr-linear p-y-0_5 b-r-5">
                    <div className="col">
                      <div className="font-f">Name</div>
                    </div>
                    <div className="col">
                      <div className="font-f">Asset</div>
                    </div>
                    <div className="col">
                      <div className="font-f">Mining Rate 24hrs</div>
                    </div>
                    <div className="col">
                      <div className="font-f">Earnings</div>
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                  </div>
                  <div className="row m-t-1">
                    <div className="col">
                      <div>
                        <div className="d-f a-i-c">
                          <div className="">
                            {" "}
                            <span className="">
                              <img src={mini} alt="" className="w-1_25" />
                              &nbsp;&nbsp;
                            </span>
                            &nbsp;
                          </div>
                          <div className="">
                            {" "}
                            <span className="font-f ">Mini Node</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-f a-i-c">
                        <span className="font-f  d-f a-i-c">2</span>
                        <span className="m-l-0_5">
                          <IoIosAddCircleOutline className="mini-node-icons  f-w-600 f-s-1_5" />
                        </span>
                      </div>
                    </div>
                    <div className="col">
                      <div>
                        <span className="font-f m-r-0_5">0.002</span>
                        <span className="font-f ">2 REAL</span>
                        <span></span>
                      </div>
                    </div>

                    <div className="col">
                      <div className="d-f ">
                        <span className="font-f  ">$1,780.12</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="">
                        <span>
                          <FaExchangeAlt className=" mini-node-icons-ex m-r-0_5 f-v" />
                        </span>
                        <span className="font-f  m-r-0_5">0.230</span>
                        <span className="font-f ">2REAL</span>
                      </div>
                    </div>

                    <div className="col">
                      <span className="">
                        <button className="font-f  detail">Details</button>
                      </span>
                    </div>
                  </div>
                  <div className="row m-t-1">
                    <div className="col">
                      <div>
                        <div className="d-f a-i-c">
                          <div className="">
                            {" "}
                            <span className="">
                              <img src={mini} alt="" className="w-1_25" />
                              &nbsp;&nbsp;
                            </span>
                            &nbsp;
                          </div>
                          <div className="">
                            {" "}
                            <span className="font-f ">Mini Node</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="d-f a-i-c">
                        <span className="font-f  d-f a-i-c">2</span>
                        <span className="m-l-0_5">
                          <IoIosAddCircleOutline className="mini-node-icons  f-w-600 f-s-1_5 " />
                        </span>
                      </div>
                    </div>
                    <div className="col">
                      <div>
                        <span className="font-f m-r-0_5">0.002</span>
                        <span className="font-f ">2 REAL</span>
                        <span></span>
                      </div>
                    </div>

                    <div className="col">
                      <div className="d-f ">
                        <span className="font-f  ">$1,780.12</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="">
                        <span>
                          <FaExchangeAlt className=" mini-node-icons-ex m-r-0_5 f-v" />
                        </span>
                        <span className="font-f  m-r-0_5">0.230</span>
                        <span className="font-f ">2REAL</span>
                      </div>
                    </div>

                    <div className="col">
                      <span className="">
                        <button className="font-f  detail">Details</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-12 col-sm-12 col-12 section-port-two  m-y-1">
                <div className="section-dashboard  pa-1">
                  <div className="d-f j-c-s-b">
                    <div className="font-f f-s-1_5 gray-clr">Portfolio</div>
                    <div className="tab-sec ">
                      <span className="font-f">Earnings</span>
                      <span className="font-f">Mining Rate</span>
                    </div>
                  </div>
                  <div className="row m-t-1">
                    <div className="col-4">
                      <div className="font-f f-s-1_3">
                        <img src={mini} alt="" className="m-r-0_5 cir-img" />
                        Mini Node
                      </div>
                    </div>
                    <div className="col-2">
                      <div>
                        <span className="font-f f-s-1_3">2 </span>
                        <span>
                          <IoIosAddCircleOutline className="mini-node-icons m-l-0_5" />
                        </span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div>
                        <div className="font-f f-s-1_3">$123.09</div>
                        <span className="font-f">0.004 2Real</span>
                      </div>
                    </div>
                    <div className="col-2">
                      <button className="detail font-f">Details</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12 col-12  ">
              <div className="dashboard__box-total pa-1 m-t-1">
              <div className="font-f f-s-1_3">Activate New Node</div>
              <div className="row m-t-1">
                <div className="col-2">
                  <span>
                    <img src={mini} alt="" className="cir-img" />
                  </span>
                </div>
                <div className="col-8">
                  {" "}
                  <div className="font-f ">Mini Node</div>
                </div>
                <div className="col-2">
                  <span className="f-r">
                    {" "}
                    <Form>
                      {["radio"].map((type) => (
                        <div key={`default-${type}`} className="m-b-0_5">
                          <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label={``}
                          />
                        </div>
                      ))}
                    </Form>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <span>
                    <img src={mini} alt="" className="cir-img" />
                  </span>
                </div>
                <div className="col-8">
                  {" "}
                  <div className="font-f ">Standard Node</div>
                </div>
                <div className="col-2">
                  <span className="f-r">
                    {" "}
                    <Form>
                      {["radio"].map((type) => (
                        <div key={`default-${type}`} className="m-b-0_5">
                          <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label={``}
                          />
                        </div>
                      ))}
                    </Form>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <span>
                    <img src={mini} alt="" className="cir-img" />
                  </span>
                </div>
                <div className="col-8">
                  {" "}
                  <div className="font-f ">Heavy Node</div>
                </div>
                <div className="col-2">
                  <span className="f-r">
                    {" "}
                    <Form>
                      {["radio"].map((type) => (
                        <div key={`default-${type}`} className="m-b-0_5">
                          <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label={``}
                          />
                        </div>
                      ))}
                    </Form>
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <span>
                    <img src={mini} alt="" className="cir-img" />
                  </span>
                </div>
                <div className="col-8">
                  {" "}
                  <div className="font-f ">Master Node</div>
                </div>
                <div className="col-2">
                  <span className="f-r">
                    {" "}
                    <Form>
                      {["radio"].map((type) => (
                        <div key={`default-${type}`} className="m-b-0_5">
                          <Form.Check // prettier-ignore
                            type={type}
                            id={`default-${type}`}
                            label={``}
                          />
                        </div>
                      ))}
                    </Form>
                  </span>
                </div>
              </div>
              <div className="m-y-1 ">
                <div className="d-f a-i-c j-c-s-b p-x-1 p-y-0_5 b-r-5 b-c-b c-w">
                  <div className="font-f">$450.00</div>
                  <div className="">
                    {" "}
                    <FaExchangeAlt className="  m-r-0_5 f-v" />
                  </div>
                  <div className="font-f">0.241 2REAL</div>
                </div>
              </div>
              <div className="m-y-1">
                <button className="w-100 b-n font-f button-clr-linear c-w p-y-0_5 b-r-5">Buy Now</button>
              </div>
                </div>
                <div className="dashboard__box-total pa-1 m-t-2 m-b-4">
                <div className="font-f f-s-1_3"><GiPodiumWinner className="f-s-1_5 b-c-t" />&nbsp;  Top Earners</div>
                  <div className="d-f a-i-c j-c-s-b m-y-0_5">
                    <div className="f-p"><BsCircleFill className="f-p f-s-1_25"/></div>
                    <div className="font-f">0xa05..Ba2c</div>
                    <div className="font-f">26</div>
                    <div className="f-p"><TbBrandPrisma className="f-p f-s-1_25" /></div>
                  </div>
                  <div className="d-f a-i-c j-c-s-b m-y-0_5">
                  <div className="f-p"><BsCircleFill className="f-v f-s-1_25"/></div>
                  <div className="font-f">0xa05..Ba2c</div>
                  <div className="font-f">26</div>
                  <div className="f-p"><TbBrandPrisma className="f-v f-s-1_25" /></div>
                  </div>
                  <div className="d-f a-i-c j-c-s-b m-y-0_5">
                  <div className="f-p"><BsCircleFill className="f-green f-s-1_25"/></div>
                  <div className="font-f">0xa05..Ba2c</div>
                  <div className="font-f">26</div>
                  <div className="fill-green"><TbBrandPrisma className="f-green f-s-1_25" /></div>
                </div>
             
                <div className="m-y-1">
                  <button className="w-100 b-n font-f button-clr-linear c-w p-y-0_5 b-r-5">Buy Now</button>
                </div>
              </div>
              </div>
              

              <div></div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
