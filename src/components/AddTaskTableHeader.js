import React from 'react'
import { Table, Button, Icon, Input,Form } from 'semantic-ui-react'



const AddTaskTableHeader = (props) => (
<Table.Header>
<Table.Row>
        <Table.HeaderCell colSpan='12'>
        <Form>
            <Form.Group widths='equal'>
                <Form.Field
                    id='form-input-control-first-name'
                    control={Input}
                    placeholder='Enter Date'
                />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    placeholder='Enter  Task Title'
                />
                   <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    placeholder='Enter Location'
                />
                   <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    placeholder='Enter Time'
                />
                     <Form.Field>
                        <Button floated='right' icon primary size='medium'>
                        <Icon name='plus' /> 
                        &nbsp;&nbsp;TASK
                        </Button>
                    </Form.Field>
            </Form.Group>
        </Form>
        </Table.HeaderCell>
</Table.Row>
</Table.Header>
)


export default AddTaskTableHeader 