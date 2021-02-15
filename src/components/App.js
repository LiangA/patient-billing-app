import { Redirect, Route, Switch } from 'react-router-dom';

import AddPatientAppointment from './AddPatientAppointment';
import PatientBillingTransaction from './PatientBillingTransaction';
import ViewAppointment from './ViewAppointment';
import useInitApp from '../hooks/useInitApp';

const App = () => {
  useInitApp();

  return (
    <div id="patient-billing-app">
      <Switch>
        <Route path="/add">
          <AddPatientAppointment />
        </Route>

        <Route path="/transaction/:appointmentId">
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
