import Dropdown from "react-bootstrap/Dropdown";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
// import TenantsDetails from './TableOffCanvas';

function TenantOptions() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic" className="l-text-center">
        <BsThreeDotsVertical />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item ><Link to="/tenantView">View</Link></Dropdown.Item>
        <Dropdown.Item ><Link to="/tenantEdit">Edit</Link></Dropdown.Item>
        <Dropdown.Item ><Link to="/tenantAddModule">Add Module</Link></Dropdown.Item>
        <Dropdown.Item ><Link to="/tenantStatus">Status</Link></Dropdown.Item>
        <Dropdown.Item ><Link to="/tenantChangeType">Change of Type</Link></Dropdown.Item>
        <Dropdown.Item ><Link to="/tenantPay">Pay</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default TenantOptions;
