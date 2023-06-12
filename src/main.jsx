// React
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
// Redux
import { Provider } from 'react-redux';
import Store from './redux/Store';
// Application
import App from './App.jsx';
// Style
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <App />
  </Provider>
)
