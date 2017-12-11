import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from './data/apollo';
// react-dom (what we'll use here)
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <ApolloProvider client={ApolloClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>, document.getElementById('root'));
registerServiceWorker();
