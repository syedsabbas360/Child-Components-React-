import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import BaseLayout from "./components/BaseLayout"

ReactDOM.render(<BaseLayout />, document.getElementById('root'));
registerServiceWorker();
