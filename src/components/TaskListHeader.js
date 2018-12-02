import React from 'react'
import { Table, CustomCalendar} from 'semantic-ui-react'
import Calendar from 'react-calendar'


const TaskListHeader = (props) => (
    
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell textAlign='center'>Date</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Title</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Location</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Time</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Before</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>After</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Status</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
        </Table.Header>

    
    
)
export default TaskListHeader