import React, {useState} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Switch, Route, Link} from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import * as Icon from "react-icons/ai";
import '../custom.css';

function Dashboard({ routes }) {
  const navTitle = window.location.pathname.replace('/admin/', '');
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className="dashboard">
      <Container>
        <Row>
          <Col md={3} sm={3} className="relative">
            <Sidebar sidebar={sidebar}/>
          </Col>
          <Col md={9} sm={9}>
            <div className="sidebar-nav">
              <Link to='#' className="menu-bars">
                <Icon.AiOutlineMenu onClick={showSidebar}/>
              </Link>
              <p className="nav-title">{navTitle}</p>
            </div>
            <Switch>
              {routes.map((route, i) => (
                <Route
                  path={route.path}
                  render={props => (
                  <route.component {...props} routes={route.routes} />
                )}
              />
              ))}
            </Switch>
          </Col>
        </Row>
      </Container>
  </div>    
  )
}

export default Dashboard
