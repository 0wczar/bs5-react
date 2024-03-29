import Nav from "react-bootstrap/Nav";

import "./App.css";

const Sidebar = () => (
  <Nav defaultActiveKey="/home" className="flex-column" variant="pills">
    <div className="d-flex justify-content-center mb-4">
      <svg
        width="30"
        height="28"
        viewBox="0 0 30 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M16.6454 26.1561C15.0709 27.0654 13.0562 26.5254 12.1477 24.9509C11.2384 23.3764 11.7777 21.3617 13.353 20.4532C14.9275 19.5447 16.9413 20.084 17.8506 21.6592C18.7599 23.233 18.2206 25.2468 16.6454 26.1561Z"
            fill="white"
          />
          <path
            d="M12.1493 2.64838L1.26373 21.5109C0.611504 22.5164 0.531408 23.8422 1.17142 24.9506C2.08072 26.525 4.0946 27.0651 5.66908 26.1558C6.18934 25.8553 6.59363 25.4342 6.87283 24.9483L6.88046 24.9536L17.8523 5.93924L17.8492 5.93771C18.416 4.95289 18.4603 3.70185 17.8508 2.64762C16.9415 1.07237 14.9276 0.532282 13.3531 1.44158C12.8328 1.74137 12.4285 2.16322 12.1493 2.64838Z"
            fill="white"
          />
          <path
            d="M17.6358 15.4447L23.1236 24.9503C24.0329 26.5248 26.0468 27.0649 27.6221 26.1556C29.1973 25.2471 29.7366 23.2324 28.8273 21.6579L23.3395 12.1515C22.4302 10.5771 20.4163 10.037 18.8411 10.947C17.2666 11.8556 16.7265 13.8702 17.6358 15.4447Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="28.5383"
              height="27.5978"
              fill="white"
              transform="translate(0.730835)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
    <Nav.Link
      href="/home"
      className="d-flex flex-sm-fill justify-content-center p-3"
    >
      <i class="fa fa-fw fa-home align-self-center"></i>
    </Nav.Link>
    <Nav.Link
      eventKey="link-1"
      className="d-flex flex-sm-fill justify-content-center p-3"
    >
      <i class="fa fa-fw fa-clone align-self-center"></i>
    </Nav.Link>
    <Nav.Link
      eventKey="link-2"
      className="d-flex flex-sm-fill justify-content-center p-3"
    >
      <i class="fa fa-fw fa-columns align-self-center"></i>
    </Nav.Link>
    <Nav.Link
      eventKey="link-2"
      className="d-flex flex-sm-fill justify-content-center p-3"
    >
      <i class="fa fa-fw fa-table align-self-center"></i>
    </Nav.Link>
    <Nav.Link
      eventKey="link-2"
      className="d-flex flex-sm-fill justify-content-center p-3"
    >
      <i class="fa fa-fw fa-toggle-on align-self-center"></i>
    </Nav.Link>
    <Nav.Link
      eventKey="link-2"
      className="d-flex flex-sm-fill justify-content-center p-3"
    >
      <i class="fa fa-fw fa-sticky-note align-self-center"></i>
    </Nav.Link>
    <Nav.Link
      eventKey="link-2"
      className="d-flex flex-sm-fill justify-content-center p-3"
    >
      <i class="fa fa-fw fa-swatchbook align-self-center"></i>
    </Nav.Link>
    <Nav.Link
      eventKey="link-2"
      className="d-flex flex-sm-fill justify-content-center p-3"
    >
      <i class="fa fa-fw fa-mouse-pointer align-self-center"></i>
    </Nav.Link>
  </Nav>
);

export default Sidebar;
