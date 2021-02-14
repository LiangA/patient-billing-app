import './App.scss';

import { Redirect, Route, Switch } from 'react-router-dom';

import AddPatientBilling from './AddPatientBilling';
import PatientBillingTransaction from './PatientBillingTransaction';
import ViewAppointment from './ViewAppointment';

const App = () => {
  return (
    <div id="patient-billing-app">
      <Switch>
        <Route path="/add">
          <AddPatientBilling />
        </Route>

        <Route path="/transaction">
          <PatientBillingTransaction />
        </Route>

        <Route exact path="/">
          <ViewAppointment />
        </Route>

        <Route path="/error">
          <div>Page not found</div>
        </Route>

        <Redirect to="/error" />
      </Switch>
    </div>
  );
};

export default App;
