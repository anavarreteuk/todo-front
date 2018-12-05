import React from 'react'
import { Table, Button } from 'semantic-ui-react'
import '../App.css';

const userItem = (props) => (
<Table.Row>
        <Table.Cell onClick={() => {props.selectUserFromUserListHandler(props.user) }}>
            {props.user.email}
        </Table.Cell>
        <Table.Cell>
            <Button onClick={() => props.removeUserFromGroup(props.user)} floated='right' size='mini'>
                --
            </Button>
        </Table.Cell>
</Table.Row>)


export default userItem
