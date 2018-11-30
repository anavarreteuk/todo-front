import React, { Component } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react'
import LeftDiv from './components/LeftDiv'
import RightDiv from './components/RightDiv'

class App extends Component {
  state = {
    users: [],
    selectedUser: false,
    value: ''
  }

  selectUserHandler = (user) => {
    this.setState({ selectedUser: [user] })
  }


  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users`)
      .then(resp => resp.json())
      .then(data => {
        data.map(user => user.selected = false)
        this.setState({ users: [...data] })
      })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const username = (this.state.value)
    this.postUsernameToServerAndPage(username)
    
  }

   postUsernameToServerAndPage = (username) => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: { username }
      })
    })
      .then(resp => resp.json())
      .then(user => (this.setState({ users: [...this.state.users, user] })))
  }


  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

 
 
 
 
  deleteUserHandler = (user) => {
    fetch(`http://localhost:3000/api/v1/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        is_active: false
      })
    })
      .then(resp => resp.json())
      // .then((user) => (this.setState({users: [...this.state.users, user]})))
  }
  
  showActiveUsers = () => (this.state.users.filter(user => user.is_active))

 
  render() {
    return (
      <Grid columns={2} >
        <LeftDiv handleChange={this.handleChange} handleSubmit={this.handleSubmit} users={this.showActiveUsers()} selectUserHandler={this.selectUserHandler} deleteUserHandler={this.deleteUserHandler} />
        <RightDiv users={this.state.users} selectedUser={this.state.selectedUser} />
      </Grid>
    );
  }
}



export default App;
