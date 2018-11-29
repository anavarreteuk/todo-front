import React from 'react'
import { List } from 'semantic-ui-react'
import UserItem from './UserItem'

const userList = (props) => (
  <List animated verticalAlign='middle'>
    {props.users.map(user => <UserItem key= {user.id}user={user} selectUserHandler={props.selectUserHandler}/>)}
  </List>
)
export default userList