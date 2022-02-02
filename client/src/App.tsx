import './App.css';
import { Routes, Route } from "react-router-dom";
import { FC } from "react";
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import ReadManagers from './components/manageManagers/ReadManagers';
import CreateManager from './components/manageManagers/CreateManager';

const App: FC = () => {
  return (
    <Routes>

      <Route path="/" >

        <Route index element={<Login />} />
        <Route path=":acteur" element={<Login />} />

        <Route path="dashboard" element={<Dashboard />} >
          {/*  */}
          <Route path="admin"  >
            <Route path="manageManagers"  >
              <Route path="read" element={<ReadManagers />} />
              <Route path="create" element={<CreateManager />} />
            </Route>
          </Route>
          {/*  */}
          <Route path="manager">

          </Route>
          {/*  */}
          <Route path="deliveryManager">

          </Route>
          {/*  */}
          <Route path="driver">

          </Route>
        </Route>


      </Route>

    </Routes >


  );
}

export default App;
