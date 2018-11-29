import React, { Component } from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react'
import LeftDiv from './components/LeftDiv'
import RightDiv from './components/RightDiv'

class App extends Component {
  state ={
    users: [],
    selectedUser: false
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
  render() {
    return (
      <Grid columns={2} >
        <LeftDiv users = {this.state.users} selectUserHandler={this.selectUserHandler}/>
        <RightDiv selectedUser = {this.state.selectedUser}/>
    </Grid>
    );
  }
}

export default App;
