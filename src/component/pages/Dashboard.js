import React from "react";
import { Grid } from "@mui/material";
import SideNavbar from "./SideNavbar";
import Dropdown from "react-bootstrap/Dropdown";
import { IoIosAddCircle, IoIosAddCircleOutline } from "react-icons/io";
import { FaExchangeAlt } from "react-icons/fa";
import eyevector from "../Image/EyeVector.png";
import Donut_Chart from "./Donut_Chart";
import Chart from "./Chart";
import { GrAddCircle } from "react-icons/gr";
import Datetabs from "./Dashboardfiles/Datetabs";
import mini from "../Image/G1.png";
import mini2 from "../Image/G2.png";
import mini3 from "../Image/G3.png";
import mini4 from "../Image/G4.png";
import Form from "react-bootstrap/Form";

export default function Dashboard() {
  return (
    <div className="">
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={3} m-q-b-d-n>
          <SideNavbar />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={9} className="">
          <div className="container-kws">
          <div className="row m-t-2">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="dashboard">
                <div className="dashboard__box pa-1">
                  <div className="d-f j-c-s-b">
                    <div className="font-f f-s-1_5">Available Balance</div>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="toggle-buttons font-f"
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
                    <span className="font-f f-s-1 f-w-600">0.699 2Real</span>
                    <span className="m-l-0_5 tab f-w-600">
                      <IoIosAddCircle className="icons-io m-r-0_3" />
                      67.08%
                    </span>
                    <span className="m-l-2">
                      <img src={eyevector} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="dashboard">
                <div className="dashboard__box pa-1">
                  <div className="d-f j-c-s-b">
                    <div className="font-f f-s-1_5">Total Earnings</div>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="toggle-buttons font-f"
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
                    <span className="font-f f-s-1 f-w-600">$55,689.04</span>
                    <span className="m-l-0_5 tab f-w-600">
                      <IoIosAddCircle className="icons-io m-r-0_3" />
                      67.08%
                    </span>
                    <span className="m-l-2">
                      <img src={eyevector} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="dashboard">
                <div className="dashboard__box pa-1">
                  <div className="d-f j-c-s-b">
                    <div className="font-f f-s-1_5">Mining Rate</div>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                        className="toggle-buttons font-f"
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
                    <span className="font-f f-s-1 f-w-600">2.559 2Real</span>
                    <span className="m-l-0_5 tab f-w-600">
                      <IoIosAddCircle className="icons-io m-r-0_3" />
                      67.08%
                    </span>
                    <span className="m-l-2">
                      <img src={eyevector} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-t-2">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="dashboard__box-total pa-1">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div>
                      <h4 className="font-f">Total Node</h4>
                    </div>
                    <div>
                      <div className="d-f a-i-c">
                        <div className="">
                          <h1 className="font-f f-s-4 m-t-0_5">15</h1>
                        </div>
                    
                        </div>
                    </div>
                    <div className="d-f m-t-5">
                      <GrAddCircle className="gr-icon" />
                      <div className="m-l-0_5 font-f">Create New Node</div>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                    <div className="d-f j-c-s-b row m-t-0_5">
                      <div className="col-2">
                        <div className="rectangle-p"></div>
                      </div>
                      <div className="col-8">
                        <span className="font-f">Mini</span>{" "}
                      </div>
                      <div className="col-2">
                        <span className="f-r font-f">2</span>
                      </div>
                    </div>
                    <div className="d-f j-c-s-b m-t-0_5">
                      <div className="col-2">
                        <div className="rectangle-s"></div>
                      </div>
                      <div className="col-8">
                        <span className="font-f">Standard</span>
                      </div>{" "}
                      <div className="col-2">
                        {" "}
                        <span className="f-r font-f">2</span>
                      </div>
                    </div>
                    <div className="d-f j-c-s-b m-t-0_5">
                      <div className="col-2">
                        <div className="rectangle-h"></div>
                      </div>
                      <div className="col-8">
                        {" "}
                        <span className="font-f">Heavy</span>
                      </div>{" "}
                      <div className="col-2">
                        {" "}
                        <span className="f-r font-f">2</span>
                      </div>
                    </div>
                    <div className="d-f j-c-s-b m-t-0_5">
                      <div className="col-2">
                        <div className="rectangle-m"></div>
                      </div>
                      <div className="col-8">
                        {" "}
                        <span className="font-f">Master</span>
                      </div>{" "}
                      <div className="col-2">
                        {" "}
                        <span className="f-r font-f">2</span>
                      </div>
                    </div>
                    <div className="d-f j-c-s-b m-t-0_5">
                      <div className="col-2">
                        <div className="rectangle-ep"></div>
                      </div>
                      <div className="col-8">
                        <span className="font-f">Executive Project </span>
                      </div>{" "}
                      <div className="col-2">
                        {" "}
                        <span className="f-r font-f">2</span>
                      </div>
                    </div>
                    <div className="d-f j-c-s-b m-t-0_5">
                      <div className="col-2">
                        <div className="rectangle-em"></div>
                      </div>
                      <div className="col-8">
                        <span className="font-f">Executive Master</span>{" "}
                      </div>{" "}
                      <div className="col-2">
                        <span className="f-r font-f">2</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
              <div className="dashboard__box-perfomance pa-1">
                <div className="font-f f-s-1_5">Performance</div>
                <div className="m-t-3 b-c-t"><Donut_Chart/></div>
                <div className="row">
                  <div className="col-8"></div>
                  <div className="col-4">
                    <Datetabs />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row m-t-2 m-b-4">
            <div className="col-lg-9 col-md-9 col-sm-12 col-12 section-port">
              <div className="dashboard__box-total pa-2 ">
                <div className="font-f f-s-2">Portfolio</div>
                <div className="row m-t-1">
                  <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                    <div className="font-f">Name</div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                    <div className="font-f">Asset</div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-2">
                    <div className="font-f">Mining Rate 24hrs</div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                    <div className="font-f">Earnings</div>
                  </div>
                </div>
                <div className="row m-t-1">
                  <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                    <div>
                      <span className="m-r-0_5">
                        <img src={mini} alt="" className="w-15" />
                      </span>
                      <span className="font-f f-s-0_8">Mini Node</span>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                    <div className="d-f">
                      <span className="font-f f-s-0_8 d-f a-i-c">2</span>
                      <span className="m-l-0_5">
                        <IoIosAddCircleOutline className="mini-node-icons  f-w-600" />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                    <div>
                      <span className="font-f f-s-0_8">0.002</span>
                      <span className="font-f f-s-0_8">2 REAL</span>
                      <span></span>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-3 col-3">
                    <div className="d-f f-r">
                      <span className="font-f f-s-0_8 m-r-0_5">$1,780.12</span>
                      <span>
                        <FaExchangeAlt className="m-r-0_5 mini-node-icons-ex" />
                      </span>
                      <span className="font-f f-s-0_8 m-r-0_5">0.230</span>
                      <span className="font-f f-s-0_8">2REAL</span>
                    </div>
                  </div>

                  <div className="col-lg-2 col-md-2 col-sm-2 col-2">
                    <span className="f-r">
                      <button className="font-f f-s-0_8 detail">Details</button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-12 col-12 section-port-two ">
              <div className="section-dashboard pa-1">
                <div className="d-f j-c-s-b">
                  <div className="font-f f-s-1_5">Portfolio</div>
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
                  <div><div className="font-f f-s-1_3">$123.09</div><span className="font-f">0.004 2Real</span></div>
                  </div>
                  <div className="col-2"><button className="detail font-f">Details</button></div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="dashboard__box-total pa-1">
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
                          <div key={`default-${type}`} className="mb-3">
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
                          <div key={`default-${type}`} className="mb-3">
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
                          <div key={`default-${type}`} className="mb-3">
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
                          <div key={`default-${type}`} className="mb-3">
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
