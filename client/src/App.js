import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import SearchBooks from './pages/SearchBooks';
// import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import { PostSong } from './components/PostSong';
import LoginForm from './components/LoginForm';
=======
import Footer from './components/Footer';
>>>>>>> StephBranch

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
<<<<<<< HEAD
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
=======
    <ApolloProvider client = {client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            {/* <Route exact path='/' component={SearchBooks} />
            <Route exact path='/saved' component={SavedBooks} /> */}
            <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
          </Switch>
          <Footer />
        </>
      </Router>
    </ApolloProvider>  
>>>>>>> StephBranch
  );
}

export default App;
