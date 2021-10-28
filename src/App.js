import './App.css';
import Home from './components/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Volunteers from './components/Volunteers/Volunteers';
import AdminLog from './components/AdminLog/AdminLog';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateAdmin from './PrivateAdmin/PrivateAdmin';
import AuthProvider from './context/AuthProvider';
import VolunteerRegister from './components/VolunteerRegister/VolunteerRegister';
import PrivateUser from './PrivateUser/PrivateUser';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
            <Volunteers></Volunteers>
          </Route>
          <Route path="/home">
            <Home></Home>
            <Volunteers></Volunteers>
          </Route>
          <Route path="/adminlog">
            <AdminLog></AdminLog>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateUser path="/form">
            <VolunteerRegister></VolunteerRegister>
          </PrivateUser>
          <PrivateAdmin path="/admin">
            <Dashboard></Dashboard>
          </PrivateAdmin>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
