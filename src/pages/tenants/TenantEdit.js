// import React from 'react'
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import MultiSelectInput from '../../utility/forms/MultiSelectInput';
import React, { useState } from "react";
import { DateMask } from '../../utility/forms/DateInput';

const TenantEdit = () => {

  const [dateValue, setDateValue] = useState("");

  const handleDateChange = (value) => {
    setDateValue(value);
  };

  return (
    <>
      <Container fluid="md">
        <div className='mb-3'>
          <Link to="/tenants"><BsFillArrowLeftCircleFill className='l-color-orange l-fs-18' /></Link><span className='l-fs-20 l-fw-700'> Edit Tenant </span>
        </div>
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Company Name" />
          </Form.Group>
          <Row className="g-3">
            <Col md>
              <Form.Label>Account Type</Form.Label>
              <Form.Select aria-label="Floating label select example">
                <option>Select Account</option>
                <option value="1">Account One</option>
                <option value="2">Account Two</option>
                <option value="3">Account Three</option>
                <option value="3">Account Four</option>

              </Form.Select>
            </Col>
            <Col md>
              <Form.Label>Modules</Form.Label>
              <Form.Select aria-label="Floating label select example">
                <option>Modules Select</option>
                <option value="1">Module One</option>
                <option value="2">Module Two</option>
                <option value="3">Module Three</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className="g-3">
            <Col md>
              <Form.Label>Start Date</Form.Label>
              <DateMask></DateMask>
            </Col>
            <Col md>
              <Form.Label>End Date</Form.Label>
              {/* <Form.Control type="date" /> */}
              <DateMask></DateMask>
            </Col>
          </Row>
          <h5 className='mt-3 mb-3'>ADMIN CONTACT</h5>
          {/* <Row className="g-3">
            <Col md>
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder='First Name' />
            </Col>
            <Col md>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder='Last Name' />
            </Col>
          </Row>
          <Row className="g-3">
            <Col md>
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder='Title' />
            </Col>
            <Col md>
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" placeholder='Role' />
            </Col>
          </Row> */}
          <Row className="g-3">
            <Col md>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder='Phone Number' />
            </Col>
            <Col md>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder='Email Id' />
            </Col>
          </Row>

          <Row className="g-3">
            <Col md="6">
              <Form.Label>Status</Form.Label>
              <Form.Select aria-label="Floating label select example">
                <option>Select Status</option>
                <option value="1">Active</option>
                <option value="2">Inactive</option>
                <option value="3">Expried</option>
              </Form.Select>
            </Col>
            <Col md="6">
              {/* <MultiSelectInput></MultiSelectInput> */}
              {/* <DateInput value={dateValue} onChange={handleDateChange} /> */}
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  )
}

export default TenantEdit