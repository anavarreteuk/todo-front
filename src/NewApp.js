import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './App.css';
import { Grid, Segment } from 'semantic-ui-react'
import LeftDiv from './components/LeftDiv'
import RightDiv from './components/RightDiv'
import ManageUsersTable from './components/ManageUsersTable';

export default class MenuBar extends Component {
  state = {
    activeItem: 'home',
    users: [],
    selectedUser: [],
    activeUsers: [],
    selectedUserTasks:[],
    activeTasks: [],
    //NEW USER INPUT  
    uservalue: '',
    //NEW TASK INPUT
    datevalue: '',
    taskvalue: '',
    timevalue: '',
    locationvalue: ''
  }

  //Get All Users And Filter By Active User 
  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users`)
      .then(resp => resp.json())
      .then(data => {
        data.map(user => user.selected = false)
        this.setState({ users: [...data] })
        let activeUsers = this.state.users.filter(user=>user.is_active)
        this.setState({ activeUsers: activeUsers })
      }
    )     

    fetch(`http://localhost:3000/api/v1/tasks`)
      .then(resp => resp.json())
      .then(data => {
        data.map(task => task.selected = false)
        this.setState({ tasks: [...data] })
        let activeTasks = this.state.tasks.filter(task=>task.is_active)
        this.setState({ activeTasks: activeTasks })
      }
    )     
  }

  //USER FUNCTIONS
  handleUserFormSubmit = (event) => {
    event.preventDefault()
    const username = (this.state.uservalue)
    this.postNewUserToServerAndPage(username)
    this.setState({
      uservalue: ''
    });
  }

  handleNewUserInputBoxChange = (event) => {
    this.setState({ uservalue: event.target.value })
  }

  postNewUserToServerAndPage = (username) => {
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
 
         user: { username }
      })
    }
    )
    .then(resp => resp.json())
    .then(user => (this.setState({ activeUsers: [...this.state.activeUsers, user] })))
  }

  deactivateUser = (user) => {
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
      .then(result => {
        let newArray = this.state.activeUsers.filter(u => u.id !== user.id)
        this.setState({ activeUsers: newArray})
      })
  }


  selectUserFromUserListHandler = (user) => {
    console.log(this.state.selectedUser)
    this.setState({ selectedUser: [user] }) 
  }


  //MIXED 

  filterActiveTasksByUser = () => {
    let userId = this.state.selectedUser[0].id
    let activeTasks = this.state.activeTasks
    let UserActiveTasks =activeTasks.filter(task => task.user_id===userId)
    return UserActiveTasks
  }

  //TASK

  handleTaskFormSubmit = (event) => {
    event.preventDefault()
    this.postNewTaskToServerAndPage()
  }

  postNewTaskToServerAndPage = () => {
    fetch('http://localhost:3000/api/v1/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ 
          user_id: this.state.selectedUser[0].id,
          date: this.state.datevalue,
          title: this.state.taskvalue,
          location: this.state.locationvalue,
          time: this.state.timevalue
      })
    })
      .then(resp => resp.json())
      .then(task => (this.setState({ activeTasks: [...this.state.activeTasks, task] })))
  }

  deactivateTask = (task) => {
    fetch(`http://localhost:3000/api/v1/tasks/${task.id}`, {
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
      .then(result => {
        let newArray = this.state.activeTasks.filter(t => t.id !== task.id)
        this.setState({ activeTasks: newArray})
      })
  }


  handleNewDateBoxChange = (event) => {
  this.setState({ datevalue: event.target.value })
  }

  handleNewTaskBoxChange = (event) => {
    this.setState({ taskvalue: event.target.value })
  }

  handleNewTimeBoxChange = (event) => {
    this.setState({ timevalue: event.target.value })
  }

  handleNewLocationBoxChange = (event) => {
    this.setState({ locationvalue: event.target.value })
  }
  

  handleItemClick = (e, { name }) => this.setState({ activeItem: name }
    )

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='manage users'
            active={activeItem === 'manage users'}
            onClick={this.handleItemClick}/>
          {/* <Menu.Item
            name='manage groups'
            active={activeItem === 'manage groups'}
            onClick={this.handleItemClick}
          /> */}
          {/* <Menu.Item
            name='manage task bundles'
            active={activeItem === 'add task bundles'}
            onClick={this.handleItemClick}
          /> */}
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      <Grid.Column width={16}>
            <Segment basic>
              <MenuBar/>
              <ManageUsersTable users={this.state.users}/>
            </Segment>
      </Grid.Column> 
      <Grid columns={2} >
        <LeftDiv handleNewUserInputBoxChange={this.handleNewUserInputBoxChange} 
        handleUserFormSubmit={this.handleUserFormSubmit} 
        users={this.state.activeUsers} 
        selectUserFromUserListHandler={this.selectUserFromUserListHandler} 
        deactivateUser={this.deactivateUser}/>

         <RightDiv handleNewDateBoxChange={this.handleNewDateBoxChange}
          handleNewTaskBoxChange={this.handleNewTaskBoxChange}
          handleNewTimeBoxChange={this.handleNewTimeBoxChange}
          handleNewLocationBoxChange={this.handleNewLocationBoxChange}
          users={this.state.users} 
          activeTasks={this.state.activeTasks}
          selectedUser={this.state.selectedUser}
          filterActiveTasksByUser={this.filterActiveTasksByUser}
          handleTaskFormSubmit={this.handleTaskFormSubmit}
          deactivateTask={this.deactivateTask}/>
        />
      </Grid>
      </div>
    )
  }
}