import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
// import { BiDotsVerticalRounded } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";


function TenantView({ name, ...props }) {
  const title = {
    name: "Title Comes Here",
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div variant="primary" onClick={handleShow} className="me-2">
        {name}
      </div>
      <Offcanvas
        className="l-width-75"
        show={show}
        onHide={handleClose}
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="">
          <h1>Tenant Table Data Come Here</h1>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

function TenantsDetails(props) {

  return (
    <div>
      {["end"].map((placement, idx) => (
        <TenantView key={idx} placement={placement} name={<BsThreeDotsVertical />} />
      ))}
    </div>
  );
}
export default TenantView;
