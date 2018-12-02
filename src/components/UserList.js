import React from 'react'
import UserItem from './UserItem'
import { Table } from 'semantic-ui-react'
import UserListHeader from './UserListHeader'



const UserList = (props) => (
  <Table singleLine> 
    {/* <AddUserTableHeader/> */}
    <UserListHeader/>
    <Table.Body>
      {props.users.map(user => <UserItem key={user.id} user={user} selectUserFromUserListHandler={props.selectUserFromUserListHandler} deactivateUser={props.deactivateUser}/>)}
    </Table.Body >
  </Table>
)
export default UserList

