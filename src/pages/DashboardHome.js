import React, {useState, useEffect} from 'react';
import { Container, Row, Tabs, Tab } from 'react-bootstrap';
import UserService from "../services/user.services"
import TableShip from '../components/TableShip';
import '../custom.css';

function DashboardHome() {
  const [key, setKey] = useState('semua');
  const [shipStatus, setShipStatus] = useState("");
  
  useEffect(() => {
    UserService.getShippingCount().then(
      (response) => {
        console.log('isi response', response)
        setShipStatus(response.data)
      }
    )
  }, [])

  return (
    <div className="dashboard">
      <Container>
        <Row>
          <div className="status-transaction">
            <div className="status-item">
              <p>Semua</p>
              {Number(shipStatus.complete) + Number(shipStatus.request)}
            </div>
            <div className="status-item">
              <p>Request</p>
              {shipStatus.request}
            </div>
            <div className="status-item">
              <p>Complete</p>
              {shipStatus.complete}
            </div>
          </div>
        </Row>
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="semua" title="Semua">
              <TableShip/>
            </Tab>
            <Tab eventKey="request" title="Requested">
              <p>Request</p>
            </Tab>
            <Tab eventKey="complete" title="Completed">
              <p>Completed</p>
            </Tab>
          </Tabs>
      </Container>
    </div>
  )
}

export default DashboardHome
