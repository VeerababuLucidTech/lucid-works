import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function TenantWidget() {
  return (
    <Row xs={3} md={5} className="g-4 mb-2">
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Body>
              <Card.Title className="l-fs-14 l-fw-500">Total Accounts</Card.Title>
              <Card.Text className="l-fs-20 l-fw-700"> 2514 </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default TenantWidget;
