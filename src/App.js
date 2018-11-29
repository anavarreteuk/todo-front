import React, { Component } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react'
import LeftDiv from './components/LeftDiv'
import RightDiv from './components/RightDiv'

class App extends Component {
  state ={
    users: [],
    selectedUser: false,
    value: ''
  }

  selectUserHandler = (user) => {
      this.setState({selectedUser: [user]})
  }


  componentDidMount(){
    fetch(`http://localhost:3000/api/v1/users`)
    .then(resp=>resp.json())
    .then(data => {
      data.map(user=>user.selected=false)
      this.setState({ users: [...data] })})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const username = (this.state.value)
    console.log(username)
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: { username }
      })
    }).then(resp => resp.json())
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <Grid columns={2} >
        <LeftDiv handleChange={this.handleChange} handleSubmit= {this.handleSubmit} users = {this.state.users} selectUserHandler={this.selectUserHandler}/>
        <RightDiv selectedUser = {this.state.selectedUser}/>
    </Grid>
    );
  }
}

  

export default App;
