import React from 'react'
import { Table} from 'semantic-ui-react'
import AddUserTableHeader from './AddUserTableHeader';

const manageUsersTable = (props) => (
  <Table singleLine>
    <AddUserTableHeader handleNewUserEmailBoxChange={props.handleNewUserEmailBoxChange} 
        handleNewUserFirstNameBoxChange={props.handleNewUserFirstNameBoxChange} 
        handleNewUserLastNameBoxChange={props.handleNewUserLastNameBoxChange} 
        handleNewUserCityBoxChange={props.handleNewUserCityBoxChange} 
        handleNewUserCountryBoxChange={props.handleNewUserCountryBoxChange} 
        handleUserFormSubmit={props.handleUserFormSubmit} />
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>User Id</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Current City</Table.HeaderCell>
        <Table.HeaderCell>Current Country</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {props.users.map(user =>(
      <Table.Row key={user.id}>
        <Table.Cell>{user.id}</Table.Cell>
        <Table.Cell>{user.email}</Table.Cell>
        <Table.Cell>{user.firstname}</Table.Cell>
        <Table.Cell>{user.lastname}</Table.Cell>
        <Table.Cell>{user.city}</Table.Cell>
        <Table.Cell>{user.country}</Table.Cell>
      </Table.Row>))
        }    
      </Table.Body>
  </Table>
)

export default manageUsersTable