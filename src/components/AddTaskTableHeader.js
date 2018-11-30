import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'



const AddTaskTablekHeader = (props) => (
<Table.Header>
<Table.Row>
    <Table.HeaderCell colSpan='12'>
        <Button floated='right' icon labelPosition='left' primary size='mini'>
            <Icon name='plus' /> 
            Add Task
          </Button>
    </Table.HeaderCell>
</Table.Row>
</Table.Header>
)


export default AddTaskTablekHeader 