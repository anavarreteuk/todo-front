import React from 'react'
import { Image, List } from 'semantic-ui-react'
import '../App.css';

const userItem = (props) => (
<List.Item onClick={()=>{props.selectUserHandler(props.user)}}>
    <Image avatar src='https://cdn0.iconfinder.com/data/icons/tiny-icons-1/100/tiny-11-512.png' />
        <List.Content>
        <List.Header>{props.user.username}</List.Header>
    </List.Content>
</List.Item>)


export default userItem