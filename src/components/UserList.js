import React from 'react'
import UserItem from './UserItem'
import { Table } from 'semantic-ui-react'
import UserListHeader from './UserListHeader'
import UserSearchHeader from './UserSearchHeader';



const UserList = (props) => (
  <Table singleLine> 
  
    <UserListHeader/>
    <UserSearchHeader allusers={props.allusers} />
    <Table.Body>
      {props.users.map(user => <UserItem key={user.id} user={user} selectUserFromUserListHandler={props.selectUserFromUserListHandler} removeUserFromGroup={props.removeUserFromGroup}/>)}
    </Table.Body >
  </Table>
)
export default UserList

