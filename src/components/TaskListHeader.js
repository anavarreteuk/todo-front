import React from 'react'


import { Table } from 'semantic-ui-react'


const TaskListHeader = (props) => (
    
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Date</Table.HeaderCell>
                <Table.HeaderCell>Task</Table.HeaderCell>
                <Table.HeaderCell>Location</Table.HeaderCell>
                <Table.HeaderCell>Time</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

    
    
)
export default TaskListHeader