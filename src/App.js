import './App.css';
import {
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ContactUs from './components/Contact';
import NotFound from './components/NotFound';
import PublicRoute from "./utils/PublicRoute";
import Layout from "./components/Layout";

function App() {

  const routes = [
    { 
      path: '/', 
      key: 'Landing',
      exact: true,
      component: Home
    },
    { 
      path: '/home', 
      key: 'Home',
      exact: true,
      component: Home
    },
    { 
      path: '/about-us', 
      key: 'About',
      exact: true,
      component: About
    },
    { 
      path: '/services', 
      key: 'Services',
      exact: true,
      component: Services
    },
    { 
      path: '/portfolio', 
      key: 'Portfolio',
      exact: true,
      component: Portfolio
    },
    { 
      path: '/contact-us', 
      key: 'ContactUs',
      exact: true,
      component: ContactUs
    }
  ];
  
  return (
    <div>
        <Switch>
            {
              routes.map(({ key, path, exact, component }) => (
                <PublicRoute  
                  key={ key }
                  path={ path }
                  exact={ exact }
                  component={ component }
                  layout={ Layout }
                /> 
              ))
            } 
          <Route component={NotFound} />
        </Switch>
    </div>
  );
}

export default App;
