import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';
const store = createStore(reducer);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
