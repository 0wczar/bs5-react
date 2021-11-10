import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";

import React from "react";

import _ from "lodash";

import { randomArray } from "./utilities";

import Sidebar from "./Sidebar";
import NavbarFilters from "./NavbarFilters";

import "./App.css";

const title = [
  "Up-sized directional website",
  "Visionary bottom-line system engine",
  "User-friendly object-oriented algorithm",
  "Enterprise-wide system-worthy implementation",
  "Right-sized multi-state success",
  "Reduced exuding help-desk"
];

const badges = [
  [
    <Badge className="badge-light-light rounded-pill text-dark py-2 fw-normal pe-3">
      <i className="fa fa-clock me-2 text-info"></i>
      Planned
    </Badge>,
    <Badge className="badge-light-light rounded-pill text-dark py-2 fw-normal pe-3">
      <i className="fa fa-clock me-2 text-info"></i>
      Stopped
    </Badge>
  ]
];

const avatars = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const color = ["primary", "warning", "success", "danger", "info", "secondary"];

const App = () => (
  <Container fluid className="bg-light">
    <Row>
      <Col
        lg="1"
        xl="auto"
        xxl="auto"
        className="bg-primary min-vh-100 align-items-end flex-column p-3 sidebar-primary"
      >
        <Sidebar />
      </Col>

      <Col lg="11" xl className="px-0">
        <NavbarFilters />
        <Table borderless hover>
          <thead className="bg-transparent border-bottom small">
            <tr>
              <th scope="col"></th>
              <th scope="col"></th>
              <th
                scope="col"
                className="small text-muted fw-normal align-middle"
              >
                Title
              </th>
              <th
                scope="col"
                className="small text-muted fw-normal align-middle"
              >
                Last Updated
              </th>
              <th
                scope="col"
                className="small text-muted fw-normal align-middle"
              >
                Due Date
              </th>
              <th
                scope="col"
                className="small text-muted fw-normal align-middle"
              >
                Members
              </th>
              <th
                scope="col"
                className="small text-muted fw-normal align-middle"
              >
                Status
              </th>
              <th
                scope="col"
                className="small text-muted fw-normal text-right align-middle"
              >
                Progress
              </th>
              <th
                scope="col"
                className="small text-muted fw-normal align-middle"
              ></th>
            </tr>
          </thead>
          <tbody>
            <React.Fragment>
              {_.times(5, (index) => (
                <tr>
                  <td className="align-middle">
                    <Form.Check aria-label="option 1" className="ms-2" />
                  </td>
                  <td className="align-middle">
                    <Button variant="link">
                      <i className="fa fa-star text-muted" />
                    </Button>
                  </td>
                  <td className="align-middle">
                    <Dropdown className="d-inline-flex me-2">
                      <Dropdown.Toggle
                        variant="link"
                        id="dropdown-basic"
                        className="text-muted"
                        bsPrefix="p-0"
                      >
                        <i
                          className={`fa fa-circle me-1 text-${randomArray(
                            color
                          )} `}
                        />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropdown-menu-macos shadow-sm rounded-5">
                        <Dropdown.Header>Color</Dropdown.Header>
                        <Dropdown.Item href="#/action-1">
                          <i className="fa fa-circle fa-fw me-2 text-primary" />
                          Blue
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1">
                          <i className="fa fa-circle fa-fw me-2 text-warning" />
                          Orange
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    {randomArray(title)}
                  </td>
                  <td className="align-middle text-muted">Sun, 12 Aug, 2012</td>
                  <td className="align-middle text-muted">Sun, 26 Feb, 2016</td>
                  <td className="align-middle">
                    <div class="d-inline-flex">
                      <div className="avatars d-flex">
                        <div className="avatars__item">
                          <Image
                            className="rounded-3"
                            src={`https://bs-5-jekyll-tomaszowczarczyk.vercel.app/images/avatars/${randomArray(
                              avatars
                            )}`}
                            alt=""
                          />
                        </div>
                        <div className="avatars__item">
                          <Image
                            className="rounded-3"
                            src={`https://bs-5-jekyll-tomaszowczarczyk.vercel.app/images/avatars/${randomArray(
                              avatars
                            )}`}
                            alt=""
                          />
                        </div>
                        <div className="avatars__item">
                          <Image
                            className="rounded-3"
                            src={`https://bs-5-jekyll-tomaszowczarczyk.vercel.app/images/avatars/${randomArray(
                              avatars
                            )}`}
                            alt=""
                          />
                        </div>
                        <div className="avatars__item">
                          <Image
                            className="rounded-3"
                            src={`https://bs-5-jekyll-tomaszowczarczyk.vercel.app/images/avatars/${randomArray(
                              avatars
                            )}`}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="align-middle text-muted">
                    {randomArray(badges)}
                  </td>
                  <td className="align-middle text-muted">25%</td>
                  <td className="align-middle text-muted">
                    <Dropdown className="d-inline-flex">
                      <Dropdown.Toggle
                        variant="link"
                        id="dropdown-basic"
                        className="text-muted"
                        bsPrefix="p-0"
                      >
                        <i className="fa fa-ellipsis-h text-muted" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu className="dropdown-menu-macos shadow-sm rounded-5">
                        <Dropdown.Header>Options</Dropdown.Header>
                        <Dropdown.Item href="#/action-1">
                          <i className="fa fa-pen fa-fw me-3 opacity-25" />
                          Edit this Task
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1">
                          <i className="fa fa-calendar fa-fw me-3 opacity-25" />
                          Due Date
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1">
                          <i className="fa fa-list fa-fw me-3 opacity-25" />
                          Add Subtask
                        </Dropdown.Item>
                        <Dropdown.Divider className="opacity-75" />
                        <Dropdown.Item href="#/action-1">
                          <i className="fa fa-trash fa-fw me-3 opacity-25" />
                          Delete
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                </tr>
              ))}
            </React.Fragment>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Container>
);

export default App;
