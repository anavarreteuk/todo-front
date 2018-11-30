import React from 'react'
import UserItem from './UserItem'
import { Table } from 'semantic-ui-react'
import UserListHeader from './UserListHeader'



const UserList = (props) => (
  <Table singleLine> 
    <UserListHeader/>
    <Table.Body>
      {props.users.map(user => <UserItem key={user.id} user={user} selectUserHandler={props.selectUserHandler} deleteUserHandler={props.deleteUserHandler}/>)}
    </Table.Body >
  </Table>
)
export default UserList

