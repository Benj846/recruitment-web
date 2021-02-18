import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './components/App/App';
import 'babel-polyfill';

// import NotFound from './components/App/NotFound';

//import Home from './components/Home/Home';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:3333/graphql'
});
render(
  <ApolloProvider client={client}>
    <Router>
      <App>
        <Switch>
          {/* <Route exact path="/" component={Home}/>
        <Route path="/helloworld" component={HelloWorld}/>
        <Route component={NotFound}/> */}
        </Switch>
      </App>
    </Router>
  </ApolloProvider>,
  document.getElementById('app')
);
