import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import './App.css';
import { Grid, Segment } from 'semantic-ui-react'
import LeftDiv from './components/LeftDiv'
import RightDiv from './components/RightDiv'
import ManageUsersTable from './components/ManageUsersTable';

export default class MenuBar extends Component {
  state = {
    activeItem: 'Assignment Dashboard',
    users: [],
    selectedUser: [],
    activeUsers: [],
    selectedUserTasks:[],
    activeTasks: [],
    //NEW USER INPUT  
    uservalue: '',
    emailvalue:'',
    firstnamevalue:'',
    lastnamevalue:'',
    cityvalue:'',
    countryvalue:'',
    //NEW TASK INPUT
    datevalue: '',
    taskvalue: '',
    timevalue: '',
    locationvalue: ''

  }



  //Get All Users And Filter By Active User 
  componentDidMount() {
    fetch(`https://radiant-forest-10458.herokuapp.com/api/v1/users`)
      .then(resp => resp.json())
      .then(data => {
        data.map(user => user.selected = false)
        this.setState({ users: [...data] })
        let activeUsers = this.state.users.filter(user=>user.is_active)
        this.setState({ activeUsers: activeUsers })
      }
    )     

    fetch(`https://radiant-forest-10458.herokuapp.com/api/v1/tasks`)
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
    this.postNewUserToServerAndPage()
    this.setState({
      email: this.state.emailvalue,
      firstname: this.state.firstnamevalue,
      lastname: this.state.lastnamevalue,
      city: this.state.cityvalue,
      country: this.state.countryvalue,
    });
  }

  handleNewUserEmailBoxChange = (event) => {
    this.setState({ emailvalue: event.target.value })
  }
  handleNewUserFirstNameBoxChange = (event) => {
    this.setState({ firstnamevalue: event.target.value })
  }
  handleNewUserLastNameBoxChange = (event) => {
    this.setState({ lastnamevalue: event.target.value })
  }
  handleNewUserCityBoxChange = (event) => {
    this.setState({ cityvalue: event.target.value })
  }

  handleNewUserCountryBoxChange = (event) => {
    this.setState({ countryvalue: event.target.value })
  }

  postNewUserToServerAndPage = () => {
    fetch('https://radiant-forest-10458.herokuapp.com/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
 
         user: { 
           email: this.state.emailvalue,
           firstname: this.state.firstnamevalue,
           lastname: this.state.lastnamevalue,
           city: this.state.cityvalue,
           country: this.state.countryvalue
         }
      })
    }
    )
    .then(resp => resp.json())
    .then(user => (this.setState({ activeUsers: [...this.state.activeUsers, user] })))
    .then(this.componentDidMount())
  }

  removeUserFromGroup = (user) => {
    fetch(`https://radiant-forest-10458.herokuapp.com/api/v1/users/${user.id}`, {
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


  addUserToGroup = (user) => {
    fetch(`https://radiant-forest-10458.herokuapp.com/api/v1/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        is_active: true
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
    fetch('https://radiant-forest-10458.herokuapp.com/api/v1/tasks', {
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
    fetch(`https://radiant-forest-10458.herokuapp.com/api/v1/tasks/${task.id}`, {
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
          <Menu.Item name='Assignment Dashboard' active={activeItem === 'Assignment Dashboard'} onClick={this.handleItemClick} />
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
      {this.state.activeItem==='manage users'?
      <Grid.Column width={16}>
            <Segment basic>
              <ManageUsersTable users={this.state.users}
              handleNewUserEmailBoxChange={this.handleNewUserEmailBoxChange} 
              handleNewUserFirstNameBoxChange={this.handleNewUserFirstNameBoxChange} 
              handleNewUserLastNameBoxChange={this.handleNewUserLastNameBoxChange} 
              handleNewUserCityBoxChange={this.handleNewUserCityBoxChange} 
              handleNewUserCountryBoxChange={this.handleNewUserCountryBoxChange} 
              handleUserFormSubmit={this.handleUserFormSubmit}
              removeUserFromGroup={this.removeUserFromGroup}
              addUserToGroup={this.addUserToGroup} />
            </Segment>
      </Grid.Column> :
      <Grid columns={2} >
        <LeftDiv 
        users={this.state.activeUsers} 
        selectUserFromUserListHandler={this.selectUserFromUserListHandler} 
        removeUserFromGroup={this.removeUserFromGroup}/>
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
      </Grid>}
      </div>
    )
  }
}
