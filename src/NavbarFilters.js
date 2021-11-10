import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import Image from "react-bootstrap/Image";

import "./App.css";

const NavbarFilters = () => (
  <div className="bg-white shadow-sm">
    <div className="border-bottom p-3 d-flex">
      <div className="d-flex">
        <Button
          variant="link"
          size="sm"
          className="rounded-circle me-1 text-secondary align-self-center"
          style={{ height: "30px", width: "30px" }}
        >
          <i class="fa fa-chevron-left"></i>
        </Button>
        <h6 className="align-self-center mb-0 me-3">Projects</h6>

        <Dropdown>
          <Dropdown.Toggle
            variant="link"
            id="dropdown-basic"
            className="text-muted"
          >
            <i className="fa fa-cog me-1" />
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu-macos shadow-sm rounded-5">
            <Dropdown.Header>Menu options</Dropdown.Header>
            <Dropdown.Item href="#/action-1">
              <i className="fa fa-star fa-fw me-2 opacity-25" /> Add to
              Favorites
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">
              <i className="fa fa-align-right fa-fw me-2 opacity-25" /> Select
              Priority
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">
              <i className="fa fa-signal fa-fw me-2 opacity-25" /> Select Status
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">
              <i className="fa fa-user fa-fw me-2 opacity-25" /> Assign Users
            </Dropdown.Item>
            <Dropdown.Divider className="opacity-75" />
            <Dropdown.Item href="#/action-1">
              <i className="fa fa-trash fa-fw me-2 opacity-25" /> Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className="ms-auto hstack gap-4">
        <div>
          <Button
            variant="link"
            size="sm"
            className="rounded-circle text-secondary"
            style={{ height: "30px", width: "30px" }}
          >
            <i class="fa fa-columns"></i>
          </Button>
          <Button
            variant="link"
            size="sm"
            className="rounded-circle text-secondary"
            style={{ height: "30px", width: "30px" }}
          >
            <i class="fa fa-bars"></i>
          </Button>
          <Button
            variant="link"
            size="sm"
            className="rounded-circle text-secondary"
            style={{ height: "30px", width: "30px" }}
          >
            <i class="fa fa-th"></i>
          </Button>
        </div>
        <Button
          variant="primary"
          size="sm"
          className="rounded-circle"
          style={{ height: "30px", width: "30px" }}
        >
          <i class="fa fa-plus"></i>
        </Button>
      </div>
    </div>

    <div className="px-3 py-2 hstack gap-1 overflow-auto bg-white">
      <Badge
        className="badge rounded-pill py-2 pe-2 badge-add-filter"
        data-bs-toggle="modal"
        href="#modalStart"
        role="button"
      >
        Select Filter <i className="fa fa-plus ms-1"></i>
      </Badge>

      <Badge className="badge badge-light-light rounded-pill text-dark py-2 fw-normal">
        <i className="fa fa-circle me-1 text-danger"></i>
        <span className="text-muted me-1">Tag</span>Usability
        <span className="text-muted small ms-1">(12)</span>
        <span href="#" className="text-dark opacity-25 ms-1">
          <i className="fa fa-times-circle"></i>
        </span>
      </Badge>

      <Badge className="badge badge-light-light text-dark rounded-pill py-2 text-decoration-none fw-normal">
        <i className="fa fa-calendar me-2 text-muted ms-1"></i>
        <span className="text-muted me-1">Date</span>12 January 2019
        <span className="text-muted small ms-1">(12)</span>
        <span className="text-dark opacity-25 ms-2">
          <i className="fa fa-caret-down"></i>
        </span>
      </Badge>

      <Badge className="badge badge-avatar badge-light-light rounded-pill text-dark py-1 d-inline-flex align-items-center fw-normal">
        <div className="avatar-xs rounded-pill bg-dark opacity-25 small text-white d-flex align-items-center justify-content-center text-wrap small me-2">
          <span className="font-size: 10px;">JM</span>
        </div>
        <span className="text-muted me-1">Person</span>Jane Marakesh
        <span className="text-muted small ms-1">(12)</span>
        <span className="text-dark opacity-25 ms-2">
          <i className="fa fa-times-circle"></i>
        </span>
      </Badge>

      <Badge className="badge badge-avatar badge-light-light rounded-pill text-dark py-1 d-inline-flex align-items-center fw-normal">
        <div className="avatar-xs rounded-pill bg-dark opacity-25 small text-white d-flex align-items-center justify-content-center text-wrap small me-2">
          <i className="fa fa-user" style={{ fontSize: "10px" }}></i>
        </div>
        <span className="text-muted me-1">Person</span>Maria Novakovic{" "}
        <span className="text-muted small ms-1">(12)</span>
        <span href="#" className="text-dark opacity-25 ms-2">
          <i className="fa fa-times-circle"></i>
        </span>
      </Badge>

      <Badge className="badge badge-avatar badge-light-light rounded-pill text-dark py-1 d-inline-flex align-items-center fw-normal">
        <Image
          src="https://randomuser.me/api/portraits/women/65.jpg"
          className="rounded-pill me-2"
          alt="..."
          width="20"
        />
        <span className="text-muted me-1">Person</span>Kayla Moinse{" "}
        <span className="text-muted small mx-1">(12)</span>
        <span href="#" className="text-dark opacity-25 ms-1">
          <i className="fa fa-times-circle"></i>
        </span>
      </Badge>
    </div>
  </div>
);
export default NavbarFilters;
