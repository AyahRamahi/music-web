import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker';


import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'


// create http Link to send reqeuests to
const httpLink = new HttpLink({
  uri: 'http://127.0.0.1:8000/',
})

// create an Apollo Client using the http link
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

// render the application inside the Apollo Provider with the client you created above
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
)
serviceWorker.unregister();
