import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import imageLogo from '../images/logo.png';
import '../custom.css';



function Sidebar(props) {
  const [sidebar, setSidebar] = useState(true)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <nav className={props.sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <img src={imageLogo} />
          {SidebarData.map((item, index) => {
            return (
              <li key={index} 
              className={item.cName} 
              >
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Sidebar
