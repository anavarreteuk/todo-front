import React from 'react'
import { Table, Button, Icon } from 'semantic-ui-react'



const TableFooter = (props) => (
<Table.Row>
    <Table.HeaderCell />
    <Table.HeaderCell colSpan='4'>
        <Button floated='right' icon labelPosition='left' primary size='mei'>
            <Icon name='plus' /> Add Task
          </Button>
    </Table.HeaderCell>
</Table.Row>
)

export default TableFooter 