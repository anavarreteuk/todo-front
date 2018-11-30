import React from 'react'
import { Table } from 'semantic-ui-react'


const TaskListHeader = (props) => (
    
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell  textAlign='center'>Date</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Title</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Location</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Time</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Before Image</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>After Image</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Status</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
        </Table.Header>

    
    
)
export default TaskListHeader