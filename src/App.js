import './App.css';
import Pengiriman from './pages/Pengiriman';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DashboardHome from './pages/DashboardHome';


function App() {
  const routes = [
    {
      path: "/login",
      component: Login
    },
    {
      path: "/admin",
      component: Dashboard,
      routes: [
        {
          path: "/admin/dashboard",
          component: DashboardHome
        },
        {
          path: "/admin/pengiriman",
          component: Pengiriman
        },
        {
          path: "/login",
          component: Login
        }
      ]
    }
  ]

  function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }

  return (
    <>
    <Router>
      <Switch>
        {
          routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))
        }
      </Switch>
    </Router>
    </>
  );
}

export default App;
