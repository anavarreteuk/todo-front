import React from 'react'
import { Table } from 'semantic-ui-react'
import '../App.css';

const userItem = (props) => (
<Table.Row onClick={()=>{props.selectUserHandler(props.user)}}>
    <Table.Cell>{props.user.username}</Table.Cell>
</Table.Row>)


export default userItem
