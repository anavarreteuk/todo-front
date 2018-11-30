import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'



const TableFooter = (props) => (
<Table.Row>
    <Table.HeaderCell colSpan='12'>
        <Button floated='right' icon labelPosition='left' primary size='large'>
            <Icon name='plus' /> Add Task
          </Button>
    </Table.HeaderCell>
</Table.Row>
)

export default TableFooter 