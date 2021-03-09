import { Switch, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import OrderHistory from './pages/OrderHistory';
import OrderOption from './pages/OrderOption';
import CreateOrder from './pages/NewOrder';
import Register from './pages/Register';
import TrackOrder from './pages/TrackOrder';
import NewOrder from './pages/NewOrder';
import Profile from './pages/Profile';
import RiderDashboard from './pages/RiderDashboard';
import RiderProfile from './pages/RiderProfile';
import RiderOrder from './pages/RiderOrder';
import { useState } from 'react';
import RiderSidebar from './pages/RiderSidebar';
import RiderLogin from './pages/RiderLogin';
import UserSidebar from './components/UserSidebar';

function App() {
  const [SidebarOpens, setSidebarOpens] = useState(false)

  const openHandler = () => {

    if (!SidebarOpens) {
      setSidebarOpens(true);
    } else {
      setSidebarOpens(false);
    }
  }
  const closeSidebar = () => {
    setSidebarOpens(false);
  }

  let riderSidebar;
  if (SidebarOpens) {
    riderSidebar = <RiderSidebar close={closeSidebar} sidebar={"user-side-bar"} />
  }
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <Route path='/user/dashboard' component={Dashboard} />
        <Route path='/user/create-order' component={NewOrder} />
        <Route path='/user/track-order' component={TrackOrder} />
        <Route path='/user/order-history' component={OrderHistory} />
        <Route path='/user/profile' component={Profile} />
        <Route path='/user/logout' component={Login} />


        //Rider
        <Route path='/rider/login' exact component={RiderLogin} />
        <Route path='/rider/logout' component={RiderLogin} />

        <Route path='/rider/dashboard'>
          <RiderDashboard
            riderSidebar={riderSidebar}
            slideOpens={SidebarOpens}
            openHandler={openHandler}
            closeSidebar={closeSidebar}
            sidebar={"user-side-bar desktop"} />
        </Route>
        <Route path='/rider/orders'>
          <RiderOrder
            riderSidebar={riderSidebar}
            slideOpens={SidebarOpens}
            openHandler={openHandler}
            closeSidebar={closeSidebar}
            sidebar={"user-side-bar desktop"} />
        </Route>
        <Route path='/rider/profile'>
          <RiderProfile
            riderSidebar={riderSidebar}
            slideOpens={SidebarOpens}
            openHandler={openHandler}
            closeSidebar={closeSidebar}
            sidebar={"user-side-bar desktop"} />
        </Route>

      </Switch>
      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
}

export default App;
