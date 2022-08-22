import React from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import UsersList from './UsersList'
import PostsList from './PostsList'
import ShowUser from './ShowUser'
import ShowComments from './ShowComments'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const App = (props) => {

  return (
    <div>
      <Navbar sticky='top' bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href=""> <h2> BLOGGER </h2> </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href="/posts">Posts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Route path='/' component={Home} exact={true} />
      <Route path='/users' component={UsersList} exact={true} />
      <Route path='/posts' component={PostsList} />
      <Route path='/users/:id' component={ShowUser} />
      <Route path='/post/:id' component={ShowComments} />
    </div>
  )
}

export default App